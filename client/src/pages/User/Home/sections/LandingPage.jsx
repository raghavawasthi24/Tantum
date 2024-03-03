import React from "react";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { TbLocationFilled } from "react-icons/tb";
import { MdLocationPin } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";

export default function LandingPage() {
  return (
    <section className="mt-[56px] py-20 flex flex-col items-center clip-custom bg-ai gap-12">
      <div className="flex flex-col items-center gap-2 text-white">
        <p className="text-6xl font-bold"> Book, Ride, Enjoy!</p>
        <p className="font-medium ">
          Unlock Your Travel Potential: Instant Bookings, Comfortable Rides,
          Endless Enjoyment!
        </p>
      </div>
      <div className="flex">
        <div className="rounded-sm flex">
          <div className="relative border-r">
            <TbLocationFilled className="absolute left-2 top-3.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Source"
              className="pl-8 focus-visible:ring-0 rounded-none focus-visible:ring-offset-0 h-11"
            />
          </div>
          <div className="relative">
            <MdLocationPin className="absolute left-2 top-3.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Destination"
              className="pl-8 focus-visible:ring-0 rounded-none focus-visible:ring-offset-0 h-11"
            />
          </div>

          <div className="relative border-;">
            <FaCalendarAlt className="absolute left-2 top-3.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search"
              className="pl-8 focus-visible:ring-0 rounded-none focus-visible:ring-offset-0 h-11"
            />
          </div>
          <div className="relative w-[100px]">
            <BsPersonFill className="absolute left-2 top-3.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="People"
              className="pl-8 focus-visible:ring-0 rounded-none focus-visible:ring-offset-0 h-11"
            />
          </div>
          <Button
            variant="outline"
            size="lg"
            className="bg-red-500 text-white border-none rounded-none h-11"
          >
            Search
          </Button>
        </div>
      </div>
    </section>
  );
}
