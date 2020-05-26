import React from 'react'

import {GlobalContext} from '../context/GlobalContext'

function ApiDetails(props){
  let {getApiByName} = React.useContext(GlobalContext)
  return(
    <div style={{'margin':'auto'}}>

      Api details for {props.api_name}

      {JSON.stringify(getApiByName(props.api_name),null, 2)}
    </div>
  )
}

export default ApiDetails