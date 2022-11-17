import React, { useState } from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjThree } from '../components/InfoSection/Data'
import { InfoSection2 } from '../components/InfoSection2'
import Navbar from '../components/Navbar'
import { Services } from '../components/Services'
import Sidebar from '../components/Sidebar'


export const Home = () => {
    const [ isOpen, setIsOpen ] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <HeroSection />
    <InfoSection { ...homeObjOne } />
    <InfoSection2 />
    <Services />
    <InfoSection { ...homeObjThree } />
    <Footer />
    </>
  )
}
