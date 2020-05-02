import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styles from "../css_modules/example.component.module.scss"

const OldSyntaxStaticQuery = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            info: siteMetadata {
              title
              description
              objectives
              personalData {
                name
                born
                surname
              }
            }
          }
        }
      `}
      render={data => (
        <div className={styles.component}>
          <h1 className={styles.header}>Old Static Query Example</h1>
          <div className={styles.field}>
            <p>Description:</p>
            <p>{data.site.info.description}</p>
          </div>
        </div>
      )}
    />
  )
}

export default OldSyntaxStaticQuery
