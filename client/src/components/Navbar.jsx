import { Button } from "./ui/button";
import { FaRegBell } from "react-icons/fa";
import { BsPlusCircle } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export default function Navbar() {
  const loggedin = false;
  return (
    <nav className="flex w-full fixed bg-white top-0 justify-between items-center px-4 py-2 z-20">
      <p className="font-bold text-xl md:text-4xl">Tantum.</p>
      <div className="flex items-center md:gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <div>
              <FaRegBell className="w-4 h-4 cursor-pointer" />
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
          <Button variant="secondary">hey</Button>
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
