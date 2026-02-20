"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <span className={styles.logoIcon}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="white">
            <rect x="1" y="1" width="6" height="6" rx="1"/>
            <rect x="9" y="1" width="6" height="6" rx="1"/>
            <rect x="1" y="9" width="6" height="6" rx="1"/>
            <rect x="9" y="9" width="6" height="6" rx="1"/>
          </svg>
        </span>
        <span><span className={styles.logoOrange}>INF</span>NOVA</span>
      </Link>

      <ul className={styles.links}>
        {[
          { href: "/", label: "Courses" },
          { href: "/about", label: "About" },
          { href: "/contact", label: "Contact" },
        ].map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`${styles.link} ${pathname === href ? styles.active : ""}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <button className="btn-outline">Sign In</button>
        <button className="btn-orange">Enroll Now</button>
      </div>
    </nav>
  );
}