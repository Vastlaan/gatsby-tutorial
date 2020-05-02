import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import styles from "../css_modules/products.module.scss"

const Products = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data
  console.log(products)

  return (
    <Layout>
      <div className={styles.page}>
        <h1 className={styles.header}>Products</h1>
        <div className={styles.collection}>
          {products.map((each, i) => {
            return (
              <div key={each.id} className={styles.item}>
                <Image fluid={each.image.fluid} alt={each.title} />
                <h1 className={styles.item__details}>
                  {each.title}
                  <span>Price: {each.price}</span>
                </h1>
                <Link
                  to={`/products/${each.slug}`}
                  className={styles.item__button}
                >
                  more details
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        slug
        title
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default Products
