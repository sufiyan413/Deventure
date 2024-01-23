
import React, { useState, useEffect } from 'react';
import './Subheader.css';
import { NavLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useMediaQuery, useTheme } from '@mui/material';
import CustomInput from '../Common/CustomInput';
import { fetchMenuCategories, MenuCategory } from '../ApiServices/Api';



interface SubheaderProps { }

const Subheader: React.FC<SubheaderProps> = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [menuCategories, setMenuCategories] = useState<MenuCategory[]>([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetchMenuCategories();
        const { data } = response;
        setMenuCategories(data.menuCategories);
        console.log("Data received:", data);
      } catch (error) {
        console.error('Error fetching menu categories:', error);
      }
    };

    fetchData();

  }, []);

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

          <CustomInput
            label="Search"
            value=""
            onChange={() => { }}
            width="100%"
            height="50px"
            padding="0 10px"
          />

        </div>
      ) : (

        <div className="subheader">
          {menuCategories.map(category => (
            <NavLink key={category.id} to={`${category.id}`} className="subheader-link">
              {category.title}
            </NavLink>
          ))}

        </div>
      )}

      <Drawer anchor="left" open={isDrawerOpen} onClose={() => toggleDrawer(false)}>
        <List>
          {menuCategories.map(category => (
            <ListItemButton key={category.id} component={NavLink} to={`${category.id}`}>
              <ListItemText primary={category.title} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Subheader;
