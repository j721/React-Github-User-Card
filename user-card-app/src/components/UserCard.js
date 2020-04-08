import React from "react";
import { Card, CardImg, CardText, CardBody,CardTitle} from 'reactstrap';
import "../App.css";
import styled from "styled-components";

const StyledCard = styled.div`
    width: 60%;
    opacity: 0.9;
    background-color: pink;
    border-radius: 0.2em;
    margin: 7% 23%;
    border: 3px solid black; 
    position: relative; 
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    &:hover{
        background-color: white;
    }
`;

function UserCard (props){
    console.log(props.login);
    return(
        <StyledCard>
            <h3>{props.id}</h3>
                <img  src ={props.avatar_url} alt ={props.id}></img>
                
                    <h4>Github Handle</h4>
                    <p>{props.login}</p>
                    <p>{props.html_url}</p>
               

                </StyledCard>

    )
}

export default UserCard; 