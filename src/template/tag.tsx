import React, { FC } from 'react';
import Layout from '../components/Layout';
import { AllMarkdownRemark } from '../types';
import CustomLink from '../components/CustomLink';
import { graphql } from 'gatsby';
import Header from '../components/Header';
import { Grid, Typography, Divider, Card } from '@material-ui/core';

type Props = {
  data: AllMarkdownRemark
  location: Location
  pageContext: {
    tag: string
    tagName: string
  }
}

const Tag: FC<Props> = ({ data, location, pageContext }) => {
  const tagEdges = data.allMarkdownRemark.edges.filter(
    ({ node }) => node.fields.tagKey === pageContext.tag
  );

  return (
    <Layout activePath={location.pathname}>
      <Header tagName={pageContext.tagName} />
      <Grid container spacing={3}>
        {tagEdges.map(({ node }, index) => (
          <Grid item xs={12} key={index}>
            <Typography variant="h6">
              <CustomLink to={node.frontmatter.path}>
                {node.frontmatter.title}
              </CustomLink>
            </Typography>
            <Divider />
          </Grid>
        ))}
      </Grid>
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
