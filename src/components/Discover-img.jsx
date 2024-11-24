import './hero.css';
import './discover.css';
export const DiscoverImg = () => {
  return (
    <div className="imgContainer">
      <div className="card-container">
        <img src="src\img\Frame 1410086001.png" alt="room image" />
        <p className='card'>Match with your <br/> ideal roommate</p>
      </div>
      <div className="card-container">
        <img src="src\img\Frame 1410086002.png" alt="room image" />
        <p className='card'> Discover activities <br/> around you</p>
      </div>
      <div className="card-container">
        <img src="src\img\Frame 1410086009.png" alt="room image" />
       
        <p className='card'>Seamless<br/>communication </p>
      </div>
    </div>
  );
};
