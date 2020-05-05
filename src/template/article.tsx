import React, { FC } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Node, Edges } from '../types';
import MarkdownPage from '../components/MarkdownPage';
import { getCategoryList } from '../utils/getCategoryList';

type Props = {
  data: {
    markdownRemark: Node,
    allMarkdownRemark: Edges
  }
  location: Location
};

const Article: FC<Props> = ({ data, location }) => {
  const node = data.markdownRemark;
  const categoryList = getCategoryList(data.allMarkdownRemark);

  return (
    <Layout categoryList={categoryList} activePath={location.pathname}>
      <MarkdownPage node={node} html={node.html} />
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { 
      slug: { eq: $slug }
    }) {
      fields {
        tagKey
        slug
      }
      frontmatter {
        path
        category
        tag
        title
        date
      }
      html
    }
    allMarkdownRemark {
      edges {
        node {
          fields {
            tagKey
          }
          frontmatter {
            path
            category
            tag
            title
            date
          }
        }
      }
    }
  }
`

export default Article;
