import React, { useState, useContext } from 'react';


import { HomeContext } from '../contexts/HomeContext'

import HomeSubPage from './HomeSubPage'
import HomeJobsItem from './HomeJobsItem'


const HomeJobs = (props) => {
  const {category, setCategory} = useContext(HomeContext)

  return (
    <HomeSubPage headerBig="All Jobs" subButton={{name: "Create a new Job", funct: ()=>setCategory('Create Job') }}>
      <ul>
        <HomeJobsItem name="Job Name" desc="Job desc"/>
      </ul>
    </HomeSubPage>
  )
}

export default HomeJobs
