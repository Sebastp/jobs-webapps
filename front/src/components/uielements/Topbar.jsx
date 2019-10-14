import React, {useContext} from 'react'
import { Link } from 'react-router-dom'

import { ModalContext } from '../contexts/ModalContext'

import FullButton from './FullButton'

const Topbar = () => {
  const {toggle} = useContext(ModalContext)

  return(
    <div className='topbar'>
      <header className='topbar--inner cont-width_0'>
        <div className='topbar--logobox'>
          <Link to={'/'}>
            <img src={require('../../assets/img/ChanceLogo.svg')} className="topbar-logobox__icon" alt="Logo"/>
          </Link>
        </div>
        <FullButton className='topbar--navBtn' clickFunct={toggle}>
          Login
        </FullButton>
      </header>
    </div>
  )
}


export default Topbar
