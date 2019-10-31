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
          data: null, 
          name: null
        }
    }

    addHistoryChangedHandler() {
        const { history } = this.props
        history.listen((location, action) => {
          window.top.postMessage({
            type: 'URL_CHANGE',
            payload: location.pathname.split(this.state.name)[1]
          }, '*')
        });
    }

    handleMessage(event) {
      if(event.data.type === 'INIT_UPDATE') {
        this.setState({
          data: event.data.payload.data,
          name: event.data.payload.name
        })
      }
    }

    componentDidMount () {
        window.addEventListener('message', this.handleMessage)
    }

    render(){
        return this.state.data && this.state.name && <div>
          <h1 id='header'>Data from ParentIframe: {this.state.data}</h1>
          <nav>
            <ul>
              <li>
                <Link to={`/${this.state.name}`}>Home</Link>
              </li>
              <li>
                <Link to={`/${this.state.name}/about`}>About</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path={`/${this.state.name}/about`}>
              <About />
            </Route>
            <Route path={`/${this.state.name}`}>
              <Home />
            </Route>
          </Switch>
        </div>
    }
}

export default withRouter(Main)