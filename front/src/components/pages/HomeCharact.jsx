import React, { useState, useContext } from 'react';
import { useQuery } from 'react-apollo-hooks';


import { HomeContext } from '../contexts/HomeContext'
import { getCharact } from '../../graphql'

import HomeSubPage from './HomeSubPage'
import HomeItem from './HomeItem'


const HomeCharact = (props) => {
  const {category, setCategory} = useContext(HomeContext)
  const { data, error, loading:charactLoading } = useQuery(getCharact)


  return (
    <HomeSubPage headerBig="All Characteristics"
      subButton={{name: "Create a new Characteristic +", funct: ()=>setCategory('Create Characteristics') }}
    >
      {
        charactLoading?(
          'Loading'
        ):(
          <ul>
            {
              (data.characteristics).map((jobOjb, i)=>(
                <HomeItem name={jobOjb.title} desc={jobOjb.description} key={i}/>
              ))
            }
          </ul>
        )
      }
    </HomeSubPage>
  )
}

export default HomeCharact
