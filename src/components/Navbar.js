import React from "react"
import { Link } from "gatsby"
import styles from "../css_modules/navbar.module.scss"

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} to="/">
            Home Page
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/products">
            Products
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/examples">
            Examples
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/images">
            Images
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
