import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import BlogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <Layout>
        <h1>Blog</h1>
        <ol className={BlogStyles.posts}>
          {data.allMarkdownRemark.edges.map((d, index) => (
            <li className={BlogStyles.post} key={`blog-${index}`}>
              <Link to={`/blog/${d.node.fields.slug}`}>
                <h2>{d.node.frontmatter.title}</h2>
                <p>{d.node.frontmatter.date}</p>
              </Link>
            </li>
          ))}
        </ol>
      </Layout>
    </div>
  )
}

export default BlogPage
