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
        fetch('http://localhost:8080/getPostByUserId',{
            mode: "no-cors",
            headers :{
               "Authorization" : token
            }  
        }).then((result) =>{
           console.log(result);
           
        });
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