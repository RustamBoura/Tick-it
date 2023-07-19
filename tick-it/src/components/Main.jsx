import { Route, Routes } from 'react-router-dom'
import AllVenues from './AllVenues'
import ConcertsEventList from './ConcertsEventList'
import SportsEventsList from './SportsEventList'
import TheatreEventList from './TheatreEventList'
import EventCard from './EventCard'
import { useState, useEffect } from 'react' 
import axios from 'axios'


const Main = () => {
  const [allVenues, setAllVenues] = useState([])
  const [allConcerts, setAllConcerts] = useState([])
  const [allSports, setAllSports] = useState([])
  const [allTheatre, setAllTheatre] = useState([])

  useEffect(() => {

    //    All Venues
    const getAllVenues = async () => {
      const response = await axios.get(`https://tick-it-api-production.up.railway.app/`)
      console.log(response)
      setAllVenues(response.data)
    }
    getAllVenues()

    //    All Concerts
    const getAllConcerts = async () => {
      const response = await axios.get(`https://tick-it-api-production.up.railway.app/events/search/type/concert/`)
      console.log(response)
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
            path='/:id'
            element={<EventCard 
              allVenues={allVenues}
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
            element={<EventCard 
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
            element={<EventCard 
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
            element={<EventCard 
              allTheatre={allTheatre}
            />}
          />
      </Routes>
  )
}

export default Main