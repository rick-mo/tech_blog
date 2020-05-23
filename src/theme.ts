import { createMuiTheme, makeStyles, Theme } from '@material-ui/core';
import { blue, red, grey } from '@material-ui/core/colors';

export const myTheme = createMuiTheme({
  palette: {
    type: 'light',
    text: {
      primary: grey[800],
      secondary: grey[600],
      hint: grey[400],
    },
    background: {
      default: grey[200],
    },
    secondary: {
      main: blue[500],
      light: blue[200]
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: [
      '-apple-system', 
      'BlinkMacSystemFont', 
      'arial', 
      'sans-serif'
    ].join(','),
  },
  shape: {
    borderRadius: 15,
  },
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#23233c',
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItem: {
      root: {
        '&$selected': {
          borderRight: `2px solid ${blue[500]}`,
          color: blue[500],
        },
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        minWidth: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
  },
});

export const markdownStyle = makeStyles((theme: Theme) => ({
  markdown: {
    '& .line-numbers': {
      padding: '1rem 0 1rem .5rem',
    },
    '& .line-numbers-rows': {
      padding: '1rem 0 1rem .5rem',
    },
    '& .gatsby-highlight': {
      width: '95%',
      margin: '0 auto',
      '& pre': {
        borderRadius: 5,
      },
    },
    '& a': {
      textDecoration: 'none',
      color: theme.palette.secondary.main,
      '&:hover': {
        color: red[500],
        textDecoration: 'underline',
      },
    },
    '& h1, h2, h3, h4, h5, h6': {
      fontWeight: 'bold',
      marginTop: '2em',
      marginBottom: '2em',
    },
    '& h1, h2': {
      borderLeft: `2px solid ${theme.palette.secondary.main}`,
      paddingLeft: '1rem',
      borderBottom: `0.5px solid ${theme.palette.divider}`,
    },
    '& table': {
      width: '95%',
      margin: '0 auto',
      borderCollapse: 'collapse',
    },
    '& th': {
      border: `1px solid grey`,
      backgroundColor: theme.palette.secondary.light,
    },
    '& td': {
      border: `1px solid grey`,
    },
    '& tr': {
      '&:nth-child(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
    '& blockquote': {
      borderLeft: `5px solid ${theme.palette.text.hint}`,
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.secondary,
      padding: '1em',
    },
    '& p': {
      '& code': {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.secondary,
        padding: '0.1em 0.4em',
      },
    },
    '& ul, ol': {
      paddingLeft: '1.5em',
    },
    '& li': {
      '& p': {
        marginBlockEnd: 0,
      },
    },
  },
}));
