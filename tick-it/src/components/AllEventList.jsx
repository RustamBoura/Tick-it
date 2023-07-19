import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const AllEventList = () => {

  return (
    <div className='gallery'>
      <Card className='card' style={{ width: '16rem' }}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1522158637959-30385a09e0da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
        <Card.Body>
          <Card.Title>Event Title</Card.Title>
          <Card.Text>
            Date and Venue
          </Card.Text>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AllEventList