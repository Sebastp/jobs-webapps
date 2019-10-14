import React, {useContext, useEffect} from 'react'
import ReactDOM from 'react-dom'




import { ModalContext } from '../contexts/ModalContext'



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

            </div>
          </div>
        </div>
      </div>
      <div className='bck' onClick={toggle}/>
    </div>, document.getElementById('root')
  ) : null)
}




export default LoginModal
