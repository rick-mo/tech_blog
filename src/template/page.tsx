import React, { FC } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Edges, Node } from '../types';
import Header from '../components/Header';
import AppDrawer from '../components/AppDrawer';
import { Toolbar } from '@material-ui/core';

type Props = {
  data: {
    markdownRemark: Pick<Node, 'frontmatter' | 'html'>,
    allMarkdownRemark: Edges
  },
  location: Location
}

const Page: FC<Props> = ({ data, location }) => {
  const node = data.markdownRemark;
  const edges = data.allMarkdownRemark.edges;
  // TODO: markdownをコンポーネント化
  return (
    <Layout edges={edges} activePath={location.pathname}>
      <h1>{node.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: node.html}} />
    </Layout>
  )
};

export const query = graphql`
  query ($category: String!, $slug: String!) {
    markdownRemark(fields: { 
      category: { eq: $category }
      slug: { eq: $slug } 
    }) {
      frontmatter {
        title
        date
      }
      html
    }
    allMarkdownRemark {
      edges {
        node {
          fields {
            category
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default Page;
