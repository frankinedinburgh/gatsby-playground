import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const NotFoundPage = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1>Page not found</h1>
      <Link to={"/"}>Head home</Link>
    </Layout>
  )
}
export default NotFoundPage
