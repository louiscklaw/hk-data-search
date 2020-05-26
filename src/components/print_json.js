import React from 'react'
import HighlightPre from './highlight_pre'

function PrintJson({in_JSON}){
  var test_json = in_JSON

  return(
    <div>
      <HighlightPre
        language="json"
        content={JSON.stringify({"a":"b"},null,2)}
        />
    </div>
  )
}

export default PrintJson