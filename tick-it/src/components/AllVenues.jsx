import { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Home from './Home'

const AllVenues = (props) => {
  console.log(props)

  return (
    <div className='gallery'>
      <h1>Venues</h1>
      <Home />
      {
        props.allVenues.map((event) => (
          <Card key={event.id} className='card' style={{ width: '16rem' }}>
            <Card.Img variant="top" src={event.photo_url} />
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
  )
}

export default AllVenues