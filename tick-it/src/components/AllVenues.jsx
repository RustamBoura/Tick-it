import { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Home from './Home'

const AllVenues = (props) => {
  console.log(props)

  return (
    <div className='container'>
      <h1>Venues</h1>
      <div className='gallery'>
        {
          props.allVenues.map((event) => (
            <Card border='primary' key={event.id} className='card' style={{ width: '16rem', height: '225px' }}>
              <Card.Img variant="top" style={{ maxHeight: '120px', objectFit: 'cover' }} src={event.photo_url} />
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>
                  Date and Venue
                </Card.Text>
              </Card.Body>
            </Card>
          ))
        }
      </div>
    </div>
  )
}

export default AllVenues