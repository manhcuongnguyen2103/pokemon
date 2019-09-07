import {observable, decorate, action, computed} from "mobx"

class PokemonStore{
    constructor(rootStore){
        this.rootStore = rootStore;
    }

    dataList = [{
    }]

    currentPoke = {}

    setDataList = ({dataList}) =>{
        dataList.map((data) => {data.key = data.name})

        this.dataList = dataList;
    }

    setCurrentPoke = ({sprites, stats}) =>{
        let data = {sprites, stats }
        this.currentPoke = data;
    }

    get getSprites(){
        return this.currentPoke.sprites
    }

    get getStats(){
        return this.currentPoke.stats
    }
}

export default decorate(PokemonStore, {
    dataList: observable,
    currentPoke: observable,
    setDataList: action,
    setCurrentPoket: action,
    getStats: computed,
    getSprites: computed
})