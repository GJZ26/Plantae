import React from 'react'
import { useState } from 'react'
import '../static/searcher.css'
import axios from 'axios'
import '../static/searchedCard.css'

function SearchCart() {
  const [exist, setExist] = useState(false)
  const [folio, setFolio] = useState('')
  const [results, setResults] = useState([])

  const buscar = () => {
    if (folio === '') {
      alert('Por favor ingrese un folio')
    } else {
      axios.get('http://localhost:8000/cart/get/' + folio).then(
        (response) => {
          if (response.data.length === 0) {
            setExist(false)
          } else {
            setResults(response.data)
            setExist(true)
          }
        }
      )
    }
  }

  const cards = () => {
    if (exist) {
      return (
        results.map((elemen)=>(
          <div className="cardSearched">
            <h2 className="nameSearched">
              {elemen.nombre}
            </h2>
            <span className='folioSearched'>{elemen.folio}</span>
            <span className="creator">{elemen.username}</span>
            <span className='cantSearched'>Cantidad apartadas: {elemen.cantidad}</span>
          </div>
        ))
      )
    } else {
      return (
        <h2 className='nofound'>No se ha encontrado ningún folio</h2>
      )
    }
  }

  return (
    <div className='SearcherContainer'>
      <div className="inputBox">
        <label className='f'>F - </label>
        <input onChange={(e) => (setFolio(e.target.value))} type="text" />
      </div>
      <button className='primary oa' onClick={() => (buscar())}>Buscar</button>
      {cards()}
    </div>
  )
}

export default SearchCart