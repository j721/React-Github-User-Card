import React from 'react';
import axios from 'axios';
import UserCard from './UserCard';
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
        //fetch user data
        axios.get("https://api.github.com/users/j721")
        .then(response=>{
            console.log(response.data,"data was received")

                this.setState({
                    user: response.data
                })    
            })
        .catch(error=>{
            console.log(error, 'user data not received')
        })

        //Fetch User's followers
        axios.get("https://api.github.com/users/j721/followers")
        .then(response=>{
            console.log(response.data, 'followers data')
            this.setState({
                followers: response.data
            })
        })
        .catch(error=>{
            console.log(error, 'followers data not received')
        })
    }

    render(){
        return(
            <div className ="card">

                <div className ="userInfo">
                    <h2>username:{this.state.user.login}</h2> 
                    <h3>{this.state.user.html_url}</h3>
                    <img src ={this.state.user.avatar_url} alt="avatar of github user"></img>
                </div>

                <div className ="followersInfo">
                   {this.state.followers.map(follower=>
                       (<div className ="follower">
                            <img src ={follower.avatar_url} alt ="profile of followers"></img>
                            <h2>{follower.login}</h2>
                            <h3>{follower.html_url}</h3>
                       </div>)
                       )}
                </div>

            </div>
        )
    }

}

export default UserList; 