import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import BlogStyles from "./blog.module.scss"
import Head from "../components/head"
import { useBlogPage } from "../hooks/hooks"

const BlogPage = () => {
  const data = useBlogPage()

  return (
    <div>
      <Layout>
        <Head title="blog page" />
        <h1>Blog</h1>
        <ol className={BlogStyles.posts}>
          {data.edges.map((d, index) => (
            <li className={BlogStyles.post} key={`blog-${index}`}>
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

export default BlogPage
