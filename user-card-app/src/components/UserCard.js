import React from "react";
import { Card, CardImg, CardText, CardBody,CardTitle} from 'reactstrap';

function UserCard (props){
    console.log(props.login);
    return(
        <div className ="styled-cards">
            <Card key ={props.id}>
                <CardImg  src ={props.avatar_url} alt ={props.id}></CardImg>
                <CardBody>
                    <CardTitle>Github Handle</CardTitle>
                    <CardText>{props.login}</CardText>
                    <CardText>{props.html_url}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default UserCard; 