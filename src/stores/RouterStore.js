import {observable, decorate, action, comparer, computed} from "mobx"

class RouterStore{
    constructor(rootStore){
        this.rootStore = rootStore;
    }

    activePage = 0
    
    setActivePage = (pageIndex) => {
        this.activePage = pageIndex
    }

    get getActivePage(){
        return this.activePage
    }
}

export default decorate(RouterStore, {
    activePage: observable,
    activeUrl: observable,
    setActivePage: action,
    getActivePage:computed
})