import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import LoginForm from "../components/forms/login"

const indexPage = () => {
  return (
    <div>
      <Layout>
        <Head title="home" />
        <h1>digital-doodles</h1>
        <p>List of blogs related to rnning and software development</p>
        <LoginForm />
      </Layout>
    </div>
  )
}

export default indexPage
