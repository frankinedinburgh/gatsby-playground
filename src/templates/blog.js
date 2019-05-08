import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/head"
import Blog from "./blog.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      slug
      tags
      body {
        json
      }
    }
  }
`

const BlogComponent = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>

      {props.data.contentfulBlogPost &&
        documentToReactComponents(
          props.data.contentfulBlogPost.body.json,
          options
        )}

      {props.data.contentfulBlogPost.tags &&
        props.data.contentfulBlogPost.tags.map(tag => (
          <Link to={"/blog/"} state={{ tag: tag }} className={Blog.badge}>
            {tag}
          </Link>
        ))}

      <nav className={Blog.pagination}>
        <ul>
          {props.pageContext.prev !== "" && (
            <li key="prev">
              <Link to={`/blog/${props.pageContext.prev.slug}`}>Prev</Link>
            </li>
          )}

          {props.pageContext.next !== "" && (
            <li key="next">
              <Link to={`/blog/${props.pageContext.next.slug}`}>Next</Link>
            </li>
          )}
        </ul>
      </nav>
    </Layout>
  )
}

BlogComponent.defaultProps = {
  data: {},
  pageContext: {},
}
export default BlogComponent
