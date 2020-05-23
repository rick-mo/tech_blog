import React, { FC } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
} from '@material-ui/core';
import { markdownStyle } from '../theme';
import { Node } from '../types';

const useStyles = markdownStyle;

type Props = {
  node: Node;
  html: string;
};

const MarkdownPage: FC<Props> = ({ node, html }) => {
  const classes = useStyles();
  return (
    <Card className={classes.markdown}>
      <CardHeader title={node.frontmatter.title} />
      <CardContent>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </CardContent>
    </Card>
  );
};

export default MarkdownPage;
