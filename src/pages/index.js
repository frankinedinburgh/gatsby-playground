import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'

const indexPage = () => {
  return (
    <div>
      <Layout>
        <h1>Fullstack developer</h1>
        <p>this is a todo app managing a list of courses and articles to read and do</p>
        <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
      </Layout>
    </div>
  )
}

export default indexPage
