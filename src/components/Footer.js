
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";

const Footer = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Our Amazing Team
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
          Our company wants to make a difference by providing not only excellent solutions and services to customers but also by creating a great working environment that supports, respects and enriches our employees personal and professional lives and development. We care about employee growth and happiness, and base our success on our team’s full commitment, loyalty and open creative mind. We want people to join us because of our spirit, our culture and our courage. We dare to be different in all aspects, and we strive to be a unique, preferred IT service provider and employer
          </p>
          <MDBRow className="ml-5">
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                src="https://avatars.githubusercontent.com/u/77095499?v=4"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Riya Panhotra </h5>
              <p className="text-uppercase blue-text">Full Stack Developer</p>
              <p className="grey-text">
              Things aren’t always #000000 and #FFFFFF
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="2" md="6" className="mb-lg-0 mb-5">
              <img
                src="https://avatars.githubusercontent.com/u/71067206?v=4"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Narayan Singla</h5>
              <p className="text-uppercase blue-text">Full Stack Developer</p>
              <p className="grey-text">
              Measuring programming progress by lines of code is like measuring aircraft building progress by weight.

              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="2" md="6" className="mb-lg-0 mb-5">
              <img
                src="https://avatars.githubusercontent.com/u/50301680?v=4"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Shivant Pandey</h5>
              <p className="text-uppercase blue-text">Full Stack Developer</p>
              <p className="grey-text">
              Everybody in this country should learn to program a computer, because it teaches you how to think
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="2" md="6" className="mb-lg-0 mb-5">
              <img
                src="https://avatars.githubusercontent.com/u/49000263?v=4"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Gurucharan Maparu</h5>
              <p className="text-uppercase blue-text">Full Stack Developer</p>
              <p className="grey-text">
              If at first you don’t succeed; call it version 1.0
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
              </ul>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                src="https://avatars.githubusercontent.com/u/61516051?v=4"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Ashish</h5>
              <p className="text-uppercase blue-text">Full Stack Developer</p>
              <p className="grey-text">
              You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity.

              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>
  );
}

export default Footer;