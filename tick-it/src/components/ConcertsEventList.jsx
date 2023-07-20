import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom'


const ConcertsEventList = (props) => {
  const navigate = useNavigate()
  console.log(props)
  const handleConcertClick = (id) => {
    navigate(`/concerts/${id}`)
  }

    return (
      <div className='container'>
        <h1>Concerts</h1>
        <div className='gallery'>
          {props.allConcerts.map((concert) => (
            <Card
              key={concert.id}
              className='card'
              style={{ width: '16rem', height: '235px' }}
              onClick={() => handleConcertClick(concert.id)}
            >
              <Card.Img
                variant='top'
                style={{ maxHeight: '140px', objectFit: 'cover' }}
                src={concert.photo_url}
              />
              <Card.Body className='card-body'>
                <Card.Title>{concert.name}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    )
  }
  
  export default ConcertsEventList