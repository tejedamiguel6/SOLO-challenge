import { states } from '../utils/states'

const States = ({ stateSelected, selectedState }) => {
  return (
    <div>
      <select className='states' value={stateSelected} onChange={selectedState}>
        {states.map((state) => (
          <option key={state}>{state}</option>
        ))}
      </select>
    </div>
  )
}

export default States
