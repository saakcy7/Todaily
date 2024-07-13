import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <>
    <div className='home d-flex justify-content-center align-items-center'>
    <div className="home-container">

        <h1><b>Plan for today,tomorrow and everyday.</b></h1>
        <p>Make your day productive by planning your day with us.</p>
        <button className='btn btn-primary'>Get Started</button>
        </div>
        <img className="img img-primary" src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9kbyUyMGxpc3R8ZW58MHx8MHx8fDA%3D"></img>
    </div>

    </>
  )
}
export default Home;
