import React from 'react'

import {Link} from 'gatsby'

function TestLink(){
  return(
    <>
      <h3>Test link</h3>

      <ul>
        <li>
          <Link to="/zh">Back</Link>
        </li>
      </ul>

    </>
  )
}

export default TestLink