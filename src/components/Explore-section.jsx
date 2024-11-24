import "./explore.css";

export const ExploreSection = () => {
  return (
    <div className="explore-container">
      <div className="exploreContent">
        <div className="explore-title">
          <h1>
            Leading <span>Localities</span> to Explore
          </h1>
          <p>
            Explore a selection of the most desirable neighborhoods, where
            vibrant communities and <br />
            exceptional amenities come together to create your perfect living
            environment.
          </p>
        </div>
        <div className="explore-nav">
          <nav>
            <ul>
              <li>
                <a href="#" className="explore-anchor">
                  Popular
                </a>
              </li>
              <li>
                <a href="#" className="explore-anchor">
                  Investment Hotspots
                </a>
              </li>
              <li>
                <a href="#" className="explore-anchor">
                  Affordable
                </a>
              </li>
              <li>
                <a href="#" className="explore-anchor">
                  Great Lifestyle
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="info-location">
          <div className="infoContainer">
            <div className="info " style={{position:"relative"}}>
              <h6>Mira Road</h6> <span className="price">₹9.1K/sq.ft</span>
              <div  >
              <h6 className="green right">1.57%</h6>
            </div>
            </div>
          
            <div className="info">
              <h6>Andheri West</h6> <span className="price">₹28.1K/sq.ft</span>
              <div >
              <h6 className="red right">-4.8%</h6>
            </div>
            </div>
          
            <div className="info">
              <h6>Chembur</h6> <span className="price">₹20.9K/sq.ft</span>
            <div >
              <h6 className="green right">1.57%</h6>
            </div>
            </div>
            <div className="info">
              <h6>Borivali West</h6> <span className="price">₹22.3K/sq.ft</span>
            <div >
              <h6 className="red right"> -1.00%</h6>
            </div>
            </div>
            <div className="info">
              <h6>Malad west</h6> <span className="price">₹18.8K/sq.ft</span>
            <div >
              <h6 className="green right">1.57%</h6>
            </div>
            </div>
            <div className="info">
              <h6>Kandivali West</h6> <span className="price">₹20.4K/sq.ft</span>
            <div >
              <h6 className="green right">1.57%</h6>
            </div>
            </div>
            
          </div>
     
            {/* <div className="border"></div> */}
          <div className="Locationimg">
            <img src="src\img\Frame 1410085965.png" alt="location" />
          </div>
        </div>
      </div>
    </div>
  );
};
