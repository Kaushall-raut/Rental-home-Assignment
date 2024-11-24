import { FaStar } from "react-icons/fa";
import './hero.css';
export const HeroImage=()=>{
    return <div className="imgContainer">
       
            <div  className="seperator">
                <img src="src\img\image 1509.png" alt="room image"  />
                <div  className="imgContent"><p className="location">Flat In North Goa</p>
                <span  className="rating"><FaStar/><p style={{display:"inline"}}>4.94(31)</p></span>
                </div>
                <div>
                    <p style={{fontWeight:"400" ,marginRight:"10px",color:"#666666"}}>Goan Studio Near Vagator Beach </p>
                    <p style={{fontWeight:"400" ,marginRight:"10px",color:"#666666"}}>2 beds</p>
                    <p><strike style={{fontWeight:"400" ,marginRight:"10px",color:"#666666"}}>₹48,186</strike>₹43,788 <span style={{color:"#222222"}}>month</span></p>
                </div>
            </div>
            <div >
                <img src="src\img\image 1510.png" alt="room image"  />
                <div className="imgContent"><p className="location">Flat In Arambol </p>
                <span className="rating"><FaStar/><p style={{display:"inline"}}>4.94(31)</p></span>
                </div>
                <div>
                    <p style={{fontWeight:"400" ,marginRight:"10px",color:"#666666"}}> Studio Apartment </p>
                    <p style={{fontWeight:"400" ,marginRight:"10px",color:"#666666"}}>1 beds</p>
                    <p><strike style={{fontWeight:"400" ,marginRight:"10px",color:"#666666"}}>₹51,592</strike>₹43,788 <span style={{color:"#222222"}}>month</span></p>
                </div>
              
            </div>
            <div >
                <img src="src\img\image 1511.png" alt="room image"  />
                <div className="imgContent"><p className="location">Flat In Stay In Siolim</p>
                <span className="rating"><FaStar/><p style={{display:"inline"}}>4.94(31)</p></span>
                </div>
                <div>
                    <p style={{fontWeight:"400" ,marginRight:"10px",color:"#666666"}}>Jenny's home </p>
                    <p style={{fontWeight:"400" ,marginRight:"10px",color:"#666666"}}>2 beds</p>
                    <p><strike style={{fontWeight:"400" ,marginRight:"10px",color:"#666666"}}>₹35,976</strike>₹26,968 <span style={{color:"#222222"}}>month</span></p>
                </div>
            </div>
       
    </div>
}