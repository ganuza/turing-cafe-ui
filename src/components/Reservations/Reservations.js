import ReservationCard from '../ReservationCard/ReservationCard'
import './Reservations.css'

const Reservations = ({resies}) => {
  const resieCards = resies.map(resie => {
    return(
      <ReservationCard
        key={resie.id}
        id={resie.id}
        name={resie.name}
        date={resie.date}
        time={resie.time}
        number={resie.number}
      />
    )

  })
    return(
      
      <div className='resie-cont'>
        
        {resieCards}
      </div>
    )
}

export default Reservations