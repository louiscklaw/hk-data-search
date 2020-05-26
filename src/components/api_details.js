import React from 'react'
import {Link} from 'gatsby'

import HighlightPre from './highlight_pre'

import {GlobalContext} from '../context/GlobalContext'

function ApiDetails(props){
  let {getApiByName} = React.useContext(GlobalContext)

  return(

    <div style={{'margin':'auto'}}>

      <div style={{'text-align':"center", 'padding': '1em'}}>
        Api details for {props.api_name}
      </div>

      <Link to="/zh">back</Link>

      <HighlightPre
        language="json"
        content={JSON.stringify(getApiByName(props.api_name),null,2)}
        />

    </div>

  )
}

export default ApiDetails