import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark {
                edges{
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
                <ol>
                    {data.allMarkdownRemark.edges.map((d, index) => 
                        <li key={`blog-${index}`}>
                            <h2><Link to={d.fields.slug}>{d.node.frontmatter.title}</Link></h2>
                            <p>{d.node.frontmatter.date}</p>
                        </li>
                    )}
                </ol>
                {/* <pre>{JSON.stringify(data.allMarkdownRemark.edges, null, 4)}</pre> */}
            </Layout>
        </div>
    )
}

export default BlogPage