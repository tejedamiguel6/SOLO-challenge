import { useState, useEffect } from 'react'

const Details = ({ showDetails }) => {
  const [firstname, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  console.log(showDetails, 'grab details')

  const { name, district, phone, office, link } = showDetails

  useEffect(() => {
    if (name) {
      const [first, last] = name.split(' ')
      setFirstName(first)
      setLastName(last)
    }
  }, [name])

  return (
    <>
      <div className='contact-info'>
        <h5>First name: {firstname}</h5>
        <h5>Last Name: {lastName}</h5>
        <h5>District: {district}</h5>
        <h5>Phone: {phone}</h5>
        <h5>Office: {office}</h5>
        <h5>
          Website:{' '}
          <a href={link} target='__blank'>
            {link}
          </a>
        </h5>
      </div>
    </>
  )
}

export default Details
