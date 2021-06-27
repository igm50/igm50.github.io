import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="hero">
    <div className="hero-body">
      <div className="columns is-centered">
        <h1 className="title is-4">
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `タイトル`,
}

export default Header
