import React from "react";
import styles from "../app/landingstyle.module.scss";
import Link from "next/link";
import Image from "next/image";

const Landing = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.contentContainer}>
        <nav className={styles.navbar}>
          <Link href="/">
            <Image
              src="/images/logos.png"
              alt="Navbar Logo"
              className={styles.logoImageNavbar}
              width={200}
              height={55}
              objectFit="contain"
            />
          </Link>
          <div className={styles.links}>
            <Link href="/about" className={styles.navbarLink}>
              about
            </Link>
            <Link href="/services" className={styles.navbarLink}>
              services
            </Link>
            <Link href="/contact" className={styles.navbarLink}>
              Contact
            </Link>
            <Link href="/auth/login" className={styles.navbarLink}>
              Login
            </Link>
          </div>
        </nav>

        <div className={styles.bigMessage}>
          <h1>
            Amlans LDRRM Offices goal is to keep the community safe by managing
            hazards & preparing for disasters.
          </h1>
          <p className={styles.smallText}>Climate Resilient & Disaster Ready</p>
          <button className={styles.downloadButton}>Download App</button>
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <Image
              src="/images/amlaners.png"
              alt="Amlan's LDRRM Office Logo"
              className={styles.logoImage}
              width={950}
              height={600}
              objectFit="contain"
            />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
