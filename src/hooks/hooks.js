import { graphql, useStaticQuery } from "gatsby"

export const useBlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: ASC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            tags
            body {
              json
            }
          }
        }
      }
    }
  `)

  return data.allContentfulBlogPost
}

export const filterByTag = () => {
  const data = useStaticQuery(graphql`
    query($tag: [String]) {
      allContentfulBlogPost(filter: { tags: { in: $tag } }) {
        edges {
          node {
            title
            slug
            tags
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
              json
            }
          }
        }
      }
    }
  `)
  return data.allContentfulBlogPost
}
