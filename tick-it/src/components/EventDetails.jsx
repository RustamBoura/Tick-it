import Card from 'react-bootstrap/Card'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const EventDetails = (props) => {
  const [event, setEvent] = useState({
    name: 'loading'})


  const { eventId } = useParams()
  useEffect(() => {
    
    const selectedEvent = props.allEvents.find((event) => event.id == eventId)
    setEvent(selectedEvent)
  }, [event])

  return (
    <div className='container'>
      <h1>Events at {event.name}</h1>
      <Card>
        <Card.Img 
          variant="top" 
          src={event.photo_url} 
        />
        <Card.Body>
          <Card.Text>
            <strong>Venue: </strong> {event.venue}
            <br></br>
            <strong>Date: </strong> {event.date}
            <br></br>
            <strong>Time: </strong> {event.time}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default EventDetails