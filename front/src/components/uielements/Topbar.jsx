import React from 'react'
import { Link } from 'react-router-dom'



import FullButton from './FullButton'

const Topbar = () => (
  <div className='topbar'>
    <header className='topbar--inner cont-width_0'>
      <div className='topbar--logobox'>
        <Link to={'/'}>
          <img src={require('../../assets/img/ChanceLogo.svg')} className="topbar-logobox__icon" alt="Logo"/>
        </Link>
      </div>
      <FullButton className='topbar--navBtn'>
        Login
      </FullButton>
    </header>
  </div>
)


export default Topbar
