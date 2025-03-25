import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const ShowData = (props) => {
    return (
       <ListGroup>
        <ListGroupItem key={props.id}>{props.title}</ListGroupItem>
       </ListGroup>
    );
};

export default ShowData;