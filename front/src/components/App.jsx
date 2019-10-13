import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'




import Landing from './pages/Landing'
import Topbar from './uielements/Topbar'



const App = () => (
  <Router>
    <Fragment>
      <Topbar/>

      <Switch>
        <Route exact path="/"
          component={props => (
            <Landing {...props}/>
          )}
        />
      </Switch>
    </Fragment>
  </Router>
)




export default App
