import "./Card.css";
import logo from "../../logo.svg";
const Card = () => {
  return (
    <>
      <div className="main-card">
        <div className="card-heading">HEADING</div>
        <div className="card-text">
          <img src={logo} className="card-img" alt="" />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, perferendis exercitationem nesciunt porro consectetur id 
        </div>
      </div>
    </>
  );
};
export default Card;
