import React from 'react';
import { GlobalContext } from '../context/GlobalContext';

import ApiCards from './api_cards'

function ApiCardList(){
  // let {search_term, getMatchApiManifest} = React.useContext(GlobalContext)

  return(
    <>
      <ApiCards />
    </>
  )
}

export default ApiCardList