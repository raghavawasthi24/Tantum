import { Button } from "./ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "./ui/avatar";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { FaRegBell } from "react-icons/fa";
import { BsPlusCircle } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CgProfile } from "react-icons/cg";
import { RiMotorbikeFill } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";


export default function Navbar() {
  const loggedin = true;

  const sidebar = [
    {
      icon: <CgProfile className="w-4 h-4 mr-2" />,
      title: "My Profile",
      link: "/profile",
    },
    {
      icon: <RiMotorbikeFill className="w-4 h-4 mr-2" />,
      title: "My Rides",
      link: "/profile",
    },
    {
      icon: <MdPayment className="w-4 h-4 mr-2" />,
      title: "My Transactions",
      link: "/profile",
    },
    {
      icon: <CiSettings className="w-4 h-4 mr-2" />,
      title: "Settings",
      link: "/profile",
    },
    {
      icon: <FiLogOut className="w-4 h-4 mr-2" />,
      title: "Logout",
      link: "/profile",
    },
  ];
  return (
    <nav className="flex w-full fixed bg-white top-0 justify-between items-center px-4 py-2 z-20">
      <p className="font-bold text-xl md:text-4xl text-[#272142]">Tantum.</p>
      <div className="flex items-center md:gap-2">
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
        <Button variant="ghost">
          <BsPlusCircle className="w-4 h-4 sm:mr-2" />
          <span className="hidden sm:block">Publish a ride</span>
        </Button>
        {/* checks whether user is logged in or not */}
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
            <SheetContent className="w-[300px] pt-10">
              {
                // sidebar
                sidebar.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-[#272142] text-md font-semibold hover:bg-[#F3F3F3] p-2 rounded-lg cursor-pointer"
                  >
                    {item.icon}
                    {item.title}
                  </div>
                ))
              }
               {/* <div className="w-full flex items-center">
                  <CgProfile className="w-4 h-4 mr-2"/>
                  My Profile
               </div> */}
            </SheetContent>
          </Sheet>
        ) : (
          <Button
            variant="secondary"
            size="sm"
            className="flex items-center font-semibold"
          >
            <CiGlobe className="w-4 h-4 mr-2" />
            Sign In
          </Button>
        )}
      </div>
    </nav>
  );
}
