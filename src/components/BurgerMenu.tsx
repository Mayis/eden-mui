import React, { useState } from "react";

// components
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import { scroller } from "react-scroll";

// icons
import MenuIcon from "@mui/icons-material/Menu";

type Props = {
  nav: string[];
};

function BurgerMenu({ nav }: Props) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleScroll = (item: string) => {
    scroller.scrollTo(item, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -100
    });
    setOpenDrawer(false);
  };
  return (
    <>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{ width: "300px" }}>
        <List sx={{ width: "300px" }}>
          {nav.map((item) => (
            <ListItemButton key={`mobile${item}`} onClick={() => handleScroll(item)}>
              <ListItemIcon>
                <ListItemText>{item}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton sx={{ marginLeft: "auto" }} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default BurgerMenu;
