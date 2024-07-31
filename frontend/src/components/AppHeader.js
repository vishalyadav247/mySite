import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
// import logo from '../images/logo.png';
import { Link } from "react-router-dom";
import HeaderAnimation from './HeaderAnimation';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Person from '@mui/icons-material/Person';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';





const drawerWidth = "80%";
setTimeout(() => {
  let address = window.location.pathname;
  if (address === '/') {
    let lnks = document.querySelectorAll('.menuBtn');
    let lnkArr = Array.from(lnks);
    lnkArr[0].style.color = 'rgb(65 128 252)'
  }
  else if (address === '/about') {
    let lnks = document.querySelectorAll('.menuBtn');
    let lnkArr = Array.from(lnks);
    lnkArr[1].style.color = 'rgb(65 128 252)'
  }
  else if (address === '/projects') {
    let lnks = document.querySelectorAll('.menuBtn');
    let lnkArr = Array.from(lnks);
    lnkArr[2].style.color = 'rgb(65 128 252)'
  }
  else if (address === '/blogs' || address.includes('/posts') || address.includes('/categories')) {
    let lnks = document.querySelectorAll('.menuBtn');
    let lnkArr = Array.from(lnks);
    lnkArr[3].style.color = 'rgb(65 128 252)'
  }
  else if (address === '/contact') {
    let lnks = document.querySelectorAll('.menuBtn');
    let lnkArr = Array.from(lnks);
    lnkArr[4].style.color = 'rgb(65 128 252)'
  }
}, 100);

export default function AppHeader(props) {

  const Active = (event) => {
    let arr = document.querySelectorAll('.menuBtn');
    let arrM = document.querySelectorAll('.menuBtn.M');
    let linkArr = Array.from(arr);
    let linkArrM = Array.from(arrM);
    for (let link of linkArr) {
      link.style.color = '#000000'
    }
    for (let link of linkArrM) {
      link.style.color = '#000000'
    }
   
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    event.target.style.color = 'rgb(65 128 252)';
  }

  const { window } = props;
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
  const mobileMenuArrrow = {
    fontSize:'30px',
    position:'relative',
    top:'-2px'
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign:'left',paddingLeft:{xs:'30px',sm:'0px'} }} mt={4}>
      <Box sx={{ marginTop:{xs:"-10px",sm:"10px"}, marginBottom:{xs:'20px',sm:'40px'} }}>
        <p className='logoText'>Riser</p>
        {/* <img src={logo} style={{ width: "280px", height: "35px" }} alt="logo" className='siteLogo' id="logoImg" /> */}
      </Box>
      <List sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Link to='/' className="menuBtn M" style={linkCss} onClick={Active}>
          HOME <span style={mobileMenuArrrow}>&rarr;</span>
        </Link>
        <Link to='/about' className="menuBtn M" style={linkCss} onClick={Active}>
          ABOUT US <span style={mobileMenuArrrow}>&rarr;</span>
        </Link>
        <Link to='/projects' className="menuBtn M" style={linkCss} onClick={Active}>
          PROJECTS <span style={mobileMenuArrrow}>&rarr;</span>
        </Link>
        <Link to='/blogs' className="menuBtn M" style={linkCss} onClick={Active}>
          BLOGS <span style={mobileMenuArrrow}>&rarr;</span>
        </Link>
        <Link to='/contact' className="menuBtn M" style={linkCss} onClick={Active}>
          HIRE Us! <span style={mobileMenuArrrow}>&rarr;</span>
        </Link>
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

  return (
    <>
      <Box sx={AppHeaderWrapperCss} className="appBar" id="appHeader">
        <CssBaseline />
        <AppBar className='siteWidth' component="nav" sx={{right:'auto', boxShadow: "none", backgroundColor: { xs: "#505759", md: "transparent" }, position: "fixed", top: "0px", zIndex: "10" }} >
          <Toolbar style={{ display: "flex", justifyContent: "space-between", height: "65px", padding: "0px" }}>
            <Box style={{ marginTop: "10px" }}>
              <p className='logoText'>Riser</p>
              {/* <img src={logo} style={{ width: "280px", height: "35px" }} alt="logo" className='siteLogo' id="logoImg" /> */}
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'block' } }} className="menuList">
              <Link to='/' className="menuBtn" style={linkCss} onClick={Active}>
                HOME 
              </Link>
              <Link to='/about' className="menuBtn" style={linkCss} onClick={Active}>
                ABOUT US
              </Link>
              <Link to='/projects' className="menuBtn" style={linkCss} onClick={Active}>
                PROJECTS
              </Link>
              <Link to='/blogs' className="menuBtn" style={linkCss} onClick={Active}>
                BLOGS
              </Link>
              <Link to='/contact' className="menuBtn" style={linkCss} onClick={Active}>
                Connect
              </Link>
              <Link to='/login' className="menuBtn" style={linkCss} onClick={Active}>
                Login
              </Link>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 5 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar color="primary" sx={{ width: 34, height: 34 }}/>
                </IconButton>
              </Tooltip>
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
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { md: 'none' }, position: 'fixed', right: '-10px', top: '10px', zIndex: '1111111' }}
      >
        <MenuIcon id='ia' fontSize='large' />
      </IconButton>
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
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <Link to="/pg">
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Person fontSize="small" />
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
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
