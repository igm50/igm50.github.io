import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { MarkdownsQuery } from "../../graphql-types"

interface Props {
  data: MarkdownsQuery
}

const IndexPage: React.FC<Props> = ({ data }) => {
  const { frontmatter, html } = data.allMarkdownRemark.nodes[0]

  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
        <h1>{frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data.allMarkdownRemark.nodes[0].html,
          }}
        />
        {/* <Link to="/blog-post/">{data.allMarkdownRemark.nodes[0].html}</Link> */}
      </p>
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
      }
    }
  }
`
