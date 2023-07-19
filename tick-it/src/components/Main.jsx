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

    //    All Events
    const getAllVenues = async () => {
      const response = await axios.get(`https://tick-it-api-production.up.railway.app/`)
      console.log(response)
      setAllVenues(response.data)
    }
    getAllVenues()

    //    All Concerts
    const getAllConcerts = async () => {
      const response = await axios.get(``)
      setAllConcerts(response.data.results)
    }
    getAllConcerts()

    //    All Sports
    const getAllSports = async () => {
      const response = await axios.get(``)
      setAllSports(response.data.results)
    }
    getAllSports()

    //    All Theatre
    const getAllTheatre = async () => {
      const response = await axios.get(``)
      setAllTheatre(response.data.results)
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
            element={<EventCard />}
          />
          <Route
            path='/concerts'
            element={<ConcertsEventList />}
          />
          <Route
            path='/concerts/:id'
            element={<EventCard />}
          />
          <Route
            path='/sports'
            element={<SportsEventsList />}
          />
          <Route
            path='/sports/:id'
            element={<EventCard />}
          />
          <Route
            path='/theatre'
            element={<TheatreEventList />}
          />
          <Route
            path='/theatre/:id'
            element={<EventCard />}
          />
      </Routes>
  )
}

export default Main