import React from "react";
import { Input } from "../../../../components/ui/input";
import {Button} from "../../../../components/ui/button";
import { LuArrowUpFromDot } from "react-icons/lu";


export default function LandingPage() {
  return (
    <section className="mt-[56px] py-20 flex flex-col items-center clip-custom bg-ai gap-12">
      <div className="flex flex-col items-center gap-2 text-white">
        <p className="text-6xl font-bold"> Book, Ride, Enjoy!</p>
        <p className="font-medium ">Unlock Your Travel Potential: Instant Bookings, Comfortable Rides, Endless Enjoyment!</p>
      </div>
      <div className="flex">
      <div className="bg-background/95 p-2 flex flex-col gap-2 backdrop-blur supports-[backdrop-filter]:bg-background/60">   
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <LuArrowUpFromDot className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground text-green-700" />
                    <Input placeholder="Search" className="pl-8 focus-visible:ring-0 rounded-none focus-visible:ring-offset-0" />
                  </div>
                  <div className="relative">
                    <LuArrowUpFromDot className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search" className="pl-8 focus-visible:ring-0 rounded-none focus-visible:ring-offset-0" />
                  </div>
                </div>

                <div className="flex">
                  <div className="relative">
                    <LuArrowUpFromDot className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search" className="pl-8 focus-visible:ring-0 rounded-none focus-visible:ring-offset-0" />
                  </div>
                  <div className="relative">
                    <LuArrowUpFromDot className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search" className="pl-8 focus-visible:ring-0 rounded-none focus-visible:ring-offset-0" />
                  </div>
                  <Button size="icon" variant="outline" className="rounded-full ml-2 bg-blue-500">

                  </Button>
                </div>
            </div>
      </div>
    </section>
  );
}
