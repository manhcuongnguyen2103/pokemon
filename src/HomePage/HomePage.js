import React from 'react'
import { Table } from 'antd';
import { observer, inject } from 'mobx-react'
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Url',
    dataIndex: 'url',
  }
];

const data = [
];

class HomePage extends React.Component {

  state = {
    data: [],
    pagination: {},
    loading: false,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { rootStore } = this.props
    const { routerStore } = rootStore
    routerStore.setActivePage(0)
    this.fetch();  
  }
  
  fetch = (params = {}) => {
    const { rootStore } = this.props
    const { pokemonStore } = rootStore
    this.setState({ loading: true });
    pokemonStore.setParams({limit: 10, offset: (params.page - 1) * 10})
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=' + pokemonStore.getLimit + '&offset=' + pokemonStore.getOffset)
      .then( response => response.json())
      .then( data => {
      const pagination = { ...this.state.pagination };
      pagination.total = data.count;
      this.setState({
        loading: false,
        data: data.results,
        pagination,
      });
      pokemonStore.setDataList({dataList:data.results})
    });
  };

  handleTableChange = (pagination) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      page: pagination.current,
    });
  };

  handleOnClickRow = (name) => {
    let path = "/" + name.name
    this.props.history.push(path)
    const { rootStore } = this.props
    const { routerStore } = rootStore
    routerStore.setActivePage(1)
  }
  
  render() {
    const { rootStore } = this.props
    const { pokemonStore, routerStore } = rootStore
    const { dataList } = pokemonStore
    
    return (
      <Table
        columns={columns}
        dataSource={dataList}
        pagination={this.state.pagination}
        loading={this.state.loading}
        onChange={this.handleTableChange}
        onRow={(record, rowIndex) => {
          return {
            onClick: event => this.handleOnClickRow({name: record.name}), // click row
          };}}
      />
    )
  }
}

export default inject('rootStore') (observer(HomePage))
