import React from 'react'
import { About } from './components/about/About'
import { Contactus } from './components/contactus/Contactus'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Portafolio } from './components/portafolio/Portafolio'
import { Resume } from './components/resume/Resume'
import { Testimoneals } from './components/testimoneals/Testimoneals'

export const App = () => {
  return (
    <div className="App">
        <Header/>
        <About/>
        <Resume/>
        <Portafolio/>
        <Testimoneals/>
        <Contactus/>
        <Footer/>

    </div>
  )
}

