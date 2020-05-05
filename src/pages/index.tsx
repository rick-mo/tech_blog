import React, { FC } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout';
import { AllMarkdownRemark } from '../types';
import { Card, CardContent } from '@material-ui/core';
import { getCategoryList } from '../utils/getCategoryList';

type Props = {
  data: AllMarkdownRemark
};

const IndexPage: FC<Props> = ({ data }) => {
  const categoryList = getCategoryList(data.allMarkdownRemark);

  return (
    <Layout categoryList={categoryList} activePath={location.pathname}>
      <Card>
        <CardContent>
          当サイトは、サイト管理者が日常で得たIT知識を備忘録も兼ねてまとめたサイトです。
          {/* Gatsby製サイト */}
        </CardContent>
      </Card>
    </Layout>
  );
};

export const query = graphql`
  query {
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

export default IndexPage;
