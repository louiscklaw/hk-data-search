import React from 'react'

import highlight from 'highlight.js'
import { findDOMNode } from 'react-dom'

class HighlightPre extends React.Component{

  componentDidMount(){
    highlight.highlightBlock(findDOMNode(this.refs.code))
  }

  componentDidUpdate () {
    highlight.initHighlighting.called = false
    highlight.highlightBlock(findDOMNode(this.refs.code))
  }


  render(){
    const {children, language, content} = this.props
    return(
      <>
        <pre className={language}>
          <code ref="code">
            {content}
          </code>
        </pre>
      </>
    )
  }
}

export default HighlightPre
