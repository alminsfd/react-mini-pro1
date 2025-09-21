
import { Suspense } from 'react'
import './App.css'
import Countries from './component/countries'


function App() {



  const countriesPromises= fetch("https://openapi.programming-hero.com/api/all")
  .then(res=>res.json())

  return (
    <>
    <Suspense fallback={<p>wait for sometime...</p>} >

      <Countries countriesPromises={countriesPromises}></Countries>
    
    </Suspense>   
      
    </>
  )
}

export default App
