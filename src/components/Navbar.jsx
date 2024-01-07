// import { Avatar, Button } from '@mui/material'
import React from 'react'
import img from "../assets/react.svg";
import { Button } from './ui/button';

export default function Navbar() {
    const menubar=["Home","Pricing","Contact Us"]
    const loggedin= false;
  return (
    <nav className='flex justify-between px-4 py-2'>
        <div className='flex items-center gap-8'>
            <p className='text-blue-500 font-bold text-2xl'>Tantum</p>
            <div className='flex gap-4'>
                {
                    menubar.map((item,index)=>{
                        return(
                        <button key={index}>{item}</button>
                        )
                    })
                }
            </div>
        </div>
        <div className='flex'>
           <Button variant="secondary">hey</Button>
        </div>
    </nav>
  )
}
