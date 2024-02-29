import { Routes, Route } from 'react-router'
import './App.css'
import Countries from './Component/Countries'
import SingleCountry from './Component/SingleCountry'
import Error from './Component/Error'

function App() {

  return (
    <>
      <Routes >
      <Route path='/' element={<Countries />} /> 
      <Route path='/:name' element={<SingleCountry />} /> 
      <Route path='*' element={<Error />} /> 
      </Routes>
    </>
  )
}

export default App
