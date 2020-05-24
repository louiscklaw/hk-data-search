import React from "react"
import {Link} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import App from '../components/app'

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <App />
  </Layout>
)

export default IndexPage
