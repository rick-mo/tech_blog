'use strict';

const { resolve, basename } = require('path');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const category = basename(resolve(node.fileAbsolutePath, '..'));
    const slug = basename(node.fileAbsolutePath, '.md');

    createNodeField({
      node,
      name: 'category',
      value: category
    });
    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = resolve('./src/template/page.tsx');
  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              category
              slug
            }
          }
        }
      }
    }
  `);
  
  response.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/${edge.node.fields.category}/${edge.node.fields.slug}`,
      context: {
        category: edge.node.fields.category,
        slug: edge.node.fields.slug
      }
    });
  });
}

