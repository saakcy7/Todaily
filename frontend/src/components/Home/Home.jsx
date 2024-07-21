import React from 'react'
import './Home.css'
import image from './image.png'
const Home = () => {
  return (
    <>
    <div className='home d-flex justify-content-center align-items-center'>
    <div className="home-container">

        <h1><b>Plan for today,tomorrow and everyday.</b></h1>
        <p>Make your day productive by planning your day with us.</p>
        <button className='btn btn-primary'>Get Started</button>
        </div>
        <img className="img img-primary" src={image} alt='/'></img>
    </div>

    </>
  )
}
export default Home;
