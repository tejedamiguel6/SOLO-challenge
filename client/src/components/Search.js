import States from './States'
import RepOrSen from './RepOrSen'
const Search = ({
  senOrRep,
  togglePeople,
  selectedState,
  stateSelected,
  updateSenOrRep,
  isError,
}) => {
  return (
    <>
      <div>
        {senOrRep === 'senators' ? (
          <h1 className='who-is'> Who is My Representative?</h1>
        ) : (
          <h1 className='who-is'>Who is My Senator?</h1>
        )}
      </div>

      <div className='search'>
        <RepOrSen senOrRep={senOrRep} togglePeople={togglePeople} />
        <States selectedState={selectedState} stateSelected={stateSelected} />
        <button onClick={updateSenOrRep}>Submit</button>
      </div>
    </>
  )
}

export default Search
