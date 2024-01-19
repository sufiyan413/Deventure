import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useMediaQuery, useTheme } from '@mui/material';
import './Header.css';

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => {
        setDrawerOpen(open);
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
                        <TextField
                            id="outlined-basic"
                            label="Search"
                            variant="outlined"
                            InputProps={{ sx: { textAlign: 'center', background: 'white', height: '50px' } }}
                            className="header-search"
                        />
                    )}
                </div>

                {isSmallScreen ? (
                    <IconButton color="inherit" className="header-icon-button" onClick={() => toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                ) : (
                    <div className="header-right">
                        <IconButton color="inherit" component={Link} to="/bag" className="header-icon-button">
                            <LocalMallOutlinedIcon style={{ width: '32px', height: '32px' }} />
                        </IconButton>
                        <Link to="/bag" className="header-link">
                            Bag
                        </Link>
                        <Link to="/login" className="header-link" style={{ marginLeft: '30px' }}>
                            Login
                        </Link>
                    </div>
                )}
                <Drawer anchor="right" open={isDrawerOpen} onClose={() => toggleDrawer(false)}>
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