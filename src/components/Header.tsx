import React, { FC } from 'react';
import { AppBar, Toolbar, Typography, makeStyles, Theme } from '@material-ui/core';
import { Link } from 'gatsby';

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  }
}));

const Header: FC = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar>
        <Link to="/">
          <Typography>My Tech Blog</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
