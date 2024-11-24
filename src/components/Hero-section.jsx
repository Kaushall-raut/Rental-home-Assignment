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
          <div className="nav">
            <nav>
              <ul>
                <li>
                  <a href="#">Goa</a>
                </li>
                <li>
                  <a href="#">Mumbai</a>
                </li>
                <li>
                  <a href="#">Kolkata</a>
                </li>
                <li>
                  <a href="#">Jaipur</a>
                </li>
                <li>
                  <a href="#">Banglore </a>
                </li>
                <li>
                  <a href="#">Kerala </a>
                </li>
                <li>
                  <a href="#">Pune </a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <input type="text" placeholder="Find your city" />
            <span className="icon">
              <CiSearch />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
