import { useState, useEffect } from "react";
import "./Header.scss";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <div className="logo">
        LIN<span>Z</span>A
      </div>

      <nav className={menuOpen ? "nav nav-open" : "nav"}>
        <ul>
          <li>
            <a href="#galereya" onClick={() => setMenuOpen(false)}>
              Galereya
            </a>
          </li>
          <li>
            <a href="#narxlar" onClick={() => setMenuOpen(false)}>
              Narxlar
            </a>
          </li>
          <li>
            <a href="#bron" onClick={() => setMenuOpen(false)}>
              Bron qilish
            </a>
          </li>
        </ul>
      </nav>

      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;
