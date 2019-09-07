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

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { rootStore } = this.props
    const { pokemonStore } = rootStore
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then( response => response.json())
      .then( data => (pokemonStore.setDataList({dataList:data.results})));
  }
  
  handleOnClickRow = (name) => {
    const { rootStore } = this.props
    const { routerStore } = rootStore
    let path = "/" + name
    console.log(12, name)
    window.history.pushState({name},"",name)
    //routerStore.setActivePage(1);
    console.log(2);
  }
  
  render() {
    const { rootStore } = this.props
    const { pokemonStore } = rootStore
    const { dataList } = pokemonStore
    return (
      <Table onRow={(record, rowIndex) => {
        return {
          onClick: event => this.handleOnClickRow({name: record.name}), // click row
        };
      }} columns={columns} dataSource={dataList} size="small" />
    )
  }
}

export default inject('rootStore') (observer(HomePage))
