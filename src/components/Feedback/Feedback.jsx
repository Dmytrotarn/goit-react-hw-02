import styles from "./feedback.module.css";

export default function Feedback({
  good,
  neutral,
  bad,
  totalFeedback,
  positive,
}) {
  return (
    <div className={styles.feedback}>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive Feedback: {positive}%</p>
    </div>
  );
}
