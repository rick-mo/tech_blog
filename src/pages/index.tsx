import React, { FC } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout';
import { AllMarkdownRemark } from '../types';

type Props = {
  data: AllMarkdownRemark
  location: Location
}

const IndexPage: FC<Props> = ({ data, location }) => {
  const edges = data.allMarkdownRemark.edges;

  return (
    <Layout edges={edges} activePath={location.pathname}>
      <p>当サイトは、サイト管理者が日常で得たIT知識を備忘録も兼ねてまとめたサイトです。</p>
    </Layout>
  )
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            category
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
          }
          html
        }
      }
    }
  }
`

export default IndexPage;
