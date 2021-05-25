import React from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";

const CodeLink = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(https://mdbcdn.b-cdn.net/img/Photos/Others/gradient1.jpg)` }}>
              <MDBCol className="py-5">
                <MDBCardTitle className="pt-3 m-5 font-bold"><h1>MusicHost </h1></MDBCardTitle>
                <p className="mx-5 mb-5">The goal is to build a distributed enterprise web
application which enables the users to upload media like videos. By using
this web application people can store their media files and access it
through the internet whenever they want to use it.
                </p>
                <a href="https://github.com/spandey1296/MusicHost-Frontend" className="p-2 fa-lg btn text-light border ">View project
                  <MDBIcon fab icon="clone" className="blue-text" /> 

                </a>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default CodeLink;