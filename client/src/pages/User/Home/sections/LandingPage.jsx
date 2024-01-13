import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";
import topleft from "../../../../assets/hero-top-left-image.svg";
import topright from "../../../../assets/hero-top-right-image.svg";
import Animation from "../../../../components/Animation";
import bgImg from "../../../../assets/bgline.png"


export default function LandingPage() {
  return (
    <div className="w-full py-20 bg-custom bg-[#272142] flex justify-between items-center p-6 relative clip-custom bg-ai">
      
      <div className="w-1/2">
        <p className="text-6xl font-bold text-white">
          Revolutionize Your Commute: Share Rides, Cut Costs, Go Green!
        </p>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <Tabs defaultValue="byName" className="z-10">
          <TabsList className="grid grid-cols-2 bg-transparent border text-background">
            <TabsTrigger value="byName">Search By Name</TabsTrigger>
            <TabsTrigger value="byLocation">Search By Location</TabsTrigger>
          </TabsList>
          <TabsContent value="byName" className="">
            <Card className="">
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@peduarte" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="byLocation" className="">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
