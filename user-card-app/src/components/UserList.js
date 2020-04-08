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
        e.preventDefault();
        this.setState({
             userSearch: e.target.value   
        });
    }

    //Fetch data for user typed in

    //Fetch user Searched
        fetchUser = event =>{
            event.preventDefault();
            axios.get (`https://api.github.com/users/${this.state.userSearch}/followers`)
            .then(response=>{
                this.setState({followers:response.data.message})
                console.log(this.state)
            });
        }


    render(){
        return(
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
        );
    }
}

export default UserList; 