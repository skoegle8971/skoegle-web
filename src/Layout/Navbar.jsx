// src/Layout/Navbar.jsx

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
  ListItemButton,
  ListItemText,
  Collapse,
  Paper,
  MenuList,
  MenuItem,
  InputBase,
  Divider,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { FiSearch } from "react-icons/fi";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineChevronRight,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
} from "react-icons/hi";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const BRAND_COLOR = "rgb(13, 13, 228)";

const MENU_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Services", path: "/services" },
  { label: "Support", path: "/support" },
  { label: "About Us", path: "/about" },
  {label:"cart", path:"/cart"}
];

const MORE_DROPDOWN_ITEMS = [
  { label: "Careers", path: "/careers" },
  { label: "Contact Us", path: "/contact" },
  { label: "Blog", path: "https://skoegle.blogspot.com/?m=1", external: true },
  { label: "Gallery", path: "/gallery" },
  { label: "Invite", path: "/invite" },
];

export default function ResponsiveNavbar() {
  const router = useRouter();
  const { isSignedIn } = useUser();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = !isMobile;

  const [desktopMoreOpen, setDesktopMoreOpen] = useState(false);
  const moreRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    function handleClickOutside(event) {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setDesktopMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchText.trim())}`);
      setSearchText("");
      setSearchOpen(false);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#fff", color: "#000", boxShadow: 3 }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
          {/* Left Side */}
          <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, md: 4 } }}>
            <Link href="/" style={{ textDecoration: "none", color: BRAND_COLOR }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                SKOEGLE
              </Typography>
            </Link>

            {isDesktop && (
              <Box component="nav" sx={{ display: "flex", gap: 3 }}>
                {MENU_ITEMS.map(({ label, path }) => (
                  <Button
                    key={path}
                    onClick={() => router.push(path)}
                    sx={{
                      color: "#000",
                      fontWeight: 500,
                      textTransform: "none",
                      position: "relative",
                      "&:hover": {
                        color: BRAND_COLOR,
                      },
                    }}
                  >
                    {label}
                  </Button>
                ))}

                {/* More Dropdown */}
                <Box ref={moreRef} sx={{ position: "relative" }}>
                  <Button
                    onClick={() => setDesktopMoreOpen((prev) => !prev)}
                    endIcon={
                      desktopMoreOpen ? (
                        <HiOutlineChevronUp size={18} />
                      ) : (
                        <HiOutlineChevronDown size={18} />
                      )
                    }
                    sx={{
                      color: "#000",
                      fontWeight: 500,
                      textTransform: "none",
                      "&:hover": { color: BRAND_COLOR },
                    }}
                  >
                    More
                  </Button>

                  <AnimatePresence>
                    {desktopMoreOpen && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          position: "absolute",
                          top: "100%",
                          right: 0,
                          marginTop: 8,
                          width: 200,
                          zIndex: 1300,
                          borderRadius: 8,
                          overflow: "hidden",
                        }}
                      >
                        <Paper elevation={4}>
                          <MenuList>
                            {MORE_DROPDOWN_ITEMS.map(({ label, path, external }) =>
                              external ? (
                                <MenuItem
                                  key={path}
                                  component="a"
                                  href={path}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  sx={{
                                    fontSize: "14px",
                                    "&:hover": {
                                      backgroundColor: "rgba(0, 119, 204, 0.08)",
                                      color: BRAND_COLOR,
                                    },
                                  }}
                                >
                                  {label}
                                </MenuItem>
                              ) : (
                                <MenuItem
                                  key={path}
                                  onClick={() => {
                                    router.push(path);
                                    setDesktopMoreOpen(false);
                                  }}
                                  sx={{
                                    fontSize: "14px",
                                    "&:hover": {
                                      backgroundColor: "rgba(0, 119, 204, 0.08)",
                                      color: BRAND_COLOR,
                                    },
                                  }}
                                >
                                  {label}
                                </MenuItem>
                              )
                            )}
                          </MenuList>
                        </Paper>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Box>
              </Box>
            )}
          </Box>

          {/* Right Side */}
          {isDesktop ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {searchOpen ? (
                <Box component="form" onSubmit={handleSearchSubmit}>
                  <InputBase
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search..."
                    sx={{
                      border: "1px solid #ccc",
                      borderRadius: 1,
                      px: 2,
                      py: 0.5,
                      minWidth: 250,
                      fontSize: 14,
                    }}
                    autoFocus
                  />
                </Box>
              ) : (
                <Box
                  onClick={() => setSearchOpen(true)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    color: "#555",
                    cursor: "pointer",
                    "&:hover": { color: BRAND_COLOR },
                  }}
                >
                  <FiSearch size={18} />
                  <Typography sx={{ fontSize: 14 }}>Search</Typography>
                </Box>
              )}

              {isSignedIn && (
                <Button
                  onClick={() => router.push("/orders")}
                  sx={{
                    textTransform: "none",
                    fontWeight: 500,
                    color: "#000",
                    "&:hover": { color: BRAND_COLOR },
                  }}
                >
                  Your Orders
                </Button>
              )}

              {isSignedIn ? (
                <UserButton />
              ) : (
                <Button
                  variant="contained"
                  onClick={() => router.push("/signin")}
                  sx={{
                    backgroundColor: BRAND_COLOR,
                    textTransform: "none",
                    fontWeight: 500,
                    "&:hover": { backgroundColor: "#005fa3" },
                  }}
                >
                  Sign In
                </Button>
              )}
            </Box>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton
                onClick={() => setSearchOpen((prev) => !prev)}
                sx={{ color: "#555" }}
              >
                <FiSearch size={20} />
              </IconButton>
              <IconButton onClick={() => setMenuOpen(true)} sx={{ color: "#555" }}>
                <HiOutlineMenu size={26} />
              </IconButton>
            </Box>
          )}
        </Toolbar>

        {!isDesktop && searchOpen && (
          <Box
            component="form"
            onSubmit={handleSearchSubmit}
            sx={{
              px: 2,
              py: 1,
              borderBottom: "1px solid #eee",
              backgroundColor: "#f9f9f9",
            }}
          >
            <InputBase
              fullWidth
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search..."
              sx={{
                px: 2,
                py: 0.5,
                border: "1px solid #ccc",
                borderRadius: 1,
                backgroundColor: "#fff",
              }}
              autoFocus
            />
          </Box>
        )}
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Box sx={{ width: 280, height: "100%", display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 2,
              borderBottom: "1px solid #eee",
            }}
          >
            <Typography variant="h6" sx={{ color: BRAND_COLOR, fontWeight: "bold" }}>
              Menu
            </Typography>
            <IconButton onClick={() => setMenuOpen(false)} sx={{ color: "#555" }}>
              <HiOutlineX size={24} />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
            <List disablePadding>
              {MENU_ITEMS.map(({ label, path }) => (
                <ListItemButton
                  key={path}
                  onClick={() => {
                    router.push(path);
                    setMenuOpen(false);
                  }}
                >
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{ fontSize: 16, fontWeight: 500 }}
                  />
                </ListItemButton>
              ))}

              {isSignedIn && (
                <ListItemButton
                  onClick={() => {
                    router.push("/orders");
                    setMenuOpen(false);
                  }}
                >
                  <ListItemText
                    primary="Your Orders"
                    primaryTypographyProps={{ fontSize: 16, fontWeight: 500 }}
                  />
                </ListItemButton>
              )}

              <ListItemButton onClick={() => setMobileMoreOpen((prev) => !prev)}>
                <ListItemText
                  primary="More"
                  primaryTypographyProps={{ fontSize: 16, fontWeight: 500 }}
                />
                {mobileMoreOpen ? (
                  <HiOutlineChevronDown size={18} />
                ) : (
                  <HiOutlineChevronRight size={18} />
                )}
              </ListItemButton>
              <Collapse in={mobileMoreOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {MORE_DROPDOWN_ITEMS.map(({ label, path, external }) => (
                    <ListItemButton
                      key={path}
                      sx={{ pl: 4 }}
                      component={external ? "a" : "button"}
                      href={external ? path : undefined}
                      onClick={
                        !external
                          ? () => {
                              router.push(path);
                              setMenuOpen(false);
                            }
                          : undefined
                      }
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                    >
                      <ListItemText
                        primary={label}
                        primaryTypographyProps={{ fontSize: 14 }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </List>
          </Box>

          <Divider />

          <Box sx={{ p: 2 }}>
            {isSignedIn ? (
              <UserButton />
            ) : (
              <Button
                variant="contained"
                fullWidth
                onClick={() => {
                  router.push("/signin");
                  setMenuOpen(false);
                }}
                sx={{
                  backgroundColor: BRAND_COLOR,
                  textTransform: "none",
                  fontWeight: 500,
                  "&:hover": { backgroundColor: "#005fa3" },
                }}
              >
                Sign In
              </Button>
            )}
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
