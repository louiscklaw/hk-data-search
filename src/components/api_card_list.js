import React from 'react';
import { GlobalContext } from '../context/GlobalContext';

function ApiCardList(){
  let {search_term, getMatchApiManifest} = React.useContext(GlobalContext)

  return(
    <>
      <pre>
        {search_term}
      </pre>
      <pre>
        {JSON.stringify(getMatchApiManifest(), null, 2)}
      </pre>
    </>
  )
}

export default ApiCardList