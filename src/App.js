import axios from 'axios'
import React, {useState, useEffect} from 'react'

const url = 'http://localhost:3000/products'

const App = () => {
  const [product, setProduct] = useState('')
  const [desc, setDesc] = useState('')

  const handleName = (e) => {
    setProduct(e.target.value)
  }
  const handleDesc = (e) => {
    setDesc(e.target.value)
  }
  
  const handleReset = () => {
    const initialState = ''
    setProduct(initialState)
    setDesc(initialState)
  }

  const handleSubmit = () => {
    const db = {
      name: product,
      description: desc
    }
    axios.post(url, db)
    console.log('Envío de información hecho')
    handleReset()
  }

  const handleRequest = async() =>{ 
    const response = await axios.get(url)
    console.log(response)
    response.data.map((item) => {
      return (
        <li key={item.id}>
          <p>{item.name}</p>
        </li>
      )
    })
  }

  return (
    <div>
      <form action="">
        <input type="text" value={product} name="" id="" onChange={handleName} />
        <input type="text" value={desc} name="" id="" onChange={handleDesc} />
        <h2>{product}</h2>
        <button onClick={handleSubmit}>Enviar</button>
      </form>
      <ul>
        {useEffect(()=>{handleRequest()}, [])}
      </ul>
    </div>
  )
}

export default App
