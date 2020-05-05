import React, { FC } from 'react';
import { List, makeStyles, ListSubheader, ListItem, ListItemText, Theme } from '@material-ui/core';
import CustomLink from './CustomLink';

const useStyles = makeStyles((theme: Theme) => ({
  drawerContainer: {
    overflow: 'auto',
    '& .Mui-selected': {
      borderRight: `2px solid ${theme.palette.secondary.main}`,
      color: theme.palette.secondary.main
    }
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));


type Props = {
  category: string
  tagList: { [tag: string]: string },
  activePath: string
};

const SideMenuList: FC<Props> = ({ category, tagList, activePath }) => {
  const classes = useStyles();
  const activeTag = activePath.split('/')[1];

  return (
    <List className={classes.drawerContainer}
      subheader={
        <ListSubheader>{category}</ListSubheader>
      }
    >
      {Object.keys(tagList).sort().map((tag, index) => (
        <CustomLink key={index} to={`/${tag}`}>
          <ListItem className={classes.nested} button selected={activeTag === tag}>
            <ListItemText primary={tagList[tag]} />
          </ListItem>
        </CustomLink>
      ))}
    </List>
  );
};

export default SideMenuList;
