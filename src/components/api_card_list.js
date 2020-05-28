import React from 'react';
import { GlobalContext } from '../context/GlobalContext';

import TestCards from './api_cards'

function ApiCardList(){
  // let {search_term, getMatchApiManifest} = React.useContext(GlobalContext)

  return(
    <>
      <TestCards />
    </>
  )
}

export default ApiCardList