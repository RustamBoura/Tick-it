import { Route, Routes } from 'react-router-dom'
import AllVenues from './AllVenues'
import ConcertsEventList from './ConcertsEventList'
import SportsEventsList from './SportsEventList'
import TheatreEventList from './TheatreEventList'
import EventsListCard from './EventsListCard'
import { useState, useEffect } from 'react' 
import axios from 'axios'
import ConcertDetail from './ConcertDetail'
import SportsDetail from './SportsDetail'
import TheatreDetail from './TheatreDetail'
import EventDetails from './EventDetails'


const Main = () => {
  const [allVenues, setAllVenues] = useState([])
  const [allConcerts, setAllConcerts] = useState([])
  const [allSports, setAllSports] = useState([])
  const [allTheatre, setAllTheatre] = useState([])
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

    //    All Concerts
    const getAllConcerts = async () => {
      const response = await axios.get(`https://tick-it-api-production.up.railway.app/events/search/type/concert/`)
      setAllConcerts(response.data)
    }
    getAllConcerts()

    //    All Sports
    const getAllSports = async () => {
      const response = await axios.get(`https://tick-it-api-production.up.railway.app/events/search/type/sports/`)
      setAllSports(response.data)
    }
    getAllSports()

    //    All Theatre
    const getAllTheatre = async () => {
      const response = await axios.get(`https://tick-it-api-production.up.railway.app/events/search/type/theatre/`)
      setAllTheatre(response.data)
    }
    getAllTheatre()


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
              allConcerts={allConcerts}
            />}
          />
          <Route
            path='/concerts/:id'
            element={<ConcertDetail 
              allConcerts={allConcerts}
            />}
          />
          <Route
            path='/sports'
            element={<SportsEventsList 
              allSports={allSports}
            />}
          />
          <Route
            path='/sports/:id'
            element={<SportsDetail 
              allSports={allSports}
            />}
          />
          <Route
            path='/theatre'
            element={<TheatreEventList 
              allTheatre={allTheatre}
            />}
          />
          <Route
            path='/theatre/:id'
            element={<TheatreDetail 
              allTheatre={allTheatre}
            />}
          />
      </Routes>
  )
}

export default Main