import React from 'react'

class TableTopic extends React.Component{
  render(){
    return(
    <h3>
      <i class="fas fa-hashtag"></i>   {this.props.topic_name}
    </h3>
    )
  }
}

export default TableTopic