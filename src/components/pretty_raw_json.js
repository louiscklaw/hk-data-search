import React from 'react'
import stringify from 'json-stable-stringify'

import HighlightPre from './highlight_pre'

import TableTopic from './table_topic'

function PrettyRAWJson({api_json}){
  return(
    <div style={{width: '80%', margin: 'auto'}}>
      <div style={{textAlign: 'left'}}>
        <TableTopic topic_name="raw json" />

      </div>

      <HighlightPre
        language="json"
        content={stringify(api_json,{space: 1})}
        />
    </div>
  )
}

export default PrettyRAWJson
