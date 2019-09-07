import React from 'react'
import { observer, inject } from 'mobx-react'
import Sprites from './components/Sprites'
import Stats from './components/Stats'
import { Tabs, Descriptions, Divider   } from 'antd';
import { toJS } from 'mobx'

const { TabPane } = Tabs;
class DetailPage extends React.Component {

  componentDidMount() {
    const { rootStore } = this.props
    const { pokemonStore } = rootStore
    const { name } = this.props.match.params
    let url = 'https://pokeapi.co/api/v2/pokemon/' + name
    fetch(url)
      .then( response => response.json())
      .then( data => (pokemonStore.setCurrentPoke({sprites: data.sprites, stats:data.stats})));
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
      
      console.log(12, stas)
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