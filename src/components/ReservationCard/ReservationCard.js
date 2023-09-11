import './ReservationCard.css'

const ReservationCard = ({ id, name, date, time, number }) => {
  return(
    <div className='resie-card'>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of Guests: {number}</p>
      <button className='button'>CANCEL</button>
    </div>
  )
}

export default ReservationCard