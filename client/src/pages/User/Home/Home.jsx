import React from 'react'
import Navbar from '../../../components/Navbar';
import LandingPage from './sections/LandingPage';
import Footer from '../../../components/Footer';

export default function Home() {
  return (
    <div className="bg-[#272142]">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}
