import React from 'react'
import HighlightPre from './highlight_pre'
import stringify from 'json-stable-stringify'

function PrettyRAWJson({api_json}){
  return(
    <div style={{width: '80%', margin: 'auto'}}>
      <div style={{textAlign: 'left'}}>
        raw json:
      </div>

      <HighlightPre
        language="json"
        content={stringify(api_json,{space: 1})}
        />
    </div>
  )
}

export default PrettyRAWJson
