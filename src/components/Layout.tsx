import React from 'react';
import { ThemeProvider, CssBaseline, makeStyles, Theme } from '@material-ui/core';
import AppDrawer from './AppDrawer';
import { drawerWidth, CategoryList } from '../types';
import { myTheme } from '../theme';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(4),
    width: `calc(100% - ${drawerWidth})`,
  }
}));

type Props = {
  categoryList: CategoryList
  activePath?: string
}

const Layout: React.FC<Props> = ({ categoryList, activePath = '', children }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={myTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppDrawer categoryList={categoryList} activePath={activePath} />
        <main className={classes.content}>
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
