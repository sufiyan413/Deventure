import React, { useState } from 'react';
import './Subheader.css';
import { NavLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { ListItemButton, TextField, useMediaQuery, useTheme } from '@mui/material';

interface SubheaderProps {}

const Subheader: React.FC<SubheaderProps> = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
      setDrawerOpen(open);
  };

  return (
      <>
      {isSmallScreen ? (
          <div className="subheader">
                  <IconButton color="inherit" onClick={() => toggleDrawer(true)}>
                      <MenuIcon />
                  </IconButton>
                  <TextField
                      id="outlined-basic"
                      label="Search"
                      variant="outlined"
                      InputProps={{ sx: { textAlign: 'center', background: 'white', height: '50px' } }}
                      className="header-search"
                  />
           </div>
          ) : (
              <div className="subheader">
                  <NavLink to="/appetizers" className="subheader-link">
                      Appetizers
                  </NavLink>
                  <NavLink to="/burgers" className="subheader-link">
                      Burgers
                  </NavLink>
                  <NavLink to="/desserts" className="subheader-link">
            Desserts
          </NavLink>
          <NavLink to="/salads" className="subheader-link">
            Salads
          </NavLink>
          <NavLink to="/pizza" className="subheader-link">
            Pizza
          </NavLink>
          <NavLink to="/barbeque" className="subheader-link">
            Barbeque
          </NavLink>
          <NavLink to="/soups" className="subheader-link">
            Soups
          </NavLink>
          <NavLink to="/moms-home" className="subheader-link">
            Mom's Home
          </NavLink>
          <NavLink to="/breakfast" className="subheader-link">
            Breakfast
          </NavLink>
          <NavLink to="/drinks" className="subheader-link">
            Drinks
          </NavLink>
          <NavLink to="/sauces" className="subheader-link">
            Sauces
          </NavLink>
              </div>
          )}
          <Drawer anchor="left" open={isDrawerOpen} onClose={() => toggleDrawer(false)}>
                <List>
                    <ListItemButton component={NavLink} to="/appetizers">
                        <ListItemText primary="Appetizers" />
                    </ListItemButton>
                    <ListItemButton component={NavLink} to="/burgers">
                        <ListItemText primary="Burgers" />
                    </ListItemButton>
                    <ListItemButton component={NavLink} to="/desserts">
                        <ListItemText primary="Desserts" />
                    </ListItemButton>
                    <ListItemButton component={NavLink} to="/salads">
                        <ListItemText primary="Salads" />
                    </ListItemButton>
                    <ListItemButton component={NavLink} to="/pizza">
                        <ListItemText primary="Pizza" />
                    </ListItemButton>
                    <ListItemButton component={NavLink} to="/barbeque">
                        <ListItemText primary="Barbeque" />
                    </ListItemButton>
                    <ListItemButton component={NavLink} to="/soups">
                        <ListItemText primary="Soups" />
                    </ListItemButton>
                    <ListItemButton component={NavLink} to="/moms-home">
                        <ListItemText primary=" Mom's Home" />
                    </ListItemButton>
                    <ListItemButton component={NavLink} to="/breakfast">
                        <ListItemText primary="Breakfast" />
                    </ListItemButton>
                    <ListItemButton component={NavLink} to="/drinks">
                        <ListItemText primary="Drinks" />
                    </ListItemButton>
                    <ListItemButton component={NavLink} to="/sauces">
                        <ListItemText primary="Sauces" />
                    </ListItemButton>
                   
                </List>
            </Drawer>
      </>
  );
};

export default Subheader;