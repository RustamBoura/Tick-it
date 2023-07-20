

const EventDetail = () => {
   return (
    <section className="event-details">
        <img src={eventDetails.photo_url}/>
        <h3>{eventDetails.name}</h3>
        <p><strong>Date: </strong>{eventDetails.date}</p>
        <p><strong>Time: </strong>{eventDetails.time}</p>
        <p><strong>Venue: </strong>{eventDetails.venue}</p>
    </section>
   ) 
}

export default EventDetail