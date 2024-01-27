import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { FaRegBell } from "react-icons/fa";
import { BsPlusCircle } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CgProfile } from "react-icons/cg";
import { RiMotorbikeFill } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const loggedin = true;
  return (
    <nav className="flex w-full fixed bg-white top-0 justify-between items-center px-4 py-2 z-20">
      <p className="font-bold text-xl md:text-4xl text-[#272142]">Tantum.</p>
      <div className="flex items-center md:gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <div>
              <FaRegBell className="w-4 h-4 cursor-pointer text-[#272142]" />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>
          </PopoverContent>
        </Popover>
        <Button
          variant="outline"
          className="bg-white sm:border sm:border-[#272142] rounded-full"
        >
          <BsPlusCircle className="w-4 h-4 sm:mr-2" />
          <span className="hidden sm:block">Publish a ride</span>
        </Button>
        {/* condition to check whether logged In or not */}
        {/* displays signin when loggged out otherwise profile options */}
        {loggedin ? (
          <Sheet>
            <SheetTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </SheetTrigger>
            <SheetContent className="w-[300px] pt-12">
              <Link
                to="/profile"
                className="flex items-center text-[#4e4d4f] text-md font-medium  hover:bg-[#F3F3F3] p-2 rounded-lg cursor-pointer"
              >
                <CgProfile className="w-4 h-4 mr-2" />
                My Profile
              </Link>
              <Link
                to="/rides"
                className="flex items-center text-[#4e4d4f] text-md font-medium  hover:bg-[#F3F3F3] p-2 rounded-lg cursor-pointer"
              >
                <RiMotorbikeFill className="w-4 h-4 mr-2" />
                My Rides
              </Link>
              <Link
                to="/payments"
                className="flex items-center text-[#4e4d4f] text-md font-medium  hover:bg-[#F3F3F3] p-2 rounded-lg cursor-pointer"
              >
                <MdPayment className="w-4 h-4 mr-2" />
                My Payments
              </Link>
              <Link
                to="/settings"
                className="flex items-center text-[#4e4d4f] text-md font-medium  hover:bg-[#F3F3F3] p-2 rounded-lg cursor-pointer"
              >
                <IoIosSettings className="w-4 h-4 mr-2" />
                Settings
              </Link>
              <hr />
              <Link
                to="/logout"
                className="flex items-center text-white bg-red-600 text-md font-medium p-2 rounded-lg cursor-pointer"
              >
                <FiLogOut className="w-4 h-4 mr-2" />
                Logout
              </Link>
            </SheetContent>
          </Sheet>
        ) : (
          <Button
            size="sm"
            className="flex items-center font-semibold bg-[#272142]"
          >
            <CiGlobe className="w-4 h-4 mr-2" />
            Sign In
          </Button>
        )}
      </div>
    </nav>
  );
}
