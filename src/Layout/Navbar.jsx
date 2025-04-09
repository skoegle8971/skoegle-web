"use client";

import { useState, useRef, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Collapse,
  Paper,
  Popper,
  ClickAwayListener,
  Grow,
  MenuList,
  MenuItem,
} from "@mui/material";
import { FiSearch } from "react-icons/fi";
import { 
  HiOutlineMenu, 
  HiOutlineX, 
  HiOutlineChevronRight, 
  HiOutlineChevronDown 
} from "react-icons/hi";

// Constants for reusability
const BRAND_COLOR = "#0077cc";
const MENU_ITEMS = [
  "Home",
  "Products",
  "Services",
  "Support",
  "About Us",
];

// Dropdown items for "More"
const MORE_DROPDOWN_ITEMS = [
  "Careers",
  "Blog",
  "Resources",
  "Partners",
  "Contact Us"
];

export default function ResponsiveNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreExpanded, setMoreExpanded] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const moreRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [moreRef]);

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleDropdownClose = () => {
    setDropdownOpen(false);
  };

  const handleMobileMoreToggle = () => {
    setMoreExpanded(!moreExpanded);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000", boxShadow: 1 }}>
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
          {/* Left Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 2, md: 4 } }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: BRAND_COLOR }}>
              SKOEGLE
            </Typography>
            
            {!isMobile && (
              <Box
                component="nav"
                sx={{
                  display: "flex",
                  gap: 3,
                }}
              >
                <Box
                  component="ul"
                  sx={{
                    display: "flex",
                    gap: 3,
                    listStyle: "none",
                    m: 0,
                    p: 0,
                  }}
                >
                  {MENU_ITEMS.map((item, idx) => (
                    <Box
                      component="li"
                      key={idx}
                      className="menu-item"
                      sx={{ cursor: "pointer" }}
                    >
                      {item}
                    </Box>
                  ))}
                  
                  {/* More dropdown for desktop */}
                  <Box
                    component="li"
                    className="menu-item"
                    ref={moreRef}
                    onClick={handleDropdownToggle}
                    sx={{ 
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      position: "relative"
                    }}
                  >
                    More
                    <HiOutlineChevronDown 
                      style={{ marginLeft: 4 }} 
                      className={dropdownOpen ? "chevron-rotate" : ""}
                    />
                    
                    {/* Dropdown menu */}
                    {dropdownOpen && (
                      <Paper
                        elevation={3}
                        sx={{
                          position: "absolute",
                          top: "100%",
                          right: 0,
                          mt: 1,
                          width: 180,
                          zIndex: 1000,
                          borderRadius: 1,
                        }}
                      >
                        <MenuList>
                          {MORE_DROPDOWN_ITEMS.map((item, idx) => (
                            <MenuItem 
                              key={idx} 
                              onClick={handleDropdownClose}
                              sx={{ 
                                fontSize: "14px", 
                                py: 1.2,
                                "&:hover": {
                                  color: BRAND_COLOR,
                                  backgroundColor: "rgba(0, 119, 204, 0.04)"
                                }
                              }}
                            >
                              {item}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </Paper>
                    )}
                  </Box>
                </Box>
              </Box>
            )}
          </Box>

          {/* Right Section */}
          {!isMobile ? (
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                fontWeight: 500, 
                fontSize: 16,
                cursor: "pointer",
                "&:hover": { color: BRAND_COLOR }
              }}
            >
              <span>Search</span>
              <FiSearch style={{ marginLeft: 6 }} />
            </Box>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton 
                sx={{ color: "#555" }}
                aria-label="search"
              >
                <FiSearch size={18} />
              </IconButton>
              <IconButton 
                onClick={() => setMenuOpen(true)}
                sx={{ color: "#555" }}
                aria-label="menu"
              >
                <HiOutlineMenu size={26} />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer 
        anchor="right" 
        open={menuOpen} 
        onClose={() => setMenuOpen(false)}
      >
        <Box sx={{ width: 280, p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: BRAND_COLOR }}>
              Menu
            </Typography>
            <IconButton 
              onClick={() => setMenuOpen(false)}
              aria-label="close menu"
            >
              <HiOutlineX size={26} />
            </IconButton>
          </Box>
          
          <List component="nav" disablePadding>
            {MENU_ITEMS.map((item, idx) => (
              <ListItem
                key={idx}
                button
                sx={{
                  backgroundColor: "#f7f7f7",
                  mb: 1,
                  borderRadius: 1,
                  fontWeight: 500,
                  fontSize: 16,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: "#e9f3fc",
                  }
                }}
              >
                <ListItemText primary={item} />
                <HiOutlineChevronRight />
              </ListItem>
            ))}
            
            {/* More dropdown in mobile */}
            <Box sx={{ mb: 1 }}>
              <ListItem
                button
                onClick={handleMobileMoreToggle}
                sx={{
                  backgroundColor: "#f7f7f7",
                  borderRadius: moreExpanded ? "8px 8px 0 0" : 1,
                  fontWeight: 500,
                  fontSize: 16,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: "#e9f3fc",
                  }
                }}
              >
                <ListItemText primary="More" />
                <IconButton
                  sx={{
                    p: 0,
                    transform: moreExpanded ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                  size="small"
                >
                  <HiOutlineChevronRight />
                </IconButton>
              </ListItem>
              
              <Collapse in={moreExpanded} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {MORE_DROPDOWN_ITEMS.map((item, idx) => (
                    <ListItem
                      key={idx}
                      button
                      sx={{
                        pl: 4,
                        backgroundColor: "#edf5fb",
                        borderTop: idx !== 0 ? "1px solid rgba(0,0,0,0.05)" : "none",
                        borderRadius: idx === MORE_DROPDOWN_ITEMS.length - 1 ? "0 0 8px 8px" : "0",
                        "&:hover": {
                          backgroundColor: "#e0eef9",
                        }
                      }}
                    >
                      <ListItemText 
                        primary={item} 
                        primaryTypographyProps={{ fontSize: 15 }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </Box>
          </List>
          
          {/* Mobile search button */}
          <Box 
            sx={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              backgroundColor: BRAND_COLOR,
              color: "white",
              py: 1.5,
              borderRadius: 1,
              mt: 2,
              cursor: "pointer"
            }}
          >
            <FiSearch style={{ marginRight: 8 }} />
            <Typography>Search</Typography>
          </Box>
        </Box>
      </Drawer>

      {/* Styles for animations and transitions */}
      <style jsx global>{`
        .menu-item {
          position: relative;
          font-weight: 500;
          font-size: 16px;
          color: #00001a;
          transition: color 0.2s ease;
        }

        .menu-item:hover {
          color: ${BRAND_COLOR};
        }

        .menu-item::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          height: 2px;
          width: 100%;
          background-color: ${BRAND_COLOR};
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease-in-out;
        }

        .menu-item:hover::after {
          transform: scaleX(1);
        }
        
        .chevron-rotate {
          transform: rotate(180deg);
          transition: transform 0.3s ease;
        }
      `}</style>
    </Box>
  );
}