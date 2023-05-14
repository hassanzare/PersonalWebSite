import React, { useState, useEffect } from "react";

import { AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Sidedrawers from "./Sidedrawers";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (value) => {
    setDrawerOpen(value);
  };

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: "#81728a",
        boxShadow: "none",
        Padding: "10px 0px",
      }}
    >
      <Toolbar>
        <div className="header_logo">
          <div className="font_righteous header_logo_venue">Hasan Zare</div>
          <div className="header_logo_title">
            یک برنامه نویس خود آموزکه همواره در حال یادگیری هست
          </div>
        </div>

        <IconButton
          aria-label="Menu"
          color="inherit"
          onClick={() => toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Sidedrawers
          open={drawerOpen}
          onClose={(value) => toggleDrawer(value)}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
