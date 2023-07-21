import { Route, Routes } from 'react-router-dom'
import AllVenues from './AllVenues'
import ConcertsEventList from './ConcertsEventList'
import SportsEventsList from './SportsEventList'
import TheatreEventList from './TheatreEventList'
import EventsListCard from './EventsListCard'
import { useState, useEffect } from 'react' 
import axios from 'axios'
import ConcertDetails from './ConcertDetails'
import SportsDetail from './SportsDetail'
import TheatreDetail from './TheatreDetail'
import EventDetails from './EventDetails'


const Main = () => {
  const [allVenues, setAllVenues] = useState([])
  const [allEvents, setAllEvents] = useState([])

  useEffect(() => {

    //    All Venues
    const getAllVenues = async () => {
      const response = await axios.get(`https://tick-it-api-production.up.railway.app/`)
      setAllVenues(response.data)
    }
    getAllVenues()

    const getAllEvents = async () => {
      const response = await axios.get(`https://tick-it-api-production.up.railway.app/events`)
      console.log(response)
      setAllEvents(response.data)
    }
    getAllEvents()

  }, [])


  return (
      <Routes>
          <Route
            path='/'
            element={<AllVenues 
              allVenues={allVenues}
            />}
          />
          <Route
            path='/venues/:id'
            element={<EventsListCard 
              allVenues={allVenues}
            />}
          />
          <Route
            path='/venues/:id/:eventId'
            element={<EventDetails
              allEvents={allEvents}
            />}
          />
          <Route
            path='/concerts'
            element={<ConcertsEventList 
              allEvents={allEvents}
            />}
          />
          <Route
            path='/concerts/:id'
            element={<ConcertDetails 
              allEvents={allEvents}
            />}
          />
          <Route
            path='/concerts/:id/:eventId'
            element={<EventDetails
              allEvents={allEvents}
            />}
          />
          <Route
            path='/sports'
            element={<SportsEventsList 
              allEvents={allEvents}
            />}
          />
          <Route
            path='/sports/:id'
            element={<SportsDetail 
              allEvents={allEvents}
            />}
          />
          <Route
            path='/sports/:id/:eventId'
            element={<EventDetails
              allEvents={allEvents}
            />}
          />
          <Route
            path='/theatre'
            element={<TheatreEventList 
              allEvents={allEvents}
            />}
          />
          <Route
            path='/theatre/:id'
            element={<TheatreDetail 
              allEvents={allEvents}
            />}
          />
          <Route
            path='/theatre/:id/:eventId'
            element={<TheatreDetail 
              allEvents={allEvents}
            />}
          />
      </Routes>
  )
}

export default Main