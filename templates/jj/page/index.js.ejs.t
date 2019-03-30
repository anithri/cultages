---
  to: <%= pagePath %>
---
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import React from 'react'

const <%= pageName %> = () => (
  <Layout className="grid">
    <h1><%= Name %> component</h1>
  </Layout>
)

export default <%= pageName %>
