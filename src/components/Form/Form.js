import { useState } from 'react'
import './Form.css'

const Form = () => {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [number, setNumber] = useState('')

    return(
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <input
          type='text'
          placeholder='Date (mm/dd)'
          name='date'
          value={date}
          onChange={event => setDate(event.target.value)}
        />

        <input
          type='text'
          placeholder='Time'
          name='time'
          value={time}
          onChange={event => setTime(event.target.value)}
        />

        <input
          type='text'
          placeholder='Number of guests'
          name='number'
          value={number}
          onChange={event => setNumber(event.target.value)}
        />

        <button>Make Reservation</button>
      </form>
    )
}

export default Form