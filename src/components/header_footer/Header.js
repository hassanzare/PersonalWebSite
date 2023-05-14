import { AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Sidedrawers from "./Sidedrawers";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: "#2f2f2f",
        boxShadow: "none",
        Padding: "10px 0px",
      }}
    >
      <Toolbar>
        <div className="header_logo">
          <div className="font_righteous header_logo_venue">The Venue</div>
          <div className="header_logo_title">Musical Events</div>
        </div>

        <IconButton aria-label="Menu" color="inherit">
          <MenuIcon />
        </IconButton>
        <Sidedrawers />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
