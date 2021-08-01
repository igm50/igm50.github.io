import * as React from "react"
import dayjs from "dayjs"

import { ArticleQuery } from "../../graphql-types"

interface Props {
  data: ArticleQuery
}

const ArticleBody: React.FC<Props> = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  const date = React.useMemo(() => dayjs(frontmatter.date), [frontmatter])

  return (
    <React.Fragment>
      <div>
        <span className="tag is-light">{date.format("YYYY年M月D日")}</span>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </React.Fragment>
  )
}

export default ArticleBody
