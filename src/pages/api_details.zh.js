import React from "react"

import { Router } from "@reach/router"
import Layout from "../components/layout"

// import TestHelloworld from "../components/test_helloworld"
import ApiDetails from '../components/api_details'
import HighlightPre from '../components/highlight_pre'

const App = () => {
  return (
    <Layout>
      <Router basepath="/zh">
        <ApiDetails path="/api_details/:api_name" />
        {/* <TestHelloworld path="/api_details/test_helloworld" /> */}

      </Router>
    </Layout>
  )
}

export default App
