import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import {SampleQuery} from "../../graphql-types"

interface Props {
  data: SampleQuery;
}

const IndexPage: React.FC<Props> = ({data}) => (
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
      <Link to="/blog-post/">{data.allFile.nodes[0].name}</Link>
    </p>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query Sample{
    allFile {
      nodes {
        name
      }
    }
  }
`
