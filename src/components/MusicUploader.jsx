import React, { Component } from "react";
import "tachyons";
import '../style/musicuploader.css';
export default class MusicUploader extends Component {
  render() {
    return (
      <div className="container-fluid column musicuploader">
        <h2>Upload Your Music Here</h2>
        <div className="container-sm shadow-1 br4 mx-auto pa4">

          <div class="fontuploader">
          <input type="file" className="f6 br4 pa2 ba bg-transparent w-100 shadow-1"
              />
          </div>

          <br />

          <div class="fontuploader">
          <input type="text" className="f6 br4 pa2 ba bg-transparent w-100 shadow-1"
            placeholder="Enter Music Title" />
          </div>
          <br />

          <div class="fontuploader">
          <textarea
              className="form-control bg-transparent w-100 shadow-1"
              id="exampleFormControlTextarea1"
              rows="3"
              maxLength="500"
              placeholder="Enter Description Here"
            ></textarea>
          </div>
          <br />

          <button className="btn btn-primary btn-lg grow"> ADD </button>
        </div>
      </div>
    );
  }
}
