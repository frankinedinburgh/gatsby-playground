import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const indexPage = () => {
  return (
    <div>
      <Layout>
        <Head title="home" />
        <h1>digital-doodles</h1>
        <p>List of blogs related to rnning and software development</p>
      </Layout>
    </div>
  )
}

export default indexPage
