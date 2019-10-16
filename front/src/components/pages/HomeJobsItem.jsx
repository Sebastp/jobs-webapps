import React from 'react';


import HomeSubPage from './HomeSubPage'


const HomeJobsItem = ({name, desc}) => {
  return (
    <li>
      <h4>{name}</h4>
      <span>{desc}</span>
    </li>
  )
}

export default HomeJobsItem
