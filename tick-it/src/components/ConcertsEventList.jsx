import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink, Routes, Route } from 'react-router-dom';
import SportsEventsList from './SportsEventList';
import TheatreEventList from './TheatreEventList';
import { useNavigate } from 'react-router-dom'


const ConcertsEventList = (props) => {
  const navigate = useNavigate()
  console.log(props)
  const handleConcertClick = (id) => {
    navigate(`/concerts/${id}`)
  }

  const { id } = useParams();
  useEffect(() => {
    const selectedEvent = props.allEvents.find((event) => event.id == id);
    setEvent(selectedEvent);
  }, [event]);

  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const handleToggle = (isOpen, event, metadata) => {
    if (metadata?.source === 'select') {
      event.preventDefault();
    } else {
      setShow(isOpen);
    }
  };

  const handleSelect = (eventKey, event) => {
    event.preventDefault(); // Prevent the default behavior of closing the dropdown
    setShow(false);
    setSelectedItem(eventKey);
    // Handle the selected eventKey
    console.log('Selected:', eventKey);
  };
  
    return (
      <div>
        
        <div className='container'>
          <h1>Concerts</h1>
          <div className='Dropdown'>
            <Dropdown show={show} onToggle={handleToggle} onSelect={handleSelect} >
            <Dropdown.Toggle className='sort-button' variant="primary" id="dropdown-basic">
              Sort by: 
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="All Venues">
                <NavLink to='/'>
                All Venues
                </NavLink>
              </Dropdown.Item>
              
              <Dropdown.Item eventKey="Concerts">
              <NavLink to='/concerts' >
                Concerts
              </NavLink>
              </Dropdown.Item>
              
              <Dropdown.Item eventKey="Sports">
              <NavLink to='/sports' >
                Sports
              </NavLink>
              </Dropdown.Item>
              <Dropdown.Item eventKey="Theatre">
              <NavLink to='/theatre' >
                Theatre
              </NavLink>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        

          <Routes>
            <Route path="/concerts" element={<ConcertsEventList />} />
            <Route path="/sports" element={<SportsEventsList />} />
            <Route path="/theatre" element={<TheatreEventList />} />
          </Routes>

          </div>
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
      </div>
    )
  }
  
  export default ConcertsEventList