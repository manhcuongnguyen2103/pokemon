import {observable, decorate, action} from "mobx"

class RouterStore{
    constructor(rootStore){
        this.rootStore = rootStore;
    }

    activePage = 0
    
    setActivePage = (pageIndex) => {
        this.activePage = pageIndex
    }
}

export default decorate(RouterStore, {
    activeUrl: observable,
    setActivePage: action
})