import React, { FC } from 'react';
import { Link } from 'gatsby';
import { makeStyles, Theme } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
    '&:hover': {
      color: blue[500],
      textDecoration: 'underline'
    },
  }
}));

type Props = {
  to: string
}

const CustomLink: FC<Props> = ({ to, children }) => {
  const classes = useStyles();
  return (
    <Link className={classes.link} to={to}>
      {children}
    </Link>
  );
};

export default CustomLink;
