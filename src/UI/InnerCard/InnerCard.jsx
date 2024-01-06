import styles from "./style.module.scss";

const innerCard = ({ children }) => {
  return <div className={styles.innerCard}>{children}</div>;
};

export default innerCard;
