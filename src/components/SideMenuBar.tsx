import React, { FC } from 'react';
import { List, makeStyles } from '@material-ui/core';
import { Menu } from '../types';
import CategoryMenu from './CategoryMenu';

type Props = {
  menuList: Menu[],
  activePath: string
}

const useStyles = makeStyles(() => ({
  drawerContainer: {
    overflow: 'auto'
  }
}));

const SideMenuBar: FC<Props> = ({ menuList, activePath }) => {
  const classes = useStyles();
  return (
    <List className={classes.drawerContainer}>
      {menuList.map((menu, index) => (
        <CategoryMenu 
          key={index} 
          menu={menu} 
          activePath={activePath} 
        />
      ))}
    </List>
  );
};

export default SideMenuBar;
