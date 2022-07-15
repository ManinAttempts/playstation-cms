import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  List,
  ListItemButton,
	Select
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const buttonStyle = {
    marginRight: "20px",
    color: "black",
    borderRadius: "17px",
    "&:hover": {
      bgcolor: "#f2f2f2",
    },
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar
        disableGutters
        sx={{
          bgcolor: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <List
          sx={{
            bgcolor: "white",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ListItemButton
            sx={buttonStyle}
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <Link className="link" to="/">
              Home
            </Link>
          </ListItemButton>
          <ListItemButton
            sx={buttonStyle}
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <Link className="link" to="/games">
              Games
            </Link>
          </ListItemButton>
          <ListItemButton
            sx={buttonStyle}
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <Link className="link" to="/accessories">
              Accessories
            </Link>
          </ListItemButton>
        </List>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
