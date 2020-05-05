import React, { FC } from 'react';
import { makeStyles, Drawer, Theme, Typography, Divider } from '@material-ui/core';
import CustomLink from './CustomLink';
import { drawerWidth, CategoryList } from '../types';
import SideMenuList from './SideMenuList';

const useStyles = makeStyles((theme: Theme) => ({
  drawerPaper: {
    width: drawerWidth,
  },
  title: {
    padding: theme.spacing(2)
  },
}));

type Props = {
  variant: "permanent" | "temporary"
  open: boolean
  onClose?: () => void
  categoryList: CategoryList
  activePath: string
};

const SideMenuBar: FC<Props> = ({ variant, open, onClose, categoryList, activePath }) => {
  const classes = useStyles();

  return (
    <Drawer 
      variant={variant} 
      classes={{
        paper: classes.drawerPaper
      }}
      open={open}
      onClose={onClose}
    >
      <Typography className={classes.title} variant="h6">
        <CustomLink to="/">Tech Memo</CustomLink>
      </Typography>
      <Divider />
      {Object.keys(categoryList).map((category, index) => (
        <SideMenuList 
          key={index} 
          category={category} 
          tagList={categoryList[category]} 
          activePath={activePath} 
        />
      ))}
    </Drawer>
  );
};

export default SideMenuBar;
