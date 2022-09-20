import { useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Details from './Details'

const columns = [
  { id: 'name', label: 'Name', minWidth: '80px' },
  { id: 'party', label: 'Party', minWidth: '50px' },
]

const Results = ({ persons }) => {
  const [showDetails, setShowDetails] = useState([])
  const [toggleDetails, setToggeDetails] = useState(false)

  useEffect(() => {
    if (persons) {
      setShowDetails(persons)
      console.log('updating => every time', persons)
    }
  }, [persons])

  const isDetailsToggle = (person) => {
    setToggeDetails(true)
    setShowDetails(person)
  }

  if (!persons) {
    return <h3>Details not available</h3>
  }

  return (
    <>
      <div className='flex'>
        <TableContainer sx={{ maxHeight: '540px' }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    sx={{
                      backgroundColor: '#F8F8F9',
                      minWidth: column.minWidth,
                      borderBottom: '1px solid #499eff',
                    }}
                    key={column.id}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {persons.map((person) => {
                return (
                  <TableRow key={person.name}>
                    <TableCell
                      key={person.id}
                      sx={{ borderBottom: '1px solid #499eff' }}
                    >
                      <button
                        className='person-btn'
                        onClick={() => isDetailsToggle(person)}
                      >
                        {person.name}
                      </button>
                    </TableCell>
                    <TableCell
                      key={person.id}
                      sx={{ borderBottom: '1px solid #499eff' }}
                    >
                      {person.party}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer>
          <Table>
            <TableRow>
              <TableCell sx={{ borderBottom: 'none' }}>
                {toggleDetails && <Details showDetails={showDetails} />}
              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default Results
