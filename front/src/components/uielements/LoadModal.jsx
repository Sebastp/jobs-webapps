import React, {useContext, useState, useEffect} from 'react'
import ReactDOM from 'react-dom'




import { ModalContext } from '../contexts/ModalContext'



const LoadModal = () => {
  const {toggle, isShowing} = useContext(ModalContext)




  return (isShowing ? ReactDOM.createPortal(
    <div className='modalCont'>
      <div className='cont-width_0 modalCont-inner'>
        <div className='cont-width_0 modalCont-inner__padding'>
          <div className='modalCont-box'>
            <div className="center">
              <h2 className='componentHeader'>
                Drag & Drop Your Logo
              </h2>

            </div>
          </div>
        </div>
      </div>
      <div className='bck' onClick={toggle}/>
    </div>, document.getElementById('index')
  ) : null)
}




export default LoadModal
