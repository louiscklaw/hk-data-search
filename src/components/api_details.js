import React from 'react'
import {Link} from 'gatsby'

import TableSample from './table_sample'
import HighlightPre from './highlight_pre'
import stringify from 'json-stable-stringify'

import {GlobalContext} from '../context/GlobalContext'

function ApiDetails(props){
  let {getApiByName} = React.useContext(GlobalContext)
  let api_json = getApiByName(props.api_name)

  return(

    <div style={{'margin':'auto'}}>

      <div style={{'text-align':"center", 'padding': '1em'}}>
        Api details for {props.api_name}
      </div>

      <Link to="/zh">back</Link>

      <div style={{'margin':'auto','text-align':'center'}}>
        <TableSample api_json={api_json}/>
      </div>

      <h3>raw json:</h3>
      <HighlightPre
        language="json"
        content={stringify(api_json,{space: 1})}
        />

    </div>

  )
}

export default ApiDetails