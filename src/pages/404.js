import React from "react"
import Layout from "../components/Layout"

export default function error() {
  return (
    <Layout>
      <section>
        <h1>Ups, We couldn't find the resource.</h1>
        <h3>Please check the url you typed in.</h3>
      </section>
    </Layout>
  )
}
