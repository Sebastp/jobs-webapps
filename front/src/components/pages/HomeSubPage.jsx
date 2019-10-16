import React from 'react';



const HomeSubPage = ({ children, headerBig, headerSmall, subHeader }) => (
  <section className="home__subpage">

    <div className="home__subpage__topbar">
      <div className='home__subpage__topbar__profile'>
        <span className='topbar--inner'>
          Christina Patel
        </span>
        <img src={require('../../assets/img/AvatarPicture.jpg')} className="landing__boxDescs__li__icon" alt="Icon"/>
      </div>
    </div>

    {headerBig&&(
      <h4>
        {headerBig}
      </h4>
    )}
    {headerSmall&&(
      <h6>
        {headerSmall}
      </h6>
    )}
    {subHeader&&(
      <span>
        {subHeader}
      </span>
    )}
    <main>{children}</main>
  </section>
)


export default HomeSubPage
