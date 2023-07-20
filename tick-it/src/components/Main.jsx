import { Route, Routes } from 'react-router-dom'
import AllVenues from './AllVenues'
import ConcertsEventList from './ConcertsEventList'
import SportsEventsList from './SportsEventList'
import TheatreEventList from './TheatreEventList'
import EventsListCard from './EventsListCard'
import { useState, useEffect } from 'react' 
import axios from 'axios'
import { useParams } from 'react-router-dom'
import EventDetail from './EventDetail'


const Main = () => {
  const [allVenues, setAllVenues] = useState([])
  const [allConcerts, setAllConcerts] = useState([])
  const [allSports, setAllSports] = useState([])
  const [allTheatre, setAllTheatre] = useState([])
  const [eventDetails, setEventDetails] = useState('')
  let { id } = useParams()

  useEffect(() => {
    const getEventDetails = async () => {
      const response = await axios.get(`https://tick-it-api-production.up.railway.app/events/${id}`)
      console.log(response)
      setEventDetails(response.data)
    }
    getEventDetails()
  })

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
            path='/venues/:id'
            element={<EventsListCard 
              allVenues={allVenues}
            />}
          />
          {/* <Route
            path='/events/:id'
            element={<EventsListCard 
              allVenues={allVenues}
            />}
          /> */}
          <Route
            path='/concerts'
            element={<ConcertsEventList 
              allConcerts={allConcerts}
            />}
          />
          <Route
            path='/concerts/:id'
            element={<EventDetail 
              eventDetails={eventDetails}
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
            element={<EventDetail 
              eventDetails={eventDetails}
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
            element={<EventDetail 
              eventDetails={eventDetails}
            />}
          />
      </Routes>
  )
}

export default Main