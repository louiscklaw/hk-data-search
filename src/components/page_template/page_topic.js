import React from 'react'
import './page_topic.css'

import run_config from '../../run_config'

class PageTopic extends React.Component{
  render(){
    return(
      <>
        <div className="page-topic">
          <h2>
            <a href={'/'+run_config.DEFAULT_LANG}><i class="fas fa-chevron-left"></i></a>
            {this.props.children}
          </h2>
        </div>
      </>
    )
  }
}


export default PageTopic