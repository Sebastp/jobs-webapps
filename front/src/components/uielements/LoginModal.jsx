import React, {useContext, useEffect} from 'react'
import ReactDOM from 'react-dom'




import { ModalContext } from '../contexts/ModalContext'

import FullButton from './FullButton'
import LabeledInput from './LabeledInput'


const LoginModal = () => {
  const {toggle, isShowing} = useContext(ModalContext)




  return (isShowing ? ReactDOM.createPortal(
    <div className='modalCont'>
      <div className='cont-width_0 modalCont-inner'>
        <div className='cont-width_0 modalCont-inner__padding'>
          <div className='modalCont-box'>
            <div className="center">
              <h2 className='componentHeader'>
                Sign In
              </h2>

              <LabeledInput labelText={'Email'}  inputPlaceholder={'Type your email'}/>
              <LabeledInput labelText={'Password'}  inputPlaceholder={'Type your password'}/>

              <FullButton className='topbar--navBtn' clickFunct={()=>console.log('login funct')}>
                Login
              </FullButton>
            </div>
          </div>
        </div>
      </div>
      <div className='bck' onClick={toggle}/>
    </div>, document.getElementById('root')
  ) : null)
}




export default LoginModal
