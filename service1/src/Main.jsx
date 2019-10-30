import React from 'react'
import { withRouter, Switch, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

class Main extends React.Component {

    constructor(props){
        super(props);
        this.addHistoryChangedHandler()
    }

    addHistoryChangedHandler() {
        const { history } = this.props
        history.listen((location, action) => {
          window.top.postMessage({
            type: 'URL_CHANGE',
            payload: location.pathname
          }, '*')
        });
    }

    componentDidMount () {
        window.addEventListener('message', console.log)
    }

    render(){
        return <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
    }
}

export default withRouter(Main)