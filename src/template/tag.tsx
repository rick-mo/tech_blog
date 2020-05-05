import React, { FC } from 'react';
import Layout from '../components/Layout';
import { AllMarkdownRemark } from '../types';
import { Typography, Card, CardContent, CardHeader, Divider } from '@material-ui/core';
import CustomLink from '../components/CustomLink';
import { graphql } from 'gatsby';
import { getCategoryList } from '../utils/getCategoryList';

type Props = {
  data: AllMarkdownRemark
  location: Location
  pageContext: {
    tag: string
    tagName: string
  }
}

const Tag: FC<Props> = ({ data, location, pageContext }) => {
  const categoryList = getCategoryList(data.allMarkdownRemark);
  const tagEdges = data.allMarkdownRemark.edges.filter(({ node }) => node.fields.tagKey === pageContext.tag);

  return (
    <Layout categoryList={categoryList} activePath={location.pathname}>
      <Card>
        <CardHeader title={pageContext.tagName} />
        <Divider />
        <CardContent>
          {tagEdges.map(({ node }, index) => (
            <CustomLink key={index} to={node.frontmatter.path}>
              <Typography>{node.frontmatter.title}</Typography>
            </CustomLink>
          ))}
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

export default Tag;
