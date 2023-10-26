import React from "react";
import Card from 'react-bootstrap/Card';


function CardItem(props) {
  return (
    <>
       <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className="py-2">{props.name}</Card.Title>
        <Card.Subtitle className=" mb-2 bg-info text-muted">{props.username}</Card.Subtitle>
        <Card.Text>Email: {props.email}</Card.Text>
        <Card.Text>{props.phone}</Card.Text>
        <Card.Link href={props.website}>{props.website}</Card.Link>
      </Card.Body>
    </Card>
    </>
  );
}

export default CardItem;
