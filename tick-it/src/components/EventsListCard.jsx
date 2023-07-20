import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const EventCard = (props) => {
  return (
    <div className='container'>
      <h1>Events at ...</h1>
      <div className='gallery'>
        {props.allVenues.map((venue) => (
          <Card
            key={venue.id}
            className='card'
            style={{ width: '16rem', height: '225px' }}
            onClick={() => handleVenueClick(venue.id)}
          >
            <Card.Img
              variant='top'
              style={{ maxHeight: '140px', objectFit: 'cover' }}
              src={venue.photo_url}
            />
            <Card.Body>
              <Card.Title>{venue.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default EventCard
