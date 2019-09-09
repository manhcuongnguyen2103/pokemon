import React from 'react'
import { Table } from 'antd';
import { observer, inject } from 'mobx-react'
import InputForm from './components/InputForm'
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
    pokemonStore.fetchData()
    // fetch('https://pokeapi.co/api/v2/pokemon/?' + pokemonStore.getLimit + '&offset=' + pokemonStore.getOffset)
    //   .then( response => response.json())
    //   .then( data => (pokemonStore.setDataList({dataList:data.results})));
  }
  
  handleOnClickRow = (name) => {
    const { rootStore } = this.props
    const { routerStore } = rootStore
    let path = "/" + name.name
    this.props.history.push(path)
  }
  
  render() {
    const { rootStore } = this.props
    const { pokemonStore } = rootStore
    const { dataList } = pokemonStore
    return (
      <div>
        <InputForm/>
        <Table pagination={{ pageSize: 20 }} onRow={(record, rowIndex) => {
        return {
          onClick: event => this.handleOnClickRow({name: record.name}), // click row
        };
      }} columns={columns} dataSource={dataList} size="small" />
      </div>
      
    )
  }
}

export default inject('rootStore') (observer(HomePage))
