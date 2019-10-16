import React, {createContext, useState} from 'react';


export const HomeContext = createContext({
  isShowing: null,
  toggle: () => {}
});


export const HomeProvider = ({children}) =>{
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    console.log(isShowing);
    setIsShowing(!isShowing);
  }

  return(
    <HomeContext.Provider value={{toggle, isShowing}}>
      {children}
    </HomeContext.Provider>
  )
}
