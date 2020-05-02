import React from "react"
import Layout from "../components/Layout"
import styles from "../css_modules/blog.module.scss"

const Blog = () => {
  return (
    <Layout>
      <section className={styles.page}>
        <h1 className={styles.header}>Blog Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
          deleniti.
        </p>
      </section>
    </Layout>
  )
}

export default Blog
