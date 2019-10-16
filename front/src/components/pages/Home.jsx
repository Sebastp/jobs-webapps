import React, { useState } from 'react';



import HomeJobs from './HomeJobs'


const Home = () => {
  const pageCategories = ['Jobs','Characteristics']
  const [category, setCategory] = useState('Jobs')
  let subPageComponent = null

  switch (category) {
    case 'Jobs':
      subPageComponent = <HomeJobs/>
      break;
    default:
      subPageComponent = <HomeJobs/>
  }


  return (
    <div className="home">
      <div className="home__leftcol">
        <img src={require('../../assets/img/ChanceLogo.svg')} className="topbar-logobox__icon" alt="Logo"/>
        <ul>
          {
            pageCategories.map((name, i)=>(
              <li className={"home__leftcol__listli "+(category==name && 'active')} key={i} onClick={()=>setCategory(name)}>
                <div className="lilabel"/>
                {name}
              </li>
            ))
          }
        </ul>
      </div>
      <div className="home__main">
        {subPageComponent}
      </div>
    </div>
  )
}

export default Home
