import React from 'react'
import { Link } from 'react-router-dom'




const Topbar = () => (
  <div className='topbar'>
    <header className='topbar-inner cont-width_0'>
      <div className='topbar-logobox topbar__padding'>
        <Link to={'/'}>
          <img src={require('../../assets/img/ChanceLogo.svg')} className="topbar-logobox__icon" alt="Logo"/>
        </Link>
      </div>
    </header>
    <div className="topbar-bck"/>
  </div>
)


export default Topbar
