import React from "react"
import Layout from "../components/Layout"
import styles from "../css_modules/base.module.scss"
import Main from "../components/Main"

export default () => (
  <div>
    <Layout className={styles.layout}>
      <Main />
    </Layout>
  </div>
)
