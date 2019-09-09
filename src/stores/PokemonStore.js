import {observable, decorate, action, computed} from "mobx"

class PokemonStore{
    constructor(rootStore){
        this.rootStore = rootStore;
    }

    dataList = [{
    }]

    currentPoke = {}

    limit = 20
    offset = 0

    setDataList = ({dataList}) =>{
        dataList.map((data) => {data.key = data.name})

        this.dataList = dataList;
    }

    setCurrentPoke = ({sprites, stats}) =>{
        let data = {sprites, stats }
        this.currentPoke = data;
    }

    setParams = ({limit, offset}) =>{
        this.limit = limit;
        this.offset = offset;
        console.log(33, limit, offset);
    }

    get getSprites(){
        return this.currentPoke.sprites
    }

    get getStats(){
        return this.currentPoke.stats
    }

    get getLimit(){
        return this.limit
    }

    get getOffset(){
        return this.offset
    }

    fetchData() {
        
        fetch('https://pokeapi.co/api/v2/pokemon?limit=' + this.limit + '&offset=' + this.offset)
        .then( response => response.json())
        .then( data => (this.setDataList({dataList:data.results})));
        console.log(44, 'https://pokeapi.co/api/v2/pokemon/?' + this.limit + '&offset=' + this.offset);
    }
}

export default decorate(PokemonStore, {
    dataList: observable,
    currentPoke: observable,
    limit: observable,
    offset: observable,
    setDataList: action,
    setCurrentPoket: action,
    getStats: computed,
    getSprites: computed,
    getLimit: computed,
    getOffset: computed
})