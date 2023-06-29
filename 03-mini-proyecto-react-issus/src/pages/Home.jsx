import { useState, useEffect } from 'react'

const Home = () => {
  const myRequest = new Request('../assets/issues.json')
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(myRequest)
      .then((response) => {
        return response.json()
      }).then((issues) => {
        console.log(issues.data)
        setGifs(issues.data)
      }).catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div>
      Home
      {
        data.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))
        }
    </div>
  )
}
export default Home
