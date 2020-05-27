import React from 'react'
import {Link} from 'gatsby'

import ApiInfoTable from './table_sample'
import PrettyRAWJson from './pretty_raw_json'


import {GlobalContext} from '../context/GlobalContext'

function ApiDetails(props){
  let {getApiByName} = React.useContext(GlobalContext)
  let api_json = getApiByName(props.api_name)

  return(

    <div style={{'margin':'auto'}}>

      <div style={{textAlign:"center",padding: '1em'}}>
        Api details for {props.api_name}
      </div>

      <Link to="/zh">back</Link>

      {/* TODO: implement this ? */}
      <div>tags</div>

      {/* TODO: implement this ? */}
      <div>api details</div>

      <div style={{margin:'auto',textAlign:'center'}}>
        <ApiInfoTable api_json={api_json}/>
      </div>

      <PrettyRAWJson api_json={api_json} />

    </div>

  )
}

export default ApiDetails