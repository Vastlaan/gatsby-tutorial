import React from "react"
import styles from "../css_modules/example.component.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import TreeImage from "../images/image-3.jpg"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image-1.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image-2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  return (
    <div className={styles.component}>
      <h1 className={styles.header}>Images Component</h1>

      <section className={styles.images}>
        <div className={styles.image}>
          <h3>Standart React Import Image</h3>
          <img src={TreeImage} alt="tree" width="100%" />
        </div>
        <div className={styles.image}>
          <h3>Fixed Image /Blur</h3>
          <Image fixed={data.fixed.childImageSharp.fixed} alt="nature" />
        </div>
        <div className={styles.image}>
          <h3>Fluid Image</h3>
          <Image fluid={data.fluid.childImageSharp.fluid} alt="bussines" />
          <div className={styles.image__small}>
            <Image fluid={data.fluid.childImageSharp.fluid} alt="bussines" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Images
