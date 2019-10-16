import React from 'react';


import HomeSubPage from './HomeSubPage'


const HomeItem = ({name, desc}) => {
  return (
    <li className="HomeItem">
      <h4>{name}</h4>
      <span>{desc}</span>
    </li>
  )
}

export default HomeItem
