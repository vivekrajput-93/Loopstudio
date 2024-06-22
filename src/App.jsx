import React from 'react'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
        <div className='h-[100vh]'>
          home
        </div>
      <Footer />
    </div>
  )
}

export default App