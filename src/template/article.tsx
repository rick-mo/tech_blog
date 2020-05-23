import React, { FC } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Node } from '../types';
import MarkdownPage from '../components/MarkdownPage';
import Header from '../components/Header';

type Props = {
  data: {
    markdownRemark: Node;
  };
  location: Location;
};

const Article: FC<Props> = ({ data, location }) => (
  <Layout activePath={location.pathname}>
    <Header tagName={data.markdownRemark.frontmatter.tag} />
    <MarkdownPage node={data.markdownRemark} html={data.markdownRemark.html} />
  </Layout>
);

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
  }
`;

export default Article;
