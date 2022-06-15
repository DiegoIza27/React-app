import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from "./Home.jsx"
import Er from "./Er.jsx"
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<div><h1>React Js</h1></div>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/*' element={<Er/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;
