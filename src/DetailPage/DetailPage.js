import React from 'react'
import { observer, inject } from 'mobx-react'
import Sprites from './components/Sprites'
import Stats from './components/Stats'
import { Tabs, Divider, Alert } from 'antd';
import { toJS } from 'mobx'

const { TabPane } = Tabs;
class DetailPage extends React.Component {

  showError = ({error}) =>
  {
    return <Alert message="Error Text" type="error" />
  }

  componentDidMount() {
    const { rootStore } = this.props
    const { pokemonStore } = rootStore
    const { name } = this.props.match.params
    let url = 'https://pokeapi.co/api/v2/pokemon/' + name
    fetch(url)
      .then( response => response.json())
      .then( data => (pokemonStore.setCurrentPoke({sprites: data.sprites, stats:data.stats})))
      .catch(function(error) {
        const isConfirmed =  alert(error.message)
        //lam lai async -> !@#@$#%^
        // if (isConfirmed) {
        //   await this.props.history.push('/')
        // }
      });
      
  }

  render() {
    const { name } = this.props.match.params
    const { rootStore } = this.props
    const { pokemonStore } = rootStore
    let sprites = pokemonStore.getSprites;
    let stats = pokemonStore.getStats;
    let sprs = []
    if(sprites)
    {
      sprs = Object.entries(sprites)
    }

    let stas = []
    if(stats)
    {
      stas = Object.entries(stats)
    }
    
    return (
      <div>
      <Sprites sprs = {sprs}/>
      <Divider />
      <Stats stas = {stas}/>
      </div>
    )
  }

}

export default inject('rootStore') (observer(DetailPage))