// import React, { useState } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const [open, setOpen] = useState(false);

//   const handleToggle = (event, metadata) => {
//     if (metadata.source === 'select') {
//       // Prevent closing the dropdown menu when a dropdown item is clicked
//       event.preventDefault();
//     }

//     setOpen(!Open);
//   };

//   return (
//      <Dropdown onToggle={handleToggle} show={open}>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//         All Events
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item as={Link} to="/concerts">
//           Concerts
//         </Dropdown.Item>
//         <Dropdown.Item as={Link} to="/sports">
//           Sports
//         </Dropdown.Item>
//         <Dropdown.Item as={Link} to="/theatre">
//           Theatre
//         </Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   )
// }

// export default Home

// import React, { useState } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
// import { Link, Route, Switch } from 'react-router-dom';
// import AllEventList from './AllEventList'
// import ConcertsEventList from './ConcertsEventList'
// import SportsEventsList from './SportsEventList'
// import TheatreEventList from './TheatreEventList'

// const Home = () => {
//   const [show, setShow] = useState(false);
//   const [selectedItem, setSelectedItem] = useState('All Events');

//   const handleToggle = (isOpen, event, metadata) => {
//     if (metadata?.source === 'select') {
//       event.preventDefault();
//     } else {
//       setShow(isOpen);
//     }
//   };

//   const handleSelect = (eventKey, event) => {
//     event.preventDefault(); // Prevent the default behavior of closing the dropdown
//     setShow(false);
//     setSelectedItem(eventKey);
//     // Handle the selected eventKey
//     console.log('Selected:', eventKey);
//   };
  

//   return (
//     <div>

//       <Dropdown show={show} onToggle={handleToggle} onSelect={handleSelect}>
//         <Dropdown.Toggle variant="success" id="dropdown-basic">
//           {selectedItem}
//         </Dropdown.Toggle>

//         <Dropdown.Menu>
//           <Dropdown.Item as={Link} to="/AllEventList" eventKey="All Events">All Events</Dropdown.Item>
//           <Dropdown.Item as={Link} to="/ConcertsEventList" eventKey="Concerts">Concerts</Dropdown.Item>
//           <Dropdown.Item as={Link} to="/SportsEventList" eventKey="Sports">Sports</Dropdown.Item>
//           <Dropdown.Item as={Link} to="/TheatreEventList" eventKey="Theatre">Theatre</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>

//       <Switch>
//         <Route exact path="/" component={AllEventList} />
//         <Route path="/concerts" component={ConcertsEventList} />
//         <Route path="/sports" component={SportsEventsList} />
//         <Route path="/theatre" component={TheatreEventList} />
//       </Switch>
//     </div>
//   );
// };

// export default Home;



import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, Routes, Route } from 'react-router-dom';
import AllVenues from './AllVenues';
import ConcertsEventList from './ConcertsEventList';
import SportsEventsList from './SportsEventList';
import TheatreEventList from './TheatreEventList';

const Home = () => {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState('All Events');

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
      <Dropdown show={show} onToggle={handleToggle} onSelect={handleSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedItem}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/" eventKey="All Venues">
            All Venues
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/concerts" eventKey="Concerts">
            Concerts
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/sports" eventKey="Sports">
            Sports
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/theatre" eventKey="Theatre">
            Theatre
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Routes>
        <Route path="/concerts" element={<ConcertsEventList />} />
        <Route path="/sports" element={<SportsEventsList />} />
        <Route path="/theatre" element={<TheatreEventList />} />
      </Routes>

    </div>
  );
};

export default Home;

