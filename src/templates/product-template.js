import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import styles from "../css_modules/template_product.module.scss"

const productTemplate = props => {
  console.log(props)

  const { data } = props
  const { product } = data

  return (
    <Layout>
      <section className={styles.page}>
        <nav>
          <p>
            Go back to<Link to="/products">Products</Link>
          </p>
        </nav>
        <h1>{product.title}</h1>
        <div className={styles.main}>
          <div className={styles.main__image}>
            <Image fluid={product.image.fluid} alt={product.title} />
          </div>
          <div className={styles.main__info}>
            <p>{product.info.info}</p>
            <p className={styles.main__info_price}>
              <button>Buy</button>
              <p>
                Price: <span>&euro;{product.price}</span>
              </p>
            </p>
          </div>
        </div>
        <div></div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      info {
        info
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      price
    }
  }
`

export default productTemplate
