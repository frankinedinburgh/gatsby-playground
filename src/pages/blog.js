import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import { Link } from "gatsby"
import BlogStyles from "./blog.module.scss"
import Head from "../components/head"
import { useBlogPage } from "../hooks/hooks"

const BlogPage = ({ location }) => {
  let data = useBlogPage()
  // const [data, setData] = useState({})

  // useEffect(() => {
  //   console.log("update")
  //   setData(useBlogPage())
  // })

  return (
    <div>
      <Layout>
        <Head title="blog page" />
        <h1>Blog</h1>

        {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
        {location.state.tag && <p>Filter By "{location.state.tag}"</p>}

        <ol className={BlogStyles.posts}>
          {data.edges &&
            data.edges.map((d, index) => (
              <li className={BlogStyles.post} key={`blog-${d.slug || index}`}>
                <Link to={`/blog/${d.node.slug}`}>
                  <h2>{d.node.title}</h2>
                  <p>{d.node.publishedDate}</p>
                </Link>
              </li>
            ))}
        </ol>
      </Layout>
    </div>
  )
}

BlogPage.propTypes = {
  location: PropTypes.shape({
    href: PropTypes.string,
    pathname: PropTypes.string,
    state: PropTypes.shape({
      key: PropTypes.string,
      tag: PropTypes.string,
    }),
  }),
}
export default BlogPage
