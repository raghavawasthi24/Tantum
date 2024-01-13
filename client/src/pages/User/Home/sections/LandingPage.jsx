import React from "react";
import { Input } from "../../../../components/ui/input";


export default function LandingPage() {
  return (
    <section className="mt-[56px] py-20 flex flex-col items-center clip-custom bg-ai gap-12">
      <div className="flex flex-col items-center gap-2 text-white">
        <p className="text-6xl font-bold"> Book, Ride, Enjoy!</p>
        <p className="font-medium ">Unlock Your Travel Potential: Instant Bookings, Comfortable Rides, Endless Enjoyment!</p>
      </div>
      <div className="flex">
        <Input placeholder="From" className="w-[30rem] bg-muted outline-0 border-none rounded-none "/>
      </div>
    </section>
  );
}
