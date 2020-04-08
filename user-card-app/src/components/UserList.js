import React from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import "../App.css";
import styled from 'styled-components';

const Wrapper =styled.div`
display:flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center; 
`;

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
                    user: response.data,
                    userSearch: ""
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

//Attempting Stretch 

    //userSearch
    handleChange = e =>{
        this.setState({
             userSearch: e.target.value   
        });
    }
 
    //Fetch userFollowers Searched
    fetchUserFollowers = e =>{
        // e.preventDefault();        
            axios.get (`https://api.github.com/users/${this.state.userSearch}/followers`)
            .then(response=>{
                this.setState({followers:response.data})
                console.log(this.state)
            });
        }
    
    //fetchUser
        fetchUser = event =>{
            // event.prevenDefault();
            axios.get(`https://api.github.com/users/${this.state.userSearch}`)
            .then(response=>{
                this.setState({user:response.data})
                console.log(this.state, "searched user state")
            })
        }

    //Fetch data for user typed in
        componentDidUpdate(prevProps, prevState){
            console.log("componentDidUpdate()");
            if(this.state.userSearch === ""){
                  this.fetchUserFollowers(); 
                  this.fetchUser();
                }
            }

    render(){
        return(
            <div className ="container">
            <div className ="form">
                <h2>User Search</h2>
                <input
                type ="text"
                value ={this.state.userSearch}
                onChange ={this.handleChange}
                />
                <button onClick ={this.fetchUser}>Find User</button>
            </div>

            <Wrapper>
                <div className ="userInfo">
                    {<UserCard
                        login ={this.state.user.login}
                        html_url={this.state.user.html_url}
                        avatar_url ={this.state.user.avatar_url}
                    />
                    }
                </div>

                <div className ="followersInfo">
                   {this.state.followers.map(follower=>
                      (<UserCard
                            avatar_url ={follower.avatar_url} 
                           login ={follower.login}
                            html_url={follower.html_url}
                            />
                            ))}
                    </div>
         </Wrapper>
         </div>
        );
    }
}

export default UserList; 