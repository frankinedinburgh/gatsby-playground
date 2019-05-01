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
