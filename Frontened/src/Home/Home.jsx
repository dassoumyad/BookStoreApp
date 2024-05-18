import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/banner';
import FreeBook from '../components/FreeBook';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <>
    <Navbar />
      <Banner />
      <FreeBook />
      <Footer />
      </>
  )
}

export default Home