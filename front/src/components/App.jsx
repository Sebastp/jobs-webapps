import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'




import Landing from './pages/Landing'

import Topbar from './uielements/Topbar'
import LoginModal from './uielements/LoginModal'

import { ModalProvider } from './contexts/ModalContext'




const App = () => (
  <Router>
    <Fragment>
      <ModalProvider>
        <LoginModal/>
        <Topbar/>

        <Switch>
          <Route exact path="/"
            component={props => (
              <Landing {...props}/>
            )}
          />
        </Switch>
      </ModalProvider>
    </Fragment>
  </Router>
)




export default App
