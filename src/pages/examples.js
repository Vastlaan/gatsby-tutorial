import React from "react"
import Layout from "../components/Layout"
import Header from "../examples/Header"
import Medium from "../examples/Medium"
import OldSyntaxStaticQuery from "../examples/OldSyntaxStaticQuery"
import styles from "../css_modules/examples.module.scss"
import { graphql } from "gatsby"

const examples = ({ data }) => {
  const {
    site: {
      info: { title },
    },
  } = data
  return (
    <Layout>
      <div className={styles.page}>
        <h1>Examples GraphQL queries</h1>
        <Header />
        <Medium />
        <OldSyntaxStaticQuery />
        <div>
          <h3>Page Query Example:</h3>
          <p>{title}</p>
        </div>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query ExamplePageQuery {
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
export default examples
