import styles from "./footer.module.css";
export default function Footer({ completedTodos,TodoTotal }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todos:{completedTodos}</span>
      <span className={styles.item}>Todos Total:{TodoTotal}</span>
    </div>
  );
}
