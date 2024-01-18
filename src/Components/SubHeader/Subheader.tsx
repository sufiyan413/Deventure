import React, { useState } from 'react';
import './Subheader.css';
import { Link, NavLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useMediaQuery, useTheme } from '@mui/material';

interface SubheaderProps {}

const Subheader: React.FC<SubheaderProps> = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <>
      {isSmallScreen ? (
        <IconButton color="inherit" onClick={() => toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      ) : (
        <div className="subheader">
          <NavLink to="/appetizers" >
            Appetizers
          </NavLink>
          <Link to="/burgers">
            Burgers
          </Link>
          <Link to="/desserts">
            Desserts
          </Link>
          <Link to="/salads">
            Salads
          </Link>
          <Link to="/pizza">
            Pizza
          </Link>
          <Link to="/barbeque">
            Barbeque
          </Link>
          <Link to="/soups">
            Soups
          </Link>
          <Link to="/moms-home">
            Mom's Home
          </Link>
          <Link to="/breakfast">
            Breakfast
          </Link>
          <Link to="/drinks">
            Drinks
          </Link>
          <Link to="/sauces">
            Sauces
          </Link>
        </div>
      )}
      <Drawer anchor="bottom" open={isDrawerOpen} onClose={() => toggleDrawer(false)}>
        <List>
          <ListItem button component={Link} to="/appetizers">
            <ListItemText primary="Appetizers" />
          </ListItem>
          <ListItem button component={Link} to="/burgers">
            <ListItemText primary="Burgers" />
          </ListItem>
          <ListItem button component={Link} to="/desserts">
            <ListItemText primary="Desserts" />
          </ListItem>
          <ListItem button component={Link} to="/salads">
            <ListItemText primary="Salads" />
          </ListItem>
          <ListItem button component={Link} to="/pizza">
            <ListItemText primary="Pizza" />
          </ListItem>
          <ListItem button component={Link} to="/barbeque">
            <ListItemText primary="Barbeque" />
          </ListItem>
          <ListItem button component={Link} to="/soups">
            <ListItemText primary="Soups" />
          </ListItem>
          <ListItem button component={Link} to="/moms-home">
            <ListItemText primary="Mom's Home" />
          </ListItem>
          <ListItem button component={Link} to="/breakfast">
            <ListItemText primary="Breakfast" />
          </ListItem>
          <ListItem button component={Link} to="/drinks">
            <ListItemText primary="Drinks" />
          </ListItem>
          <ListItem button component={Link} to="/sauces">
            <ListItemText primary="Sauces" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Subheader;
