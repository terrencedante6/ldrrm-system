import React from "react";
import Image from "next/image";
import styles from "../../app/about/about.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Image
        src="/images/logos.png"
        alt="Navbar Logo"
        className={styles.logoImageNavbar}
        width={200}
        height={55}
        objectFit="contain"
      />
      <div className={styles.links}>
        <a href="/about" className={styles.navbarLink}>
          about
        </a>
        <a href="/services" className={styles.navbarLink}>
          services
        </a>
        <a href="/contact" className={styles.navbarLink}>
          Contact
        </a>
        <a href="/auth/login" className={styles.navbarLink}>
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
