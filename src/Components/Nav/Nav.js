import React ,{useEffect, useState}from 'react'
import'./Nav.css'
const Nav = () => {

    const [show,setShow]=useState(false)

    const TransitionNavbar=()=>{

        if(window.scrollY>100){                 //100px 

            setShow(true)

        }
        else{
            setShow(false)
        }
    }

    useEffect(() => {
      
        window.addEventListener("scroll",TransitionNavbar)

      return () => {
        
        //remove event .before reloading useEffect
        window.removeEventListener("scroll",TransitionNavbar)
      }
    }, [])
    
  return (
    <nav className={`nav ${show && 'nav__black'}`}>
        <div className="nav__content">

            <img src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png'
            className='nav__logo'/>

            <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            className='nav__avatar'/>
        </div>

    </nav>
  )
}

export default Nav