import styles from "./Card.module.css";
import logo from "../../logo.svg";
const Card = () => {
  return (
    <>
      <div className={styles.mainCard}>
        <div className={styles.cardHeading}>
          <span className={styles.customSpan}>1</span>
        </div>
        <div className={styles.cardText}>
          <div>
            <img src={logo} className={styles.cardImg} alt="This is an logo" />
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit,
            perferendis exercitationem nesciunt porro consectetur id
          </p>
        </div>
      </div>
    </>
  );
};
export default Card;
