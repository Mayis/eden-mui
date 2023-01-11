import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import React, { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';

const pages = [
  'Home',
  'About Us',
  'Services',
  'Courses',
  'Team',
  'News & Events',
  'Gallary',
  'Contact'
];
function BurgerMenu() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{ width: '300px' }}>
        <List sx={{ width: '300px' }}>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton sx={{ marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default BurgerMenu;
