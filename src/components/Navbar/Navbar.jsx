import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";

export default function Navbar() {
  console.log(window.location.href);
  let url = window.location.href.split("/");
  const [currentUrl] = useState(url); 
  console.log(currentUrl, currentUrl[currentUrl.length - 1]);
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link className={`${styles.logo} ${styles.link}`} to="/">
            Go Food
          </Link>
          {currentUrl[currentUrl.length - 1] == "login" ||
          currentUrl[currentUrl.length - 1] == "signup" ? (
            ""
          ) : (
            <Link className={`${styles.navbarTitle} ${styles.link}`} to="/">
              Home
            </Link>
          )}
          {currentUrl[currentUrl.length - 1] == "" ? (
            <Link
              className={`${styles.navbarTitle} ${styles.link}`}
              to="/login"
            >
              Login
            </Link>
          ) : (
            ""
          )}
          {currentUrl[currentUrl.length - 1] == "login" ? (
            <Link
              className={`${styles.navbarTitle} ${styles.link}`}
              to="/signup"
            >
              Signup
            </Link>
          ) : (
            <Link
              className={`${styles.navbarTitle} ${styles.link}`}
              to="/login"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
