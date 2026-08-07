

import './App.css'
import Hero from './components/Hero'

import Navbar from './components/Navbar'
import About from './components/About'
import MenuPreview from './components/MenuPreview'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  

  return (
    <>
    <div className="app">
     <Navbar />
     <Hero />
     <About/>
     <MenuPreview/>
     <Gallery/>
     <Contact/>
     <Footer/>
     </div>
    </>
  )
}

export default App
