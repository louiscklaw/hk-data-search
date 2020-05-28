import React from 'react'
import HighlightPre from './highlight_pre'

import {GlobalContext} from '../context/GlobalContext'

function fetchThisJson(json_url){
  fetch('/')
  .then(result => console.log(result.text()))
  // .then(json => console.log(json))
  .then(text => console.log(text))
  return(
    <>

    </>
  )
}

function TestFetchJson(){

  return(
    <>
      <a className="button" onClick={(e)=>{fetchThisJson(e, 'https://www.aud.gov.hk/datagovhk/vfm-by-subjects.json')}}>try fetch this json</a>
      <div>
        {}
      </div>
    </>
  )
}

export default TestFetchJson