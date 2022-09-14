import React from 'react'
import {BrowserRouter as Router,Route,Routes} from'react-router-dom'
import { HomeScreen } from './Pages/HomeScreen/HomeScreen';
import {ProfileScreen} from './Pages/ProfileScrren/ProfileScreen'
import  './App.css'
import { LoginScreen } from './Pages/LoginScreen/LoginScreen';
export const App = () => {
  const user= null
    
 
  return (
    <div className='app'>

      <Router>

        {
! user? <LoginScreen/>
:
<Routes>
  <Route path='/profile' element={<ProfileScreen/>}/>
  <Route path='/' element={<HomeScreen/>}/>
</Routes>
        }
      </Router>
      
      </div>
  )
}
