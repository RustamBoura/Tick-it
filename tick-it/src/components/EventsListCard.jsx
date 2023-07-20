import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


const EventCard = (props) => {
  const [venue, setVenue] = useState({
    name: 'loading', 
    events: [],})


  const { id } = useParams()
  useEffect(() => {
    
    const selectedVenue = props.allVenues.find((venue) => venue.id == id)
    setVenue(selectedVenue)
  }, [venue])

  return (
    <div className='container'>
      <h1>Events at {venue.name}</h1>
      <Card>
        <Card.Img 
          variant="top" 
          src={venue.photo_url} 
        />
        <Card.Body>
          <Card.Text>
            <strong>Location:</strong> {venue.address}
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <div className='gallery'>
        {venue.events.map((event) => (
          <Card
            key={event.id}
            className='card'
            style={{ width: '16rem', height: '255px' }}
            // onClick={() => handleVenueClick(event.id)}
          >
            <Card.Img
              variant='top'
              style={{ maxHeight: '140px', objectFit: 'cover' }}
              src={event.photo_url}
            />
            <Card.Body>
              <Card.Title >{event.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default EventCard
