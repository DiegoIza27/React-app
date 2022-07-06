import React from 'react-dom/client'
import * as API from './data/getapi'
import {useState,useEffect} from 'react'
import 'animate.css';
import './styles/styles.css'
  const Home = () => {
  const [users, setusers] = useState([])
   useEffect(()=>{
  API.getUser().then(setusers)
  },[])

  return (
    <> 
    <div className="row no-gutters animate__animated animate__backInDown">
      <h1>Datos de la API</h1>
    </div>
   <ul>
    {
      users.map(item =>(
        <div className="row mt-5 animate__animated animate__fadeInLeft">
        <li key={item.id} value={item}>
          <ul>
          <p>
          <h4>Nombre</h4>
          {item.name}
          </p>
          </ul>
          <ul>
          <p>
          <h4>Usuario Nombre</h4>
          {item.username}
          </p>
          </ul>
          <ul>
          <p>
          <h4>Correo</h4>
          {item.email}
          </p>
          </ul>
          <ul>
          <p>
          <h4>información</h4>
          {item.address.street}
          </p>
          </ul>
        </li>
        </div>
      ))
    }
   </ul>
    </>
  )
}
export default Home
