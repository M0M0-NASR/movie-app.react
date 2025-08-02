import MyNavbar from "../MyNavbar/MyNavbar";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>{import.meta.env.VITE_APP_NAME} </div>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="login-logout">
        <button className="btn btn-primary">Login</button>
        <button className="btn btn-secondary">Sign Up</button>

        <button className="btn btn-secondary">Logout</button>
      </div>
    </header>
  );
}

export default Header;
