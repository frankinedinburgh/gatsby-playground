import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import BlogStyles from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: ASC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
              json
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <Layout>
        <Head title="blog page" />
        <h1>Blog</h1>
        {/* <pre>{JSON.stringify(data.allContentfulBlogPost.edges, null, 4)}</pre> */}
        <ol className={BlogStyles.posts}>
          {data.allContentfulBlogPost.edges.map((d, index) => (
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
