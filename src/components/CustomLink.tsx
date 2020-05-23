import React, { FC, Fragment } from 'react';
import { Link } from 'gatsby';
import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  link: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover,&:focus': {
      color: theme.palette.secondary.main,
    },
    '&:visited': {
      color: 'inherit',
    },
  },
}));

type Props = {
  to: string;
  external?: boolean;
  className?: string;
};

const CustomLink: FC<Props> = ({
  to,
  external = false,
  className = '',
  children,
}) => {
  const classes = useStyles();
  return (
    <Fragment>
      {external ? (
        <a
          className={classes.link + ' ' + className}
          href={to}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <Link className={classes.link + ' ' + className} to={to}>
          {children}
        </Link>
      )}
    </Fragment>
  );
};

export default CustomLink;
