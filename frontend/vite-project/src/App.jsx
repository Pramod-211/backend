import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
function App() {
     
  const [jokes,setJokes]=useState([])

   useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
      console.log(response.data)
    })
   })

  return (
    <>
  
    <div>
      <h1>Hello From Pramod</h1>
      <p>jokes :{jokes.length}</p>
      {
        jokes.map((joke)=>{
         return <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>

      })
      }
    </div>
    </>
  )
}

export default App
