// import { Avatar, Button } from '@mui/material'
import React from "react";
import img from "../assets/react.svg";
import { Button } from "./ui/button";
import { FaRegBell } from "react-icons/fa";
import { BsPlusCircle } from "react-icons/bs";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export default function Navbar() {
  const loggedin = false;
  return (
    <nav className="flex w-full bg-white justify-between px-4 py-2 fixed top-0">
      <div className="flex items-center gap-8">
        <p className="text-blue-700 font-bold text-4xl">Tantum.</p>
      </div>
      <div className="flex items-center gap-2">

        <Popover>
          <PopoverTrigger asChild>
            <div>
               <FaRegBell className='w-4 h-4 text-blue-700 cursor-pointer'/>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">
                  Set the dimensions for the layer.
                </p>
              </div>
            </div>
          </PopoverContent>
        </Popover>


        <Button variant="ghost" className=" text-blue-700">
          <BsPlusCircle className="w-4 h-4 mr-2" />
          Publish a ride
        </Button>
        {loggedin ? (
          <Button variant="secondary">hey</Button>
        ) : (
          <div className="flex items-center gap-4">
            <Button variant="secondary" size="sm">
              Login
            </Button>
            <Button className=" bg-blue-700">Signup</Button>
          </div>
        )}
      </div>
    </nav>
  );
}
