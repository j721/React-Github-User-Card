import React from 'react';
import axios from 'axios';
import "../App.css";

class UserList extends React.Component{
    constructor(){
        super();
        this.state ={
            user:{},
            followers: []
        }
    }


    componentDidMount(){
        axios.get("https://api.github.com/users/j721")
        .then(response=>{
            console.log(response.data,"data was received")
            this.setState({
                user: response.data
            })
            
        })
        .catch(error=>{
            console.log(error, 'data not received')
        })
    }

    render(){
        return(
            <div>

            </div>
        )
    }

}

export default UserList; 