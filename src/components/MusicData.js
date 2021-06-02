import React from 'react';
import {withRouter} from "react-router-dom";

class MusicData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: null
        }
    }
    data(){
        var token = "Bearer " + localStorage.getItem("jwt");
        console.log(token);
    //     fetch('/getPostByUserId',{
            
    //         credentials : "include",
    //         headers :{
    //            "Authorization" : token,
    //         }
 
    //     }).then((result) =>{
    //         console.log(result);
    //   }).then(err =>{
    //       console.log(err);
    //   });

      fetch('/getPostByUserId',{
            credentials : "include",
            headers :{
               "Authorization" : token,
            }
      })
  .then(function(response) {
    return response.text();
  }).then(function(data) {
    console.log(data); // this will be a string
  });

//    var oReq = new XMLHttpRequest();
// oReq.open("GET", "/getPostByUserId", true);
// oReq.responseType = "blob";

// oReq.onload = function(oEvent) {
//   var blob = oReq.response;
// };

//oReq.send();
           
    }
    
    render(){
        return(
            <div>
            <div>List</div>
            <button  onClick={() => this.data()}>Button</button>
            </div>
        );
    }
}

export default withRouter(MusicData);