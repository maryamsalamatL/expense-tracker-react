import styles from "./TransAction.module.css";

const TransAction = ({ transAction }) => {
  return (
    <div className={styles.container}>
      {transAction.map((t) => {
        return (
          <div key={t.id} className={styles.li}>
            <p>{t.desc}</p>
            <span>{t.amount}</span>
            <span>{t.type}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TransAction;
