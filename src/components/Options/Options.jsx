/* eslint-disable react/prop-types */
import styles from "./Options.module.css";

const Options = ({ updateFeedback, handleReset, totalFeedback }) => {
  return (
    <div className={styles.buttons}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
};

export default Options;
