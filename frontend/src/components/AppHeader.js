import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Link, NavLink } from "react-router-dom";
import HeaderAnimation from './HeaderAnimation';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { ToastContainer, toast } from 'react-toastify';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import BusinessIcon from '@mui/icons-material/Business';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

const drawerWidth = "80%";

const serverUrl = process.env.REACT_APP_SERVER_URL;
export default function AppHeader({ window }) {

  const navigate = useNavigate(); // For navigation
  const location = useLocation();

  const [validUser, setValidUser] = useState(null);

  const userValidation = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/validate-user`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        }
      });

      console.log('Validation response:', response);
      setValidUser(response.data);

    } catch (error) {
      // Handle the error and redirect to login if unauthorized
      if (error.response && error.response.status === 401) {
        console.log('User not verified. Redirecting to login.');
      } else {
        console.error('Error validating user:', error);
      }
    }
  };

  useEffect(() => {
    userValidation()
  }, [])
  useEffect(() => {

  }, [validUser])

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const linkCss = {
    marginLeft: "44px",
    paddingLeft: "0px",
    paddingRight: "0px",
    fontFamily: "poppins",
    minWidth: "0px",
    textDecoration: 'none',
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left', paddingLeft: { xs: '30px', sm: '0px' } }} mt={4}>
      <Box sx={{ marginTop: { xs: "-10px", sm: "10px" }, marginBottom: { xs: '20px', sm: '40px' } }}>
        <p className='logoText'>Riser</p>
        {/* <img src={logo} style={{ width: "280px", height: "35px" }} alt="logo" className='siteLogo' id="logoImg" /> */}
      </Box>
      <List sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <NavLink to='/' className={(e) => { return e.isActive ? "navActive menuBtn" : 'menuBtn' }} style={linkCss} >
          HOME
        </NavLink>
        <NavLink to='/about' className={(e) => { return e.isActive ? "navActive menuBtn" : 'menuBtn' }} style={linkCss} >
          ABOUT US
        </NavLink>
        <NavLink to='/projects' className={(e) => { return e.isActive ? "navActive menuBtn" : 'menuBtn' }} style={linkCss} >
          PROJECTS
        </NavLink>
        <NavLink to='/blogs' className={(e) => { return e.isActive ? "navActive menuBtn" : 'menuBtn' }} style={linkCss} >
          BLOGS
        </NavLink>
        <NavLink to='/contact' className={(e) => { return e.isActive ? "navActive menuBtn" : 'menuBtn' }} style={linkCss} >
          Connect
        </NavLink>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const AppHeaderWrapperCss = {
    justifyContent: "center",
    height: "65px",
    width: "100%",
    position: "fixed",
    zIndex: "99",
    top: '-84px',
    backgroundColor: "#ffffff",
    display: { xs: 'none', md: 'flex' }
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      let response = await axios.post(`${serverUrl}/api/logout`, {}, { withCredentials: true });
      console.log(response)
      toast.success('Logged Out Successfully');
      setValidUser(null)
      if (location.pathname.includes('/pg')) {
        navigate('/');
      }
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={600}
        theme="light"
      />

      <Box sx={AppHeaderWrapperCss} className="appBar" id="appHeader">
        <CssBaseline />
        <AppBar className='siteWidth' component="nav" sx={{ right: 'auto', boxShadow: "none", backgroundColor: { xs: "#505759", md: "transparent" }, position: "fixed", top: "0px", zIndex: "10" }} >
          <Toolbar style={{ display: "flex", justifyContent: "space-between", height: "65px", padding: "0px" }}>
            <Box style={{ marginTop: "10px" }}>
              <p className='logoText'>{validUser?.name ? validUser.name : 'Riser'}</p>
              {/* <img src={logo} style={{ width: "280px", height: "35px" }} alt="logo" className='siteLogo' id="logoImg" /> */}
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'block' } }} className="menuList">
              <NavLink to='/' className={(e) => { return e.isActive ? "navActive menuBtn" : 'menuBtn' }} style={linkCss} >
                HOME
              </NavLink>
              <NavLink to='/about' className={(e) => { return e.isActive ? "navActive menuBtn" : 'menuBtn' }} style={linkCss} >
                ABOUT US
              </NavLink>
              <NavLink to='/projects' className={(e) => { return e.isActive ? "navActive menuBtn" : 'menuBtn' }} style={linkCss} >
                PROJECTS
              </NavLink>
              <NavLink to='/blogs' className={(e) => { return e.isActive ? "navActive menuBtn" : 'menuBtn' }} style={linkCss} >
                BLOGS
              </NavLink>
              <NavLink to='/contact' className={(e) => { return e.isActive ? "navActive menuBtn" : 'menuBtn' }} style={linkCss} >
                Connect
              </NavLink>
              {validUser?.name ? (
                <Tooltip title="My Menu">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 6, p: 0 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <Avatar color="primary" sx={{ width: 34, height: 34, bgcolor: '#414242' }} />
                  </IconButton>
                </Tooltip>
              ) : (
                <NavLink to='/login' className={(e) => { return e.isActive ? "navActive menuBtn" : 'menuBtn' }} style={linkCss} >
                  Login
                </NavLink>
              )}
            </Box>

          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
          >
            {drawer}

          </Drawer>

        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
        <HeaderAnimation />
      </Box>


      <Box sx={{ mr: 2, display: {xs:'flex', md: 'none' }, position: 'fixed', top: '10px', zIndex: '1' ,justifyContent:'space-between',padding:'0 15px',width:'100%',alignItems:'center'}}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <MenuIcon id='ia' fontSize='large' />
        </IconButton>
        {validUser?.name ? (
          <Tooltip title="My Menu">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml:{md:6} , p: 0 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar color="primary" sx={{ width: 34, height: 34, bgcolor: '#414242' }} />
            </IconButton>
          </Tooltip>
        ) : (
          <NavLink to='/login' className={(e) => { return e.isActive ? "navActive menuBtn" : 'menuBtn' }} style={linkCss} >
            Login
          </NavLink>
        )}
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >

        <Link to="/pg" style={{ textDecoration: "none", color: "#000" }}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <BusinessIcon fontSize="small" />
            </ListItemIcon>
            Business Dashbord
          </MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
