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

// icons
import MenuIcon from "@mui/icons-material/Menu";

type Props = {
  nav: string[];
};

function BurgerMenu({ nav }: Props) {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{ width: "300px" }}>
        <List sx={{ width: "300px" }}>
          {nav.map((item) => (
            <ListItemButton key={`mobile${item}`}>
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
