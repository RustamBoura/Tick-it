import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Comments from "./Comments";

const EventDetails = (props) => {
  const [event, setEvent] = useState({});

  const { id } = useParams();
  useEffect(() => {
    const selectedEvent = props.allEvents.find((event) => event.id == id);
    setEvent(selectedEvent);
  }, [props]);

  return (
    <div className="container">
      <h1>Events at {event?.name}</h1>
      <Card>
        <Card.Img
          variant="top"
          src={event?.photo_url}
          className="w-50 mx-auto"
        />
        <Card.Body>
          <Card.Text>
            <strong>Venue: </strong> {event?.venue_name}
            <br></br>
            <strong>Date: </strong> {event?.date}
            <br></br>
            <strong>Time: </strong> {event?.time}
          </Card.Text>
        </Card.Body>
      </Card>
      <Comments id={id} />
    </div>
  );
};

export default EventDetails;
