import React, { FC, Fragment } from 'react';
import { AppBar, Toolbar, Typography, makeStyles, Theme } from '@material-ui/core';
import { drawerWidth } from '../types';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth})`,
    },
  },
}));

type Props = {
  tagName: string
}

const Header: FC<Props> = ({ tagName }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar className={classes.header} color="secondary">
        <Toolbar>
          <Typography>
            {tagName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Fragment>
  );
};

export default Header;
