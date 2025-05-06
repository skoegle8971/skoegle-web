"use client";

import { useRouter } from "next/navigation";
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
  MenuList,
  MenuItem,
} from "@mui/material";
import { FiSearch } from "react-icons/fi";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineChevronRight,
  HiOutlineChevronDown,
} from "react-icons/hi";
import { useUser, SignOutButton, UserButton } from "@clerk/nextjs"; // Import UserButton
import Link from "next/link"; // Import Link

const BRAND_COLOR = "#0077cc";

const MENU_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Services", path: "/services" },
  { label: "Support", path: "/support" },
  { label: "About Us", path: "/about" },
];

const MORE_DROPDOWN_ITEMS = [
  { label: "Careers", path: "/careers" },
  { label: "Blog", path: "/blog" },
  { label: "Resources", path: "/resources" },
  { label: "Partners", path: "/partners" },
  { label: "Contact Us", path: "/contact" },
];

export default function ResponsiveNavbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreExpanded, setMoreExpanded] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const moreRef = useRef(null);
  const { isSignedIn } = useUser();

  useEffect(() => {
    function handleClickOutside(event) {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownToggle = () => setDropdownOpen((prev) => !prev);
  const handleDropdownClose = () => setDropdownOpen(false);
  const handleMobileMoreToggle = () => setMoreExpanded(!moreExpanded);
  const handleSignUpClick = () => !isSignedIn && router.push("/signup");

  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000", boxShadow: 3 }}>
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
          {/* Left - Logo and Menu */}
          <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 2, md: 4 } }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: BRAND_COLOR }}>
              <Link href="/" style={{ textDecoration: "none", color: BRAND_COLOR }}>
                SKOEGLE
              </Link>
            </Typography>

            {!isMobile && (
              <Box component="nav" sx={{ display: "flex", gap: 3 }}>
                <Box component="ul" sx={{ display: "flex", gap: 3, listStyle: "none", m: 0, p: 0 }}>
                  {MENU_ITEMS.map(({ label, path }, idx) => (
                    <Box
                      component="li"
                      key={idx}
                      className="menu-item"
                      sx={{ cursor: "pointer" }}
                      onClick={() => router.push(path)}
                    >
                      {label}
                    </Box>
                  ))}

                  <Box
                    component="li"
                    className="menu-item"
                    ref={moreRef}
                    onClick={handleDropdownToggle}
                    sx={{ cursor: "pointer", display: "flex", alignItems: "center", position: "relative" }}
                  >
                    More
                    <HiOutlineChevronDown
                      style={{ marginLeft: 4 }}
                      className={dropdownOpen ? "chevron-rotate" : ""}
                    />

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
                          {MORE_DROPDOWN_ITEMS.map(({ label, path }, idx) => (
                            <MenuItem
                              key={idx}
                              onClick={() => {
                                handleDropdownClose();
                                router.push(path);
                              }}
                              sx={{
                                fontSize: "14px",
                                py: 1.2,
                                "&:hover": {
                                  color: BRAND_COLOR,
                                  backgroundColor: "rgba(0, 119, 204, 0.04)",
                                },
                              }}
                            >
                              {label}
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

          {/* Right - Buttons */}
          {!isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {isSignedIn ? (
                // Show UserButton only when the user is signed in
                <UserButton
                  sx={{
                    backgroundColor: BRAND_COLOR,
                    color: "#fff",
                    border: "none",
                    px: 3,
                    py: 1,
                    borderRadius: "20px",
                    fontWeight: 500,
                    fontSize: 14,
                    cursor: "pointer",
                    transition: "background 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#005fa3",
                    },
                  }}
                />
              ) : (
                // Show Sign In button when the user is not signed in
                <Box
                  component="button"
                  onClick={handleSignUpClick}
                  sx={{
                    backgroundColor: BRAND_COLOR,
                    color: "#fff",
                    border: "none",
                    px: 3,
                    py: 1,
                    borderRadius: "20px",
                    fontWeight: 500,
                    fontSize: 14,
                    cursor: "pointer",
                    transition: "background 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#005fa3",
                    },
                  }}
                >
                  Sign In
                </Box>
              )}

              {/* Show Search icon for both signed in and signed out */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 500,
                  fontSize: 16,
                  cursor: "pointer",
                  "&:hover": { color: BRAND_COLOR },
                }}
              >
                <span>Search</span>
                <FiSearch style={{ marginLeft: 6 }} />
              </Box>
            </Box>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton sx={{ color: "#555" }}>
                <FiSearch size={18} />
              </IconButton>
              <IconButton onClick={() => setMenuOpen(true)} sx={{ color: "#555" }}>
                <HiOutlineMenu size={26} />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Box sx={{ width: 280, p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: BRAND_COLOR }}>
              Menu
            </Typography>
            <IconButton onClick={() => setMenuOpen(false)}>
              <HiOutlineX size={26} />
            </IconButton>
          </Box>

          <List disablePadding>
            {MENU_ITEMS.map(({ label, path }, idx) => (
              <ListItem
                key={idx}
                button
                sx={{ mb: 1 }}
                onClick={() => {
                  router.push(path);
                  setMenuOpen(false);
                }}
              >
                <ListItemText primary={label} />
                <HiOutlineChevronRight />
              </ListItem>
            ))}

            <Box sx={{ mb: 1 }}>
              <ListItem button onClick={handleMobileMoreToggle}>
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
                <List disablePadding>
                  {MORE_DROPDOWN_ITEMS.map(({ label, path }, idx) => (
                    <ListItem
                      key={idx}
                      button
                      sx={{ pl: 4 }}
                      onClick={() => {
                        router.push(path);
                        setMenuOpen(false);
                      }}
                    >
                      <ListItemText primary={label} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </Box>
          </List>

          <Box sx={{ display: "flex", justifyContent: "space-between", gap: 1, mt: 2 }}>
            <Box
              onClick={() => router.push("/login")}
              sx={{
                flex: 1,
                textAlign: "center",
                py: 1.5,
                borderRadius: 1,
                backgroundColor: "#e6f3ff",
                cursor: "pointer",
              }}
            >
              Sign In
            </Box>
            {isSignedIn ? (
              <SignOutButton signOutCallback={() => router.push("/")}>
                <Box
                  sx={{
                    flex: 1,
                    textAlign: "center",
                    py: 1.5,
                    borderRadius: 1,
                    backgroundColor: BRAND_COLOR,
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Log Out
                </Box>
              </SignOutButton>
            ) : (
              <Box
                onClick={handleSignUpClick}
                sx={{
                  flex: 1,
                  textAlign: "center",
                  py: 1.5,
                  borderRadius: 1,
                  backgroundColor: BRAND_COLOR,
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Sign Up
              </Box>
            )}
          </Box>
        </Box>
      </Drawer>

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
          content: "";
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
