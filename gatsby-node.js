/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if(/MarkdownRemark/.test(node.internal.type)) {
        const slug = path.basename(node.fileAbsolutePath, '.md')
       createNodeField({
           node,
           name: 'slug',
           value: slug
       })
    }
    
}


module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')

    const res = await graphql(`
        query{
            allMarkdownRemark {
                edges{
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })

    // 1. Gey path to templates
    // 2. Gey markdown dataa
    // 3. Create new pages

}