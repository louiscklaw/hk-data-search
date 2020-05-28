import React from 'react'
import styled from 'styled-components'

import './api_card.css'

const ApiName = styled.div`
  font-size: 0.5em;
  padding-bottom: 5px;
`

function ApiCard({api_name, name, description, tags, last_update}){

  return(
    <div className="column is-2">
      <div className="card is-shady">
        <div className="card-image has-text-centered"></div>
        <div className="card-content">
          <div className="content">
            <ApiName>{api_name}</ApiName>
            <h6 className="api-name">{name}</h6>
            <p className="api-description">{description}</p>
            <div>
              <i className="fas fa-tags"></i>
              {tags.sort().map(x => {
                return(
                  <span key={x} className="tag is-primary is-light">
                    {x}
                  </span>
                  )
              })}
            </div>
            <div className="api-lastupdate">
              <span>最後更新:</span>
              <span>{last_update}</span>
            </div>

          </div>
        </div>

        <footer className="card-footer">
          {/* <div className="card-footer-item">
            <a href="#"><i className="fas fa-bookmark"></i></a>
          </div> */}
          <div className="card-footer-item">
            <a className="api-more-info" href={`/zh/api_details/${api_name}`}>更多資料</a>
          </div>


        </footer>
      </div>
    </div>
  )
}

export default ApiCard