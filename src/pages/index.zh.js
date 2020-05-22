import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import App from '../components/app'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <App />

  </Layout>
)

export default IndexPage
