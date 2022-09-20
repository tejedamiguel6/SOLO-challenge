export const fetchApiData = async function (type, state) {
  const response = await fetch(`http://localhost:3000/${type}/${state}`)
  const results = await response.json()
  console.log(results.results)
  if (!results) {
    throw new Error('error fetching')
  }
  return results.results
}
