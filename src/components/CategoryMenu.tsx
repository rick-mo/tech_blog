import React, { FC, Fragment, useState } from 'react';
import { List, ListItem, ListItemText, Collapse } from '@material-ui/core';
import { Menu } from '../types';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { Link } from 'gatsby';

type Props = {
  menu: Menu,
  activePath: string
};

const CategoryMenu: FC<Props> = ({ menu, activePath }) => {
  const [open, setOpen] = useState<boolean>(activePath.includes(menu.category));

  const handleOpen = () => {
    setOpen(!open);
  }

  return (
    <Fragment>
      <ListItem button onClick={handleOpen}>
        <ListItemText primary={menu.category} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open}>
        <List>
          {menu.items.map((item, index) => (
            <ListItem key={index} button>
              <Link to={`/${menu.category}/${item.slug}`}>
                <ListItemText primary={item.title} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Fragment>
  );
};

export default CategoryMenu;
