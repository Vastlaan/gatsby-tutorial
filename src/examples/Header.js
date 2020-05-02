import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../css_modules/example.component.module.scss"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
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
  `)
  return (
    <div className={styles.component}>
      <h1 className={styles.header}>Very Basic Example</h1>
      <div className={styles.field}>
        <p>Name:</p>
        <p>{data.site.siteMetadata.personalData.name}</p>
      </div>
      <div className={styles.field}>
        <p>Date of Birth:</p>
        <p>{data.site.siteMetadata.personalData.born}</p>
      </div>
    </div>
  )
}

export default ComponentName
