import React from 'react'
import PageTopic from './page_topic'
import PageTags from './page_tags'

class PageHead extends React.Component{
  render(){
    return(
      <>
        <PageTopic>
          Api details for {this.props.api_name} <i class="fas fa-bookmark"></i>
        </PageTopic>
        <PageTags>tags</PageTags>
      </>
    )
  }
}


export default PageHead