import { Route, Routes } from 'react-router-dom'
import AllEventList from './AllEventList'
import ConcertsEventList from './ConcertsEventList'
import SportsEventsList from './SportsEventList'
import TheatreEventList from './TheatreEventList'
import EventCard from './EventCard'
import DataContext from './DataContext'
import { useState, useEffect } from 'react' 
import axios from 'axios'


const Main = () => {
  const [allEvents, setAllEvents] = useState([])
  const [allConcerts, setAllConcerts] = useState([])
  const [allSports, setAllSports] = useState([])
  const [allTheatre, setAllTheatre] = useState([])

  useEffect(() => {

    //    All Events
    const getAllEvents = async () => {
      const response = await axios.get(``)
      setAllEvents(response.data.results)
    }
    getAllEvents()

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
    <DataContext.Provider value={{allEvents, setAllEvents, allConcerts, setAllConcerts, allSports, setAllSports, allTheatre, setAllTheatre}}>
      <Routes>
        <>
          <Route
            path='/'
            element={<AllEventList />}
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
        </>
      </Routes>
    </DataContext.Provider>
  )
}

export default Main