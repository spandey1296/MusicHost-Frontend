import { Link} from "react-router-dom";
import "../style/Navbar.css";
import { Form,Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap"


function Navbar(props) {
  return (
    <>
      
      <nav className="navbar navbar-expand-lg navbar-dark mt-0 sticky-top" >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            MusicHost
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Signup">
                  SignUp
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link" to="/music">
                  MusicData
                </Link>
              </li>
            </ul>
            <Form inline>
            <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
            <Button type="submit">Submit</Button>
            </Form>
          </div>
       </div>  
         
      </nav>
    </>
  );
}

export default Navbar;
