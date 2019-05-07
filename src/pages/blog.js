import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import BlogStyles from "./blog.module.scss"
import Head from "../components/head"

const useAlTags = () => {
  const { allTags } = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost {
          edges {
            node {
              tags
            }
          }
        }
      }
    `
  )
  return allTags
}

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

  const tags = allTags()
  console.log(tags)

  return (
    <div>
      <Layout>
        <Head title="blog page" />
        <h1>Blog</h1>
        <pre>{JSON.stringify(tags.allContentfulBlogPost, null, 4)}</pre>
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
