import React from 'react'

const RepOrSen = ({ senOrRep, togglePeople }) => {
  return (
    <>
      <select value={senOrRep} onChange={togglePeople}>
        <option>representatives</option>
        <option>senators</option>
      </select>
    </>
  )
}

export default RepOrSen
