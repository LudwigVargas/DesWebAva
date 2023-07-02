import { useState, useEffect } from 'react'
import ImageCard from './components/ImageCard'
import './App.css'

function App () {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/react/issues')
      .then((response) => {
        response.json()
      }).then((results) => {
        console.log(results.data)
        setGifs(results.data)
      }).catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <div className='App'>
      <div className='grid-cards'>
        {
        gifs.map((gif) => (
          <ImageCard
            key={gif.id}
            title={gif.title}
            url={gif.images.fixed_height.url}
          />
        ))
        }
      </div>
    </div>
  )
}

export default App
