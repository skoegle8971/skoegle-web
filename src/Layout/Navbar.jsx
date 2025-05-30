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
  InputBase,
} from "@mui/material";
import { FiSearch } from "react-icons/fi";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineChevronRight,
  HiOutlineChevronDown,
} from "react-icons/hi";
import { useUser, SignOutButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

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
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
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
  const handleSignUpClick = () => !isSignedIn && router.push("/signin");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim() !== "") {
      router.push(`/search?q=${encodeURIComponent(searchText.trim())}`);
      setSearchText("");
      setSearchOpen(false);
    }
  };

  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000", boxShadow: 3 }}>
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
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

          {!isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {searchOpen ? (
                <form onSubmit={handleSearchSubmit}>
                  <InputBase
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search..."
                    sx={{
                      border: "1px solid #ccc",
                      borderRadius: 1,
                      px: 1.5,
                      py: 0.5,
                      minWidth: 200,
                      fontSize: 14,
                    }}
                    autoFocus
                  />
                </form>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 500,
                    fontSize: 16,
                    cursor: "pointer",
                    "&:hover": { color: BRAND_COLOR },
                  }}
                  onClick={() => setSearchOpen(true)}
                >
                  <span>Search</span>
                  <FiSearch style={{ marginLeft: 6 }} />
                </Box>
              )}

              {isSignedIn ? (
                <UserButton />
              ) : (
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
            </Box>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton onClick={() => setSearchOpen(!searchOpen)} sx={{ color: "#555" }}>
                <FiSearch size={18} />
              </IconButton>
              <IconButton onClick={() => setMenuOpen(true)} sx={{ color: "#555" }}>
                <HiOutlineMenu size={26} />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* SearchBar collapse on mobile */}
      {isMobile && searchOpen && (
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
              px: 1,
              py: 0.5,
              border: "1px solid #ccc",
              borderRadius: 1,
              backgroundColor: "#fff",
            }}
            autoFocus
          />
        </Box>
      )}

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
