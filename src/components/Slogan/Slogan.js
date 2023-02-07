import "./Slogan.css";
import img from "../../utils/assets/logo.jpg";

const Slogan = () => {
  return (
    <div className="slogan">
      <div className="text">
        <h1 className="title">Slogan here</h1>
        <h1 className="title">Lorem Ipsum</h1>
        <p>Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>

      <img src={img} alt="" className="img" />
    </div>
  );
};

export default Slogan;
