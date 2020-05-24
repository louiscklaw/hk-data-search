import React from 'react';
import { GlobalContext } from '../context/GlobalContext';

function ApiCardList(){
  let {search_term, getApiManifestKeys} = React.useContext(GlobalContext)

  return(
    <>
      <pre>
        {search_term}
      </pre>
      <pre>
        {JSON.stringify(getApiManifestKeys(), null, 2)}
      </pre>
    </>
  )
}

export default ApiCardList