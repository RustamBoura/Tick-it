import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink, Routes, Route } from 'react-router-dom';
import SportsEventsList from './SportsEventList';
import TheatreEventList from './TheatreEventList';


const ConcertsEventList = () => {
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
        <div className='Dropdown'>
          <Dropdown show={show} onToggle={handleToggle} onSelect={handleSelect} >
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {selectedItem}
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
          <Card className='card' style={{ width: '16rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1522158637959-30385a09e0da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
            <Card.Body>
              <Card.Title>Concert Title</Card.Title>
              <Card.Text>
                Date and Venue
              </Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </div>
        </div>
    )
  }
  
  export default ConcertsEventList