import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useMediaQuery, useTheme } from '@mui/material';
import CustomInput from '../Common/CustomInput';
import { useHeaderStore } from '../../Store/HeaderStore.ts'; 
import './Header.css';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const isDrawerOpen = useHeaderStore((state) => state.isDrawerOpen);
  const toggleDrawer = useHeaderStore((state) => state.toggleDrawer);
  const searchValue = useHeaderStore((state) => state.searchValue);
  const setSearchValue = useHeaderStore((state) => state.setSearchValue);
  const showBadge = useHeaderStore((state) => state.showBadge);
  const badgeContent = useHeaderStore((state) => state.badgeContent);


  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleDrawerToggle = (open: boolean) => {
    toggleDrawer(open);
  };

  return (
    <AppBar position="static" className="header-appbar" style={{ backgroundColor: 'black' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div className="header-left">
          <Link to="/">
            <img
              src="https://deventuretraining.blob.core.windows.net/website/img/site-logo/webp/deventure_logo.webp"
              alt="Deventure Logo"
              className="header-logo"
            />
          </Link>

          {!isSmallScreen && (
            <CustomInput
              label="Search"
              value={searchValue}
              onChange={handleSearchChange}
              width="350px"
              height="20px"
              padding="22px 0px 22px 0px"
            />
          )}
        </div>

        {isSmallScreen ? (
          <IconButton color="inherit" className="header-icon-button" onClick={() => handleDrawerToggle(true)}>
            <MenuIcon />
          </IconButton>
        ) : (
          <div className="header-right">
            <IconButton color="inherit" component={Link} to="/bag" className="header-icon-button">
      <Badge color="secondary" badgeContent={badgeContent} invisible={!showBadge}>
        <LocalMallOutlinedIcon />
      </Badge>
    </IconButton>
            <Link to="/bag" className="header-link">
              Bag
            </Link>
            <Link to="/login" className="header-link" style={{ marginLeft: '20px' }}>
              Login
            </Link>
          </div>
        )}
        <Drawer anchor="right" open={isDrawerOpen} onClose={() => handleDrawerToggle(false)}>
          <List>
            <ListItem button component={Link} to="/bag">
              <ListItemText primary="Bag" />
            </ListItem>
            <ListItem button component={Link} to="/login">
              <ListItemText primary="Login" />
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
