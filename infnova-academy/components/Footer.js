import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="white">
                <rect x="1" y="1" width="6" height="6" rx="1"/>
                <rect x="9" y="1" width="6" height="6" rx="1"/>
                <rect x="1" y="9" width="6" height="6" rx="1"/>
                <rect x="9" y="9" width="6" height="6" rx="1"/>
              </svg>
            </span>
            <span><span className={styles.orange}>INF</span>NOVA Academy</span>
          </div>
          <p className={styles.tagline}>
            Empowering learners worldwide with cutting-edge technology courses.
            Start your journey to success with expert-led training.
          </p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <Link href="/">Find Courses</Link>
          <Link href="/">Courses</Link>
          <Link href="/">Internships</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Support</h4>
          <Link href="/">Help Center</Link>
          <Link href="/">Terms of Service</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Sitemap</Link>
          <Link href="/">FAQ</Link>
        </div>
      </div>
      <div className={styles.bottom}>
        © {new Date().getFullYear()} INFNOVA Technologies. All rights reserved.
      </div>
    </footer>
  );
}