import React from 'react'
import {Link} from 'gatsby'

import ApiInfoTable from './table_sample'
import PrettyRAWJson from './pretty_raw_json'

import PageHead from './page_template/page_head'

import {GlobalContext} from '../context/GlobalContext'

function ApiDetails(props){
  let {getApiByName} = React.useContext(GlobalContext)
  let api_json = getApiByName(props.api_name)

  return(

    <div style={{width: '80%',margin:'auto'}}>
      <Link to="/zh">back</Link>

      <PageHead api_name={props.api_name}/>

      <div style={{margin:'auto',textAlign:'center'}}>
        <ApiInfoTable api_json={api_json}/>
      </div>

      <PrettyRAWJson api_json={api_json} />

    </div>

  )
}

export default ApiDetails