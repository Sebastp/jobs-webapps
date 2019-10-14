import React from 'react'
import styled from 'styled-components'

import headerBckImg from '../../assets/img/headerbck.jpg';
import bannerBckImg from '../../assets/img/bannerbck.jpg';

//components
import LandingBoxLi from '../uielements/LandingBoxLi'



const LandHeaderBck = styled.div`
  background-image: url(${headerBckImg});
`;

const LandBannerBck = styled.div`
  background-image: url(${bannerBckImg});
`;

const Landing = () => {
  return (
    <div className="cont-width_0">
      <div className="landing__header">
        <h1>
          Hey there, here is the header title of your test. Also, here is a unicorn.
        </h1>
        <p>This textual content right here is just a description with no sens. Clearly.</p>
        <LandHeaderBck className="landing__header--bck"/>
      </div>
      <div className="landing__boxDescs row">
        {
          [0,1,2].map(a=>(
            <LandingBoxLi key={a} title={"Title 01"} description={"There is a lot of lorem ipsum into this world but this one is added to introduce…"}/>
          ))
        }
      </div>

      <div className="landing__bannerSect">
        <h2>Wouw, another<br/>title!</h2>
        <p>
          There is a lot of lorem ipsum into
          this  world but this one right here is  added
          to introduce a pretty cool section with no sens.
          Maybe add some emojis on it could be funny.
        </p>
        <LandBannerBck className="landing__bannerSect--bck"/>
      </div>

      <div className="landing__twiceSect">
        <div className="landing__twiceSect__textcol">
          <h2>And another one.</h2>
          <p>
            There is a lot of lorem ipsum into this world
            but this one right here is addedto introduce
            a pretty cool section with no sens.
            Maybe add some emojis on it could be funny.
          </p>
        </div>
        <img src={require('../../assets/img/landinglastImg.png')} className="landing__twiceSect__imgcol" alt="ad image"/>
      </div>

      <footer>
        <span>© 2019 Chance All rights reserved - Legal Mentions</span>
      </footer>
    </div>
  )
}

export default Landing
