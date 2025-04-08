"use client";

import { useState } from "react";
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
} from "@mui/material";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenu, HiOutlineX, HiOutlineChevronRight } from "react-icons/hi";

export default function ResponsiveNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = [
    "Home",
    "Products",
    "Services",
    "Support",
    "About Us",
    "More",
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000", boxShadow: 1 }}>
        <Toolbar sx={{ justifyContent: "space-between", px: 2 }}>
          {/* Left Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#0077cc" }}>
              SKOEGLE
            </Typography>
            {!isMobile && (
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
                {menuItems.map((item, idx) => (
                  <Box
                    component="li"
                    key={idx}
                    className="menu-item"
                    sx={{ cursor: "pointer" }}
                  >
                    {item}
                  </Box>
                ))}
              </Box>
            )}
          </Box>

          {/* Right Section */}
          {!isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center", fontWeight: 500, fontSize: 16 }}>
              <span>Search</span>
              <FiSearch style={{ marginLeft: 6 }} />
            </Box>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <FiSearch size={18} />
              <IconButton onClick={() => setMenuOpen(true)}>
                <HiOutlineMenu size={26} />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Box sx={{ width: 280, p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#0077cc" }}>
              Menu
            </Typography>
            <IconButton onClick={() => setMenuOpen(false)}>
              <HiOutlineX size={26} />
            </IconButton>
          </Box>
          <List>
            {menuItems.map((item, idx) => (
              <ListItem
                key={idx}
                button
                sx={{
                  backgroundColor: "#efefef",
                  mb: 1,
                  borderRadius: 1,
                  fontWeight: 500,
                  fontSize: 16,
                }}
              >
                <ListItemText primary={item} />
                <HiOutlineChevronRight />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Hover underline animation */}
      <style>{`
        .menu-item {
          position: relative;
          font-weight: 500;
          font-size: 16px;
          color: #00001a;
        }

        .menu-item::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          height: 2px;
          width: 100%;
          background-color: #0077cc;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease-in-out;
        }

        .menu-item:hover::after {
          transform: scaleX(1);
        }
      `}</style>
    </Box>
  );
}
