import * as React from "react"
import { graphql, Link } from "gatsby"
import * as dayjs from "dayjs"

import { MarkdownsQuery, MarkdownRemark } from "../../graphql-types"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ArticleBody from "../components/ArticleBody"

interface Props {
  data: MarkdownsQuery
}

const IndexPage: React.FC<Props> = ({ data }) => {
  const newToTop = (
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
      <div className="container">
        {data.allMarkdownRemark.nodes.sort(newToTop).map((article, index) =>
          index == 0 ? (
            <div key={article.frontmatter.date} className="card">
              <div className="card-content content">
                <ArticleBody data={{ markdownRemark: article }}></ArticleBody>
              </div>
            </div>
          ) : (
            <div key={article.frontmatter.date} className="card mt-5">
              <div className="card-content content">
                <ArticleBody data={{ markdownRemark: article }}></ArticleBody>
              </div>
            </div>
          )
        )}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query markdowns {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date
          title
        }
        html
      }
    }
  }
`
