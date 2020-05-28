import React from 'react'
import HighlightPre from './highlight_pre'

import {GlobalContext} from '../context/GlobalContext'

function TestGetJson({csv_url}){
  let {trueIfNull, getAHref, json_in_csv_form, getJSON} = React.useContext(GlobalContext)

  return (
    <>
      <a className="button" onClick={(e) => {getJSON(e, csv_url)}}>Test getting json</a>
      <HighlightPre
        language="json"
        content={JSON.stringify(json_in_csv_form.fetch_result, null, 2)}
        />
    </>
  )
}

export default TestGetJson