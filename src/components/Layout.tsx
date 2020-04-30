import React from 'react';
import { ThemeProvider, CssBaseline, createMuiTheme, makeStyles, Theme, Toolbar } from '@material-ui/core';
import Header from './Header';
import AppDrawer from './AppDrawer';
import { Edge } from '../types';

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
  typography: {
    fontFamily: 'HiraKakuPro-W6',
    fontSize: 12
  },
});

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

type Props = {
  edges?: Edge[]
  activePath?: string
}

const Layout: React.FC<Props> = ({ edges, activePath, children }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Header />
        {(edges || activePath) &&
          <AppDrawer edges={edges} activePath={activePath} />}
        <main className={classes.content}>
          <Toolbar />
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
