import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../css_modules/example.component.module.scss"

//setup alias for siteMetadata like info:siteMetadata
const getData = graphql`
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
`

const Medium = () => {
  const data = useStaticQuery(getData)
  const {
    site: {
      info: {
        personalData: { name },
      },
    },
  } = data

  const {
    site: {
      info: { objectives },
    },
  } = data

  return (
    <div>
      <h1 className={styles.header}>Medium Example</h1>
      <div className={styles.field}>
        <p>Title</p>
        <p>{data.site.info.title}</p>
      </div>
      <div className={styles.field}>
        <p>Name:</p>
        <p>{name}</p>
      </div>
      {objectives.map((objective, i) => {
        return (
          <div key={`${objective}-${i * 7.2149}`} className={styles.field}>
            <p>Objective {i + 1}:</p>
            <p>{objective}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Medium
