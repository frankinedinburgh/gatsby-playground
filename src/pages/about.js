import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="about-me" />
        <h1>About Page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo
          imperdiet justo, in dignissim neque dictum sed. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Duis pulvinar mauris nec leo
          fermentum, eu rhoncus magna fringilla. Ut rutrum, ipsum sed cursus
          ultricies, nunc tortor pellentesque ipsum, eu aliquet mi urna blandit
          nisi. Morbi convallis eget eros a sagittis. Etiam aliquet tortor
          felis, eget dictum neque placerat quis. Sed erat felis, varius ut
          aliquam non, congue ut tellus. Proin eget vulputate justo. Nulla
          facilisi.
        </p>
        <p>
          <Link to="/contact">Let's work together</Link>
        </p>
      </Layout>
    </div>
  )
}

export default AboutPage
