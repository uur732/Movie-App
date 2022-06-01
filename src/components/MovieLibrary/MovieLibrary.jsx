import React from "react";
import { Card } from "react-bootstrap";

export default function MovieLibrary(props) {
  return (
    <div>
      <Card className="object">
        <Card.Body>
          <img src={props.movie.Poster}></img>
          <Card.Title className="title">{props.movie.Title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}