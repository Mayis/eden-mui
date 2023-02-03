import React, { useState } from "react";

// components
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
import { scroller } from "react-scroll";

// icons
import BurgerMenu from "./BurgerMenu";
import LanguageIcon from "@mui/icons-material/Language";
// data
import { menu } from "../data";

function Header() {
  const [activeNav, setActiveNav] = useState<string>("Home");
  const [langOpen, setLangOpen] = useState<null | HTMLElement>(null);
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  // changing active tabs in navigation menu with scrolling its viewport
  const handleActiveNavChange = (e: React.SyntheticEvent<Element, Event>, activeNav: string) => {
    setActiveNav(activeNav);
    scroller.scrollTo(activeNav, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -100
    });
  };
  // opening the language part
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setLangOpen(event.currentTarget);
  };
  // closing the language part
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
          {isMobile ? (
            <BurgerMenu nav={menu.navbar} />
          ) : (
            <Tabs
              sx={{ marginLeft: "auto" }}
              indicatorColor="primary"
              value={activeNav}
              onChange={handleActiveNavChange}>
              {menu.navbar.map((item) => (
                <Tab
                  key={item}
                  label={item}
                  value={item}
                  sx={{
                    fontSize: { md: "12px", lg: "14px" },
                    padding: { md: "8px 10px", lg: "12px 16px" },
                    textTransform: "none"
                  }}
                />
              ))}
            </Tabs>
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
