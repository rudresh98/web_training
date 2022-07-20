import styles from "./Card.module.css";
import logo from "../../logo.svg";
const Card = (props) => {
  console.debug(props);
  return (
    <>
      <div className={styles.mainCard}>
        <div className={styles.cardHeading}>
          <span className={styles.customSpan}>{props.title}</span>
        </div>
        <div className={styles.cardText}>
          <div>
            <img
              src={props.img}
              className={styles.cardImg}
              alt="This is an logo"
            />
          </div>
          <p>{props.desc}</p>
          <div>
            <p>Price Rs {props.price}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
