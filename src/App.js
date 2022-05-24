import React from 'react'
import {BrowserRouter as Router,Route,Routes} from'react-router-dom'
import { HomeScreen } from './Pages/HomeScreen/HomeScreen';
import  './App.css'
export const App = () => {
  const user= {
    name:'abhi'
  };
  return (
    <div className='app'>

      <Router>

        {
! user? <h2>Login Screen</h2>
:
<Routes>
  {/* <Route path='/profile' element={}/> */}
  <Route path='/' element={<HomeScreen/>}/>
</Routes>
        }
      </Router>
      
      </div>
  )
}
