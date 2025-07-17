"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function DetectDevTools() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [canForward, setCanForward] = useState(true); // forward control
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_MY_ENV !== "production") return;

    let intervalId;

    const handleDevToolsOpen = () => {
      console.clear();
      setTimeout(() => console.clear(), 5000);
      window.location.href = "https://www.google.com/search?q=skoegle";
    };

    const isDevToolsOpen = () => {
      const before = performance.now();
      debugger;
      const after = performance.now();
      return after - before > 160;
    };

    const detectOnLoad = () => {
      if (isDevToolsOpen()) handleDevToolsOpen();
    };

    const detectDuringUse = () => {
      if (isDevToolsOpen()) handleDevToolsOpen();
    };

    const blockShortcuts = (e) => {
      const key = e.key.toLowerCase();
      if (
        key === "f12" ||
        (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(key)) ||
        (e.ctrlKey && ["u", "p", "s", "c", "v", "x", "a"].includes(key)) ||
        (e.metaKey && ["c", "v", "x", "p", "s"].includes(key))
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    const blockCopyPaste = (e) => e.preventDefault();

    const handleContextMenu = (e) => {
      e.preventDefault();
      setMenuPosition({ x: e.pageX, y: e.pageY });
      setShowMenu(true);

      // Check if user can go forward (approximate check)
      setCanForward(window.history.length > 1);
    };

    const handleClick = () => {
      setTimeout(() => setShowMenu(false), 100);
    };

    const blockPrint = () => {
      window.stop();
      window.location.reload();
    };

    const blockScreenshot = () => {
      document.body.style.filter = "blur(8px)";
      setTimeout(() => {
        document.body.style.filter = "";
      }, 100);
    };

    detectOnLoad();
    intervalId = setInterval(detectDuringUse, 1000);

    document.addEventListener("keydown", blockShortcuts);
    document.addEventListener("copy", blockCopyPaste);
    document.addEventListener("cut", blockCopyPaste);
    document.addEventListener("paste", blockCopyPaste);
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("click", handleClick);
    window.addEventListener("beforeprint", blockPrint);

    window.addEventListener("keyup", (e) => {
      if (e.key === "PrintScreen") blockScreenshot();
    });

    document.body.style.userSelect = "none";
    document.body.style.webkitUserSelect = "none";
    document.body.style.MozUserSelect = "none";
    document.body.style.msUserSelect = "none";

    return () => {
      clearInterval(intervalId);
      document.removeEventListener("keydown", blockShortcuts);
      document.removeEventListener("copy", blockCopyPaste);
      document.removeEventListener("cut", blockCopyPaste);
      document.removeEventListener("paste", blockCopyPaste);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("click", handleClick);
      window.removeEventListener("beforeprint", blockPrint);
      document.body.style.userSelect = "";
    };
  }, []);

  const handleReload = () => window.location.reload();
  const handleBack = () => window.history.back();
  const handleForward = () => window.history.forward();

  const navigate = (path) => {
    if (pathname !== path) {
      router.push(path);
    }
    setShowMenu(false);
  };

  const isHome = pathname === "/";
  const isProducts = pathname === "/pages/products";

  return (
    <>
      {showMenu && (
        <ul
          style={{
            position: "absolute",
            top: menuPosition.y,
            left: menuPosition.x,
            backgroundColor: "#f9f9f9",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxShadow: "2px 2px 6px rgba(0,0,0,0.1)",
            listStyle: "none",
            padding: "4px 0",
            margin: 0,
            zIndex: 10000,
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontSize: "13px",
            width: "200px",
            cursor: "default",
          }}
        >
          {!isHome && (
            <li style={menuItemStyle} onClick={() => navigate("/")}>Home</li>
          )}
          <li style={menuItemStyle} onClick={handleReload}>Reload</li>
          <li style={menuItemStyle} onClick={handleBack}>Back</li>
          {canForward && (
            <li style={menuItemStyle} onClick={handleForward}>Forward</li>
          )}
          {!isProducts && (
            <li style={menuItemStyle} onClick={() => navigate("/pages/products")}>Products</li>
          )}
          <li style={menuItemStyle} onClick={() => navigate("/vmarg")}>Track at vmarg</li>
          {/* <li style={menuItemStyle} onClick={() => navigate("/dmarg")}>Sales - dmarg</li> */}
          <li style={menuItemStyle} onClick={() => navigate("/support")}>Sales and Support</li>
        </ul>
      )}
    </>
  );
}

const menuItemStyle = {
  padding: "6px 12px",
  cursor: "pointer",
  borderRadius: "3px",
  userSelect: "none",
  transition: "background 0.2s",
  margin: "0 4px",
  whiteSpace: "nowrap",
  hover: {
    backgroundColor: "#eaeaea",
  },
};
