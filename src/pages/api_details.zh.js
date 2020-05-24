import React from "react"

import { Router } from "@reach/router"
import Layout from "../components/layout"

import TestHelloworld from "../components/test_helloworld"

const App = () => {
  return (
    <Layout>
      <Router basepath="/zh/api_details">
        <TestHelloworld path="/test_helloworld" />
      </Router>
    </Layout>
  )
}

export default App
