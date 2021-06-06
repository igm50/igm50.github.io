import * as React from "react"
import { graphql, Link } from "gatsby"
import * as dayjs from "dayjs"

import { MarkdownsQuery, MarkdownRemark } from "../../graphql-types"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ArticleBody from "./articles/Article"

interface Props {
  data: MarkdownsQuery
}

const IndexPage: React.FC<Props> = ({ data }) => {
  const compareArticle = (
    a: Pick<MarkdownRemark, "frontmatter">,
    b: Pick<MarkdownRemark, "frontmatter">
  ) => {
    return dayjs(a.frontmatter.date).isBefore(dayjs(b.frontmatter.date))
      ? 1
      : -1
  }

  return (
    <Layout>
      <Seo title="Home" />
      <ul>
        {data.allMarkdownRemark.nodes.sort(compareArticle).map(article => (
          <li key={article.frontmatter.title}>
            <ArticleBody data={{ markdownRemark: article }}></ArticleBody>
          </li>
        ))}
      </ul>
      <ul>
        {data.allMarkdownRemark.nodes.sort(compareArticle).map(article => (
          <li key={article.frontmatter.title}>
            <Link to={article.path}>{article.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query markdowns {
    allMarkdownRemark {
      nodes {
        frontmatter {
          path
          date
          title
        }
        html
        path: gatsbyPath(
          filePath: "/articles/{MarkdownRemark.frontmatter__title}"
        )
      }
    }
  }
`
