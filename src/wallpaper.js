import './wallpaper.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ad from "./images/ad.png";

function Wallpaper() {
  
  return (
<div className = "wallpaper">
<div className="wallpaper-text">
    <div className="col-lg-6 col-md-6 col-sm-12 "  >
      <h1 className="font1">Learn How To Leverage Social Media</h1>
      <p className="font2"> Promote your brand and Communicate your vision the right way </p>
      <hr className="line"/>
      <div className = "timer">
      <span className = "timer-calendar">📅</span>
      <span className = "timer-text">8th Sept. 2022 at 6pm</span>
      <span className = "timer-clock">⏲️</span>
      <span className = "timer-time">1 hour</span>
      </div>
      <button type="button" className="btn btn-success btn-lg register">Register Now</button>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-12 ">
      <img className="ad" src={ad}></img>
    </div>
</div>
</div>
  );
}

export default Wallpaper;
