import React from 'react'
import carpool from "../../../assets/lines.svg";

export default function Home() {
  return (
    <div>
      <div className='w-full bg-gradient-to-b from-gray-900 via-blue-700 to-blue-900 h-screen'>
        <img src={carpool} alt="" className=''/>
      </div>
    </div>
  )
}
