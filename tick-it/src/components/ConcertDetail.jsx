import { useParams } from 'react-router-dom'

const ConcertDetail = (props) => {
    console.log(props.allConcerts)
    let { id } = useParams()
    let selectedEvent = props.allConcerts[id]
    console.log(selectedEvent)
   return (
    <section className="event-details">
        <img src={selectedEvent.photo_url}/>
        <h3>{selectedEvent.name}</h3>
        <p><strong>Date: </strong>{selectedEvent.date}</p>
        <p><strong>Time: </strong>{selectedEvent.time}</p>
        <p><strong>Venue: </strong>{selectedEvent.venue}</p>
    </section>
   ) 
}

export default ConcertDetail