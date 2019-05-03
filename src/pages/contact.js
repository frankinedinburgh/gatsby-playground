import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <div>
      <Head title="Contact" />
      <Layout>
        <h1>Contact Page</h1>
        <p>
          The best way to contact me is via <a href="#">Twitter</a>
        </p>
      </Layout>
    </div>
  )
}
export default ContactPage
