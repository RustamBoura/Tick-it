import { Route, Routes } from 'react-router-dom'
import AllEventList from './AllEventList'
import ConcertsEventList from './ConcertsEventList'
import SportsEventsList from './SportsEventList'
import TheatreEventList from './TheatreEventList'
import DataContext from './DataContext'


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
    <Routes>
      <DataContext.Provider value={{allEvents, setAllEvents, allConcerts, setAllConcerts, allSports, setAllSports, allTheatre, setAllTheatre}}>
        <Route
          path='/'
          element={<AllEventList />}
        />
        <Route
          path='/concerts'
          element={<ConcertsEventList />}
        />
        <Route
          path='/sports'
          element={<SportsEventsList />}
        />
        <Route
          path='/theatre'
          element={<TheatreEventList />}
        />
      </DataContext.Provider>
    </Routes>
  )
}

export default Main