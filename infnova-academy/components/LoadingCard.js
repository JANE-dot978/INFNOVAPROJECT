import styles from "./LoadingCard.module.css";

export default function LoadingCard() {
  return (
    <div className={styles.card}>
      <div className={`skeleton ${styles.image}`} />
      <div className={styles.body}>
        <div className={`skeleton ${styles.category}`} />
        <div className={`skeleton ${styles.title}`} />
        <div className={`skeleton ${styles.titleShort}`} />
        <div className={`skeleton ${styles.instructor}`} />
        <div className={styles.meta}>
          <div className={`skeleton ${styles.metaItem}`} />
          <div className={`skeleton ${styles.metaItem}`} />
          <div className={`skeleton ${styles.metaItem}`} />
        </div>
      </div>
    </div>
  );
}