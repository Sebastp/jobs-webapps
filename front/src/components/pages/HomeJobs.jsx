import React, { useState, useContext } from 'react';
import { useQuery } from 'react-apollo-hooks';


import { HomeContext } from '../contexts/HomeContext'
import { getJobs } from '../../graphql'

import HomeSubPage from './HomeSubPage'
import HomeItem from './HomeItem'


const HomeJobs = (props) => {
  const {category, setCategory} = useContext(HomeContext)
  const { data, error, loading:jobsLoading } = useQuery(getJobs)


  return (
    <HomeSubPage headerBig="All Jobs" subButton={{name: "Create a new Job", funct: ()=>setCategory('Create Job') }}>
      {
        jobsLoading?(
          'Loading'
        ):(
          <ul>
            {
              (data.jobs).map((jobOjb, i)=>(
                <HomeItem name={jobOjb.title} desc={jobOjb.description} key={i}/>
              ))
            }
          </ul>
        )
      }
    </HomeSubPage>
  )
}

export default HomeJobs
