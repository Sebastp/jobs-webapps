import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'




import Landing from './pages/Landing'
import Home from './pages/Home'

import LoginModal from './uielements/LoginModal'

import { ModalProvider } from './contexts/ModalContext'




const App = () => (
  <Router>
    <Fragment>
      <ModalProvider>
        <LoginModal/>

        <Switch>
          <Route exact path="/"
            component={props => (
              <Landing {...props}/>
            )}
          />
          <Route exact path="/home"
            component={props => (
              <Home {...props}/>
            )}
          />
        </Switch>
      </ModalProvider>
    </Fragment>
  </Router>
)




export default App
