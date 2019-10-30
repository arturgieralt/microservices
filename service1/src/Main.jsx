import React from 'react'
import { withRouter, Switch, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

class Main extends React.Component {

    constructor(props){
        super(props);

        this.handleMessage = this.handleMessage.bind(this);
        this.addHistoryChangedHandler()

        this.state = {
          data: null
        }
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

    handleMessage(event) {
      if(event.data.type === 'INIT_UPDATE') {
        this.setState({
          data: event.data.payload.data
        })
      }
    }

    componentDidMount () {
        window.addEventListener('message', this.handleMessage)
    }

    render(){
        return this.state.data && <div>
          <h1>Data from ParentIframe: {this.state.data}</h1>
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