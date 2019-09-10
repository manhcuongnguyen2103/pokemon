import React from 'react'
import { observer, inject } from 'mobx-react'
import { PageHeader } from 'antd';

class Header extends React.Component {

  handleBack = () => {
    window.history.back()
  }

  render() {
    const { rootStore } = this.props
    const { pokemonStore, routerStore } = rootStore
    let name = pokemonStore.getName;
    if(routerStore.getActivePage === 1){
      return (
        <PageHeader onBack={() => window.history.back()} title={name} />
      )  
    }else{
      return (
        <PageHeader  title="POKEMON LIST MASTER"/>
      )
    }
    
  }
}

export default inject('rootStore') (observer(Header))