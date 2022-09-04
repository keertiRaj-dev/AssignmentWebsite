

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarApp from "./navbar.js";
import Wallpaper from "./wallpaper.js";
import Event from "./event.js";

function App() {
  return (
    <div>
<NavbarApp />
<Wallpaper />
<Event />
</div>
  );
}

export default App;
