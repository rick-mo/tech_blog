'use strict';

const { resolve, basename } = require('path');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const tagKey = basename(resolve(node.fileAbsolutePath, '..'));
    const slug = basename(node.fileAbsolutePath, '.md');

    createNodeField({
      node,
      name: 'tagKey',
      value: tagKey
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
  const tagTemplate = resolve(__dirname, './src/template/tag.tsx');
  const articleTemplate = resolve(__dirname, './src/template/article.tsx');

  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              tagKey
              slug
            }
            frontmatter {
              path
              category
              tag
              title
            }
          }
        }
      }
    }
  `);

  if (response.errors) {
    console.log(response.errors);
    throw Error(response.errors);
  }

  const edges = response.data.allMarkdownRemark.edges;

  const tagList = edges.reduce((acc, { node }) => {
    if (!acc[node.fields.tagKey])
      acc[node.fields.tagKey] = node.frontmatter.tag;
    return acc;
  }, {});

  Object.keys(tagList).forEach(tag => {
    createPage({
      component: tagTemplate,
      path: `/${tag}`,
      context: {
        tag: tag,
        tagName: tagList[tag]
      }
    });
  });

  edges.forEach(({ node }) => {
    createPage({
      component: articleTemplate,
      path: node.frontmatter.path,
      context: {
        slug: node.fields.slug
      }
    });
  });
};
