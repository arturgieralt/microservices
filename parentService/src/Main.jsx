import React from 'react'
import { withRouter, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import IFrameManager from './components/ViewManager';

export default class Main extends React.Component {

    render(){
        return <BrowserRouter>
        <div>
            <nav>
            <ul>
              <li>
                <Link to='/portal'>Home</Link>
              </li>
              <li>
                <Link id='link-service-1' to='/portal/service1'>My Service 1</Link>
              </li>
              <li>
                <Link to='/portal/service2'>My Service 2</Link>
              </li>
            </ul>
          </nav>
          <Switch>
          <Route path="/portal" exact>
              <Home />
          </Route>
          <Route path="/portal/:name" children={<IFrameManager />} />
          </Switch>
        </div>
        </BrowserRouter>
    }
}
