import React, {createContext, useState} from 'react';


export const HomeContext = createContext({
  category: 'Jobs',
  setCategory: () => {}
});


export const HomeProvider = ({children}) =>{
  const [category, setCategory] = useState('Jobs')

  return(
    <HomeContext.Provider value={{category, setCategory}}>
      {children}
    </HomeContext.Provider>
  )
}
