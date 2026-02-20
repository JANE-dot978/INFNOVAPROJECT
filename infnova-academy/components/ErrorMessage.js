import styles from "./ErrorMessage.module.css";

export default function ErrorMessage({ message, retry }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      </div>
      <h3 className={styles.title}>Something went wrong</h3>
      <p className={styles.message}>
        {message ?? "We couldn't load the content. Please check your connection and try again."}
      </p>
      {retry && (
        <button className="btn-orange" onClick={retry}>Try Again</button>
      )}
    </div>
  );
}