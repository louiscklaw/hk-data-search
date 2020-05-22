import React from 'react';

import {NavBar} from './nav'
import Hero from './hero'
import ApiCardList from './api_card_list'
import Footer from './footer'

function App(){
  return(
    <>
      <NavBar />
      <Hero />
      <ApiCardList />
      <Footer />
    </>
  )
}

export default App