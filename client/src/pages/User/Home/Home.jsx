import React from 'react'
import carpool from "../../../assets/lines.svg";
import Navbar from '../../../components/Navbar';
import LandingPage from './sections/LandingPage';

export default function Home() {
  return (
    <div className='mt-[56px]'>
      <Navbar/>
      <LandingPage/>
      <div className='w-full h-screen absolute top-0 left-0 -z-50'>
        <img src={carpool} alt="" className='-z-50'/>
      </div>
    </div>
  )
}
