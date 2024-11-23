import { CiSearch } from "react-icons/ci";
import "./hero.css";
export const Herosection = () => {
  return (
    <div className="container">
      <div>
        <div className="title">
          <div>
            <h1>
              Find Your Perfect <span>Rental Home</span>
            </h1>
          </div>
          <div className="text">
            <p>
              Beautifully curated rental homes that perfectly match your style
              and needs, making your <br></br>search for the ideal living space
              effortless and enjoyable.
            </p>
          </div>
        </div>
        <div className="navbar">
          <input type="text" placeholder="Find your city" />
          <span className="icon">
          <CiSearch />
          </span>
        </div>
      </div>
    </div>
  );
};
