import React, { useState } from 'react'
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className="container">
        <Title subtitle='CHƯƠNG TRÌNH của chúng tôi' title='Những gì chúng tôi mang đến'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subtitle='' title='Không gian lớp học'/>
        <Campus/>
        <Title subtitle='' title='Sinh viên nói gì về chúng tôi'/>
        <Testimonials/>
        <Title subtitle='Liên hệ' title=''/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App


