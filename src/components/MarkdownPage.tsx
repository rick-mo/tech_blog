import React, { FC } from 'react';
import { Card, CardHeader, CardContent, Chip, Divider } from '@material-ui/core';
import { markdownStyle } from '../theme';
import { Node } from '../types';
import CustomLink from './CustomLink';

const useStyles = markdownStyle;

type Props = {
  node: Node
  html: string
};

const MarkdownPage: FC<Props> = ({ node, html }) => {
  const classes = useStyles();
  return (
    <Card className={classes.markdown}>
      <CardHeader title={node.frontmatter.title} />
      <CustomLink to={`/${node.fields.tagKey}`}>
        <Chip 
          clickable 
          label={node.frontmatter.tag} 
        />
      </CustomLink>
      <Divider />
      <CardContent>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </CardContent>
    </Card>
  );
};

export default MarkdownPage;
