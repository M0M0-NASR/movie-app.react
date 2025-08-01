import React from 'react';
import styles from './Footer.module.css';
function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Movie App. All rights reserved.</p>
      <p>Made with ❤️ by MXN</p>
    </footer>
  );
}

export default Footer;
