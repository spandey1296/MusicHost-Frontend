import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBCardFooter } from "mdbreact";
import '../style/footer.css';

const Footer = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5 text-center" style={{overflow:"hidden"}}>
        <MDBCardBody>
          <h2 className="h1-responsive header-font my-5">
            Our amazing team
          </h2>
          <p className="letter-space w-responsive mx-auto mb-5 ">
            Our company wants to make a difference by providing not only 
            excellent solutions and services to customers but also by creating 
            a great working environment that supports, respects and enriches our
            employees personal and professional lives and development. We care 
            about employee growth and happiness, and base our success on our 
            team’s full commitment, loyalty and open creative mind. We want 
            people to join us because of our spirit, our culture and our courage.
            We dare to be different in all aspects, and we strive to be a unique, preferred IT service provider and employer
          </p>
          <MDBRow className="p-3 d-flex justify-content-around mb-3">
            <MDBCol lg="6" md="6" className="mb-lg-0 mb-3  ">
              <MDBCard className="team-box shadow">
                <MDBCardBody >
              <img
                src="https://avatars.githubusercontent.com/u/77095499?v=4"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h3 className="header-font mt-4 mb-3">Riya Panhotra</h3>
              <p className="text-uppercase inner-font blue-text">Fullstack Developer</p>
              <p className=" letter-space">
                 Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci sed quia non numquam modi tempora eius.
              </p>
              </MDBCardBody>
              <MDBCardFooter>
                <a href="#!" className="p-2 ">
                  <MDBIcon fab icon="github" />
                </a>
                <a href="#!" className="p-2 ">
                  <MDBIcon fab icon="linkedin" />
                </a>
              </MDBCardFooter>
              </MDBCard>
            </MDBCol>

            <MDBCol lg="6" md="6" className="mb-lg-0 mb-3  ">
              <MDBCard className="team-box shadow">
                <MDBCardBody >
              <img
                src="https://avatars.githubusercontent.com/u/71067206?v=4"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h3 className="header-font mt-4 mb-3">Narayan Singla </h3>
              <p className="text-uppercase inner-font blue-text">Fullstack Developer</p>
              <p className="letter-space">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci sed quia non numquam modi tempora eius.
              </p>
              </MDBCardBody>
              <MDBCardFooter>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
              </ul>

              </MDBCardFooter>
              </MDBCard>
            </MDBCol>
            </MDBRow>

            <MDBRow className="p-3 d-flex justify-content-around mb-3">
            <MDBCol lg="6" md="6" className="mb-lg-0 mb-3  ">
              <MDBCard className="team-box shadow">
                <MDBCardBody >
              <img
                src="https://avatars.githubusercontent.com/u/50301680?v=4"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h3 className="header-font mt-4 mb-3">Shivant Pandey </h3>
              <p className="text-uppercase inner-font">Fullstack Developer</p>
              <p className="letter-space">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci sed quia non numquam modi tempora eius.
              </p>
              </MDBCardBody>
              <MDBCardFooter>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
              </ul>

              </MDBCardFooter>
              </MDBCard>
            </MDBCol>

            <MDBCol lg="6" md="6" className="mb-lg-0 mb-3  ">
              <MDBCard className="team-box shadow">
                <MDBCardBody >
              <img
                src="https://avatars.githubusercontent.com/u/61516051?v=4"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h3 className="header-font mt-4 mb-3">Ashish Kumar</h3>
              <p className="text-uppercase inner-font">Fullstack Developer</p>
              <p className="letter-space">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci sed quia non numquam modi tempora eius.
              </p>
              </MDBCardBody>
              <MDBCardFooter>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
              </ul>

              </MDBCardFooter>
              </MDBCard>
            </MDBCol>
            </MDBRow>

            <MDBRow className="d-flex justify-content-center mb-3">
            <MDBCol lg="6" md="6" className="mb-lg-0 mb-3  ">
              <MDBCard className="team-box shadow">
                <MDBCardBody >
              <img
                src="https://avatars.githubusercontent.com/u/49000263?v=4"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h3 className="header-font mt-4 mb-3">Gurucharan Maparu </h3>
              <p className="text-uppercase inner-font">Fullstack Developer</p>
              <p className="letter-space">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci sed quia non numquam modi tempora eius.
              </p>
              </MDBCardBody>
              <MDBCardFooter>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
              </ul>

              </MDBCardFooter>
              </MDBCard>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>
  );
}

export default Footer;