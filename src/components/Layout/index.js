
import { Link } from "react-router-dom";
import "./index.css";

const Layout = () => {
  return (
    <>
      <nav className="header-container">
        <div className="logo-and-title-container">
          <img
            alt="react"
            className="logo"
            src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
          />
          <h1 className="title">React Js</h1>
        </div>
        <ul className="nav-items-list">
          <li className="link-item">
            <Link className="route-link" to="/">
              Home
            </Link>
          </li>
          <li className="link-item">
            <Link className="route-link" to="/about">
              About
            </Link>
          </li>
          <li className="link-item">
            <Link className="route-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
};

export default Layout;