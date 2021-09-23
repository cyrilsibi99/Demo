import React from "react";
import { makeStyles } from "@mui/styles";
import { SubjectOutlined } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  // Typography,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const useStyles = makeStyles({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    top: "63px",
    width: "240px",
    // height: "120%",
    minHeight: "100vh",
    backgroundColor: "#253053",
    color: "white",
  },
});
export default function Sidebar() {
  const classes = useStyles();

  return (
    <div className={classes.sideMenu}>
      <List>
        <ListItem variant='h1'>
          <ListItemText style={{alignItems:'center' , alignSelf:'center' ,justifyContent:'center'}}>
            Menu Bar
          </ListItemText>
        </ListItem>
        <Link
          to="/users"
          exact
          style={{ textDecoration: "none", color: "white" }}
        >
          <ListItem button>
            <ListItemIcon>
              <SubjectOutlined color="secondary" />
            </ListItemIcon>
            <ListItemText>Show All</ListItemText>
          </ListItem>
        </Link>
        <Link to="/add" style={{ textDecoration: "none", color: "white" }}>
          <ListItem button>
            <ListItemIcon>
              <SubjectOutlined color="secondary" />
            </ListItemIcon>
            <ListItemText>Add new</ListItemText>
          </ListItem>
        </Link>
      </List>

      {/* <List>
            {menuItems.map(item => (
                <ListItem button 
                key={item.text}
                onClick>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                    </ListItem>
            ))}
        </List> */}
    </div>
  );
}
