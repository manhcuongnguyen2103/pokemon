import PokemonStore from './PokemonStore'
import RouterStore from './RouterStore.js'

class RootStore {
    constructor() {
        this.pokemonStore = new PokemonStore(this)
        this.routerStore = new RouterStore(this)
  }
}

export default RootStore