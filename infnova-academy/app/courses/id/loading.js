/**
 * Next.js automatically shows this while the detail page fetches data.
 * It wraps the page in a Suspense boundary — no extra config needed.
 */
import styles from "./loading.module.css";

export default function CourseDetailLoading() {
  return (
    <div className={styles.page}>
      <div className={`skeleton ${styles.backSkeleton}`} />

      <div className={styles.heroSkeleton}>
        <div className={styles.heroLeft}>
          <div className={`skeleton ${styles.h20}`} style={{ width: "100px" }} />
          <div className={`skeleton ${styles.h32}`} style={{ width: "80%" }} />
          <div className={`skeleton ${styles.h32}`} style={{ width: "55%" }} />
          <div className={`skeleton ${styles.h14}`} style={{ width: "90%" }} />
          <div className={`skeleton ${styles.h14}`} style={{ width: "70%" }} />
          <div style={{ display: "flex", gap: "16px", marginTop: "12px" }}>
            {[1,2,3,4].map((i) => (
              <div key={i} className={`skeleton ${styles.h14}`} style={{ width: "80px" }} />
            ))}
          </div>
        </div>
        <div className={`skeleton ${styles.heroThumb}`} />
      </div>

      <div className={styles.layout}>
        <div>
          {[1,2,3].map((box) => (
            <div key={box} className={styles.box}>
              <div className={`skeleton ${styles.h20}`} style={{ width: "160px", marginBottom: "16px" }} />
              {[1,2,3].map((line) => (
                <div key={line} className={`skeleton ${styles.h14}`}
                  style={{ width: line === 3 ? "60%" : "100%", marginBottom: "10px" }} />
              ))}
            </div>
          ))}
        </div>
        <div>
          <div className={styles.sidebarSkeleton}>
            <div className={`skeleton ${styles.h24}`} style={{ width: "120px" }} />
            <div className={`skeleton ${styles.h14}`} style={{ width: "80%" }} />
            <div className={`skeleton ${styles.enrollBtnSkeleton}`} />
            <div className={`skeleton ${styles.enrollBtnSkeleton}`} style={{ opacity: 0.6 }} />
          </div>
        </div>
      </div>
    </div>
  );
}