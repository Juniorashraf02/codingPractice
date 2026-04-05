"use client";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton
} from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


export default function Sidebar() {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Customers" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
