import React, { FC, useState } from 'react';
import { makeStyles, Theme, Hidden, Fab } from '@material-ui/core';
import { UnfoldMore } from '@material-ui/icons';
import { drawerWidth } from '../types';
import SideMenuBar from './SideMenuBar';

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    }
  },
  smallScreenSideBar: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
    position: 'fixed',
    right: theme.spacing(5),
    bottom: theme.spacing(5),
  }
}));

type Props = {
  activePath: string
}

const AppDrawer: FC<Props> = ({ activePath }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <nav className={classes.drawer}>
      <Hidden smUp>
        <SideMenuBar 
          variant="temporary" 
          open={open} 
          activePath={activePath} 
          onClose={handleOpen} 
        />
      </Hidden>
      <Hidden xsDown>
        <SideMenuBar 
          variant="permanent" 
          open={true} 
          activePath={activePath} 
        />
      </Hidden>
      <div className={classes.smallScreenSideBar}>
        {!open && 
          <Fab size="large" onClick={handleOpen}>
            <UnfoldMore color="secondary" fontSize="large" />
          </Fab>
        }
      </div>
    </nav>
  );
};

export default AppDrawer;
