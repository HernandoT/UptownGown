import NewCollections from "../../components/NewCollections/NewCollections";
import Slogan from "../../components/Slogan/Slogan";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="square"></div>
      <Slogan />
      <NewCollections />
    </div>
  );
};


export default Home;