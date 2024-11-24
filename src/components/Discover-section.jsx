import { DiscoverImg } from "./Discover-img";
import "./discover.css";
export const Discover = () => {
  return (
    <div>
      <div className="Discover-container">
        <div className="DiscoverTitle">
          <h1>
            Discover the <span className="highlight">Benefits</span> <br /> of
            Renting with Us
          </h1>
        </div>
        <div className="Discover-content">
          <p>
            Beautifully curated rental homes that perfectly match your style and
            needs, making your <br /> search for the ideal living space
            effortless and enjoyable.
          </p>
        </div>
        <div className="nav">
          <nav>
            <ul>
              <li>
                <a href="#">Renters</a>
              </li>
              <li>
                <a href="#">Landlords/Property Managers</a>
              </li>
              <li>
                <a href="#">Agents</a>
              </li>
            </ul>
          </nav>
        </div>
        <DiscoverImg />
      </div>
    </div>
  );
};
