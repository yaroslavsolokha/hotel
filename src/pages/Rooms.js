import React from 'react'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'

export const Rooms = () => {
    return (
        <div>
            <Hero hero="roomsHero">
            <Banner title="OUR Rooms">
                <Link to="/" className="btn-primary">Home</Link>
            </Banner>
            </Hero>
        </div>
    )
}

export default Rooms
