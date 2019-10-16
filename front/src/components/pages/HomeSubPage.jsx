import React from 'react';



const HomeSubPage = ({ children, headerBig, headerSmall, subButton }) => (
  <section className="home__subpage">

    <div className="home__subpage__topbar">
      <div className='home__subpage__topbar__profile'>
        <span className='profile__name'>
          Christina Patel
        </span>
        <img src={require('../../assets/img/AvatarPicture.jpg')} className="profile__avatar" alt="Avatar"/>
      </div>
    </div>

    <div className="home__subpage__mainCont">
      {headerBig&&(
        <h4 className="mainCont__header mainCont__header--big">
          {headerBig}
        </h4>
      )}
      {headerSmall&&(
        <h6 className="mainCont__header mainCont__header--sml">
          {headerSmall}
        </h6>
      )}

      {subButton&&(
        <button className="mainCont__header mainCont__header--sub" onClick={subButton.funct}>
          {subButton.name}
        </button>
      )}
      <main>{children}</main>
    </div>
  </section>
)


export default HomeSubPage
