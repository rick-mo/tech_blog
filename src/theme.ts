import { createMuiTheme, makeStyles, Theme } from "@material-ui/core";
import { blue, red, green, grey } from '@material-ui/core/colors';

export const myTheme = createMuiTheme({
  palette: {
    type: 'light',
    text: {
      primary: grey[800],
      secondary: grey[500]
    },
    background: {
      default: grey[200]
    },
    primary: {
      main: red[500]
    },
    secondary: {
      main: blue[500]
    }
  },
  typography: {
    fontFamily: 'HiraKakuPro-W6',
  },
  shape: {
    borderRadius: 15
  },
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#23233c'
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854'
      }
    },
    MuiListItem: {
      root: {
        '&$selected': {
          borderRight: `2px solid ${blue[500]}`,
          color: blue[500]
        },
      }
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        minWidth: 0,
        '& svg': {
          fontSize: 20
        }
      }
    }
  }
});

export const markdownStyle = makeStyles((theme: Theme) => ({
  markdown: {
    '& .line-numbers': {
      padding: '1rem 0 1rem .5rem',
    },
    '& .line-numbers-rows': {
      padding: '1rem 0 1rem .5rem',
    },
    '& a': {
      textDecoration: 'none',
      color: theme.palette.secondary.main,
      '&:hover': {
        color: red[500],
        textDecoration: 'underline'
      }
    },
    '& h2': {
      borderLeft: `solid 2px ${theme.palette.secondary.main}`,
      paddingLeft: '1rem',
      borderBottom: `solid 0.5px ${theme.palette.divider}`
    },
    '& .gatsby-highlight': {
      width: '95%',
      margin: '0 auto',
      '& pre': {
        borderRadius: 5
      }
    },
    '& table': {
      width: '95%',
      margin: '0 auto',
      borderCollapse: 'collapse',
    },
    '& th': {
      border: `1px solid grey`,
      backgroundColor: green[100],
    },
    '& td': {
      border: `1px solid grey`,
    },
    '& tr': {
      '&:nth-child(odd)': {
        backgroundColor: theme.palette.grey[200]
      }
    }
  }
}));
