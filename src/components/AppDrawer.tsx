import React, { FC } from 'react';
import { Drawer, Toolbar, makeStyles } from '@material-ui/core';
import { Edge, Menu, Item } from '../types.js';
import SideMenuBar from './SideMenuBar';

const useStyles = makeStyles(() => ({
  drawer: {
    width: 150,
    flexShrink: 0
  },
  drawerPaper: {
    width: 150
  }
}));

const getMenuList = (edges: Edge[]) => {
  const menuList = edges.reduce<Menu[]>((acc, target) => {
    const category = target.node.fields.category;
    const item: Item = {
      slug: target.node.fields.slug,
      title: target.node.frontmatter.title
    };

    if (acc.some(v => v.category === category)) {
      acc.forEach(v => {
        if (v.category === category) v.items.push(item);
      });
    } else {
      acc.push({
        category: category,
        items: [item]
      });
    }

    return acc;
  }, []);
  return menuList;
}

type Props = {
  edges: Edge[],
  activePath: string
}

const AppDrawer: FC<Props> = ({ edges, activePath }) => {
  const classes = useStyles();
  const menuList = getMenuList(edges);

  return (
    <Drawer 
      className={classes.drawer} 
      variant="permanent" 
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <Toolbar />
      <SideMenuBar menuList={menuList} activePath={activePath} />
    </Drawer>
  );
};

export default AppDrawer;
