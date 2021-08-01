import * as React from "react"
import { graphql } from "gatsby"

import { ArticleQuery } from "../../../graphql-types"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import ArticleBody from "../../components/ArticleBody"

interface Props {
  data: ArticleQuery
}

const Article: React.FC<Props> = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <ArticleBody data={data} />
  </Layout>
)

export default Article

export const query = graphql`
  query article($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        date
        title
      }
      html
    }
  }
`
