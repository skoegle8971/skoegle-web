"use client";
import { useEffect, useState } from "react";

export default function DetectDevTools() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

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

  return (
    <>
      {showMenu && (
        <ul
          style={{
            position: "absolute",
            top: menuPosition.y,
            left: menuPosition.x,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            listStyle: "none",
            padding: "10px",
            zIndex: 1000,
            width: "200px",
          }}
        >
          <li style={menuItemStyle} onClick={handleReload}>🔄 Reload</li>
          <li style={menuItemStyle} onClick={handleBack}>⬅️ Back</li>
        </ul>
      )}
    </>
  );
}

const menuItemStyle = {
  padding: "8px 12px",
  cursor: "pointer",
  borderRadius: "4px",
  userSelect: "none",
};
