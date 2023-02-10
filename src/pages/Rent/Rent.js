import "./Rent.css";
import Footer from "../../components/Footer/Footer";

const Rent = () => {
  return (
    <div className="rent">
      <div className="content">
        <div className="filter">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>
              <b>Filters</b>
            </p>
            <p style={{ alignSelf: "flexEnd" }}>Clear All</p>
          </div>
          <hr />
          <div>
            <p>
              <b>Colors</b>
            </p>
            <div className="colorsContainer">
              {Array.from({ length: 10 }).map((item, index) => (
                <div className="colors" />
              ))}
            </div>
          </div>
          <hr />
        </div>
        <div className="filterItems">Filter   Items</div>
      </div>
      <Footer />
    </div>
  );
};

export default Rent;
