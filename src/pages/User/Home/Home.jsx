import React from 'react'
import carpool from "../../../assets/lines.svg";
import Navbar from '../../../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className='w-full bg-[#1D2B53] h-screen'>
        <img src={carpool} alt="" className=''/>
      </div>
    </div>
  )
}
