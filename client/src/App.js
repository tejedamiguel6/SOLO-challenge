import { useState } from 'react'
import { fetchApiData } from './utils/api'
import Search from './components/Search'
import './App.css'
import Results from './components/Results'

function App() {
  const [senOrRep, setSenOrRep] = useState('representatives')
  const [stateSelected, setStateSelected] = useState('')
  const [isError, setIsError] = useState(false)
  const [persons, setPersons] = useState([])

  const togglePeople = (e) => {
    setSenOrRep(e.target.value)
  }

  const selectedState = (e) => {
    setStateSelected(e.target.value)
  }

  const updateSenOrRep = async () => {
    try {
      const res = await fetchApiData(senOrRep, stateSelected)
      setPersons(res)
    } catch (error) {
      console.log(error, 'there was an erro')
      setIsError(true)
    }
  }

  return (
    <div className='App'>
      {/* {JSON.stringify(representatives)} */}

      <Search
        senOrRep={senOrRep}
        togglePeople={togglePeople}
        stateSelected={stateSelected}
        selectedState={selectedState}
        updateSenOrRep={updateSenOrRep}
      />
      {stateSelected && <Results persons={persons} isError={isError} />}
    </div>
  )
}

export default App
