import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Theme,
  Toolbar,
  useMediaQuery
} from "@mui/material";
import React, { useState } from "react";

import BurgerMenu from "./BurgerMenu";
import LanguageIcon from "@mui/icons-material/Language";

const pages = [
  "Home",
  "About Us",
  "Services",
  "Courses",
  "Team",
  "News & Events",
  "Gallary",
  "Contact"
];

function Header() {
  const [value, setValue] = useState("Home");
  const isMatch = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const [langOpen, setLangOpen] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setLangOpen(event.currentTarget);
  };

  const handleClose = () => {
    setLangOpen(null);
  };

  const open = Boolean(langOpen);

  return (
    <>
      <AppBar sx={{ background: "white" }}>
        <Toolbar>
          <img
            src="https://eden.am/_next/static/media/logo.1388381d.svg"
            alt="eden-logo"
            style={{ width: "70px", height: "75px" }}
          />
          {isMatch ? (
            <BurgerMenu />
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                value={value}
                onChange={(e, value) => setValue(value)}>
                {pages.map((item) => (
                  <Tab
                    key={item}
                    label={item}
                    value={item}
                    sx={{
                      fontSize: { md: "12px", lg: "14px" },
                      padding: { md: "8px 10px", lg: "12px 16px" }
                    }}
                  />
                ))}
              </Tabs>
            </>
          )}
          <IconButton sx={{ marginLeft: { md: "15px", lg: "auto" } }} onClick={handleClick}>
            <LanguageIcon />
          </IconButton>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={langOpen}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left"
            }}>
            <MenuItem onClick={handleClose}>Eng</MenuItem>
            <MenuItem onClick={handleClose}>Arm</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
