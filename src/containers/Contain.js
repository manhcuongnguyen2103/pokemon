import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { observer, inject } from 'mobx-react'
import DetailPage from '../DetailPage/DetailPage'
import NoMatchPage from '../NoMatchPage/NoMatchPage'
import HomePage from '../HomePage/HomePage'
class Contain extends React.Component {
  render() {
    
    const pages = [HomePage,DetailPage,NoMatchPage];
    const { rootStore } = this.props
    const { routerStore } = rootStore
    const { activePage } = routerStore
    return (
      <Router history={window.history}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/:name" exact component={DetailPage} />
          <Route component={NoMatchPage} />
        </Switch>
      </Router>
    )
  }
}

export default inject('rootStore') (observer(Contain))