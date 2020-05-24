import React from 'react'
import styled from 'styled-components'

const ApiName = styled.div`
  font-size: 0.8em;
  padding-bottom: 5px;
`

function TestCard({api_name, name, description, tags, last_update}){

  return(
    <div className="column is-2">
      <div className="card is-shady">
        <div className="card-image has-text-centered"></div>
        <div className="card-content">
          <div className="content">
            <ApiName>{api_name}</ApiName>
            <h6>{name}</h6>
            <p>{description}
            </p>
            <div>
              <p>tags:</p>
              {JSON.stringify(tags)}
            </div>
            <div>
              <p>更新:</p>
              {last_update}
            </div>
            <p><a href="#">更多資料</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestCard