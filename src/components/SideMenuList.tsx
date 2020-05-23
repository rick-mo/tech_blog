import React, { FC, Fragment } from 'react';
import {
  makeStyles,
  ListItem,
  ListItemText,
  Theme,
  Divider,
  ListItemIcon,
} from '@material-ui/core';
import CustomLink from './CustomLink';

const useStyles = makeStyles((theme: Theme) => ({
  categoryHeader: {
    color: theme.palette.common.white,
  },
  itemTextColor: {
    color: theme.palette.text.secondary,
  },
  itemIcons: {
    paddingRight: theme.spacing(2),
  },
}));

type Props = {
  category: string;
  items: {
    id: string;
    to: string;
    icon: JSX.Element;
  }[];
  activePath: string;
};

const SideMenuList: FC<Props> = ({ category, items, activePath }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <ListItem>
        <ListItemText
          classes={{
            primary: classes.categoryHeader,
          }}
        >
          {category}
        </ListItemText>
      </ListItem>
      {items.map(({ id, to, icon }) => (
        <CustomLink className={classes.itemTextColor} key={id} to={to}>
          <ListItem button selected={activePath.includes(to)}>
            <ListItemIcon className={classes.itemIcons}>{icon}</ListItemIcon>
            <ListItemText>{id}</ListItemText>
          </ListItem>
        </CustomLink>
      ))}
      <Divider />
    </Fragment>
  );
};

export default SideMenuList;
