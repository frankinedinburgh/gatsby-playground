import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      slug
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
      {/* 
      <div
        dangerouslySetInnerHTML={{ __html: props.data.contentfulBlogPost.html }}
      /> */}
      {/* <pre>{JSON.stringify(props.data.contentfulBlogPost.body, null, 4)}</pre> */}
    </Layout>
  )
}

export default BlogComponent
