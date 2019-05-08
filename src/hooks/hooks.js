import { useStaticQuery, graphql } from "gatsby"

export const useBlogPage = () => {
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

  return data.allContentfulBlogPost
}
