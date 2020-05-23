import React, { FC } from 'react';
import {
  makeStyles,
  Drawer,
  Theme,
  Typography,
  Divider,
  List,
} from '@material-ui/core';
import CustomLink from './CustomLink';
import { drawerWidth } from '../types';
import SideMenuList from './SideMenuList';
import { categories } from '../data/categories';

const useStyles = makeStyles((theme: Theme) => ({
  drawerPaper: {
    width: drawerWidth,
  },
  title: {
    color: theme.palette.common.white,
    padding: theme.spacing(2),
  },
  drawerContainer: {
    overflow: 'auto',
  },
}));

type Props = {
  variant: 'permanent' | 'temporary';
  open: boolean;
  onClose?: () => void;
  activePath: string;
};

const SideMenuBar: FC<Props> = ({ variant, open, onClose, activePath }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant={variant}
      classes={{
        paper: classes.drawerPaper,
      }}
      open={open}
      onClose={onClose}
    >
      <CustomLink to="/">
        <Typography className={classes.title} variant="h6">
          {'Tech Memo'}
        </Typography>
      </CustomLink>
      <Divider />
      <List className={classes.drawerContainer} disablePadding>
        {categories.map(({ id, items }) => (
          <SideMenuList
            key={id}
            category={id}
            items={items}
            activePath={activePath}
          />
        ))}
        <Typography variant="subtitle2" className={classes.title}>
          {'© 2020 '}
          <CustomLink to={'https://github.com/ricknigel'} external={true}>
            {'ricknigel'}
          </CustomLink>
        </Typography>
      </List>
    </Drawer>
  );
};

export default SideMenuBar;
