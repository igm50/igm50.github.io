import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import {ArticleQuery} from "../../../graphql-types"

interface Props {
  data: ArticleQuery
}

const Article: React.FC<Props> = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <Seo title="Home" />
      <h1>{frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </Layout>
  )
}

export default Article

export const query = graphql`
  query article($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        path
        date
        title
      }
      html
    }
  }
`
