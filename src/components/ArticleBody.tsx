import * as React from "react"

import { ArticleQuery } from "../../graphql-types"

interface Props {
  data: ArticleQuery
}

const ArticleBody: React.FC<Props> = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <React.Fragment>
      <h1>{frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </React.Fragment>
  )
}

export default ArticleBody
