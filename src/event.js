import './event.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Event() {


  return (
<div className="event">
<h1  className="heading">Who is this event for?</h1>
<p className="para">Anyone who wants to learn the secrets of social media marketing</p>
<span className="student">Students</span>
<span className="founder">Startup founders</span>
<span className="pro">Professionals</span>
</div>

  );
}

export default Event;
