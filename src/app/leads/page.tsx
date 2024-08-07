import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  LayoutDashboard,
  Users,
  UsersRound,
  Lightbulb,
  Handshake,
  Factory,
  Mail,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProgressSteps from "@/components/ui/prograssStep";
import img1 from '../../assets/draw.png';

export default function TabsDemo() {
  return (
    <Tabs className="">
      <TabsList className="flex w-full  justify-between px-10 rounded-none bg-white">
        <div className="font-semibold text-black">Leads</div>
        <div>
          <TabsTrigger value="account">
            {" "}
            <CircleUser className="pr-2" /> Individual view{" "}
          </TabsTrigger>
          <TabsTrigger value="password">
            {" "}
            <Factory className="pr-2" /> Company view
          </TabsTrigger>
        </div>
      </TabsList>
      <TabsContent value="account">
        {/* <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
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
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card> */}
        <div className="flex bg-slate-100 w-full flex-row">
          <div className="flex flex-col w-1/4 bg-white content-center text-center p-10">
            <div className="flex flex-row justify-center items-center gap-3">
              <img
                src="https://i.pinimg.com/1200x/73/89/e3/7389e3060eb4371a1a25bcb8ae4ad110.jpg"
                className=" h-5 w-5 rounded-full"
              />
              <h4 className="text-s font-semibold tracking-tight">
                Global SpaceX
              </h4>
            </div>
            <p className="text-sm text-muted-foreground">Mutual Leads</p>
            <p className="text-xs text-muted-foreground text-left pt-10">
              Processing Owner
            </p>
            <div className="flex flex-row justify-left items-center gap-3 pt-3">
              <img
                src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png"
                className=" h-5 w-5 rounded-full"
              />
              <p className="text-xs text-gray-600 tracking-tight">
                Cody Fisher
              </p>
            </div>
            <div className="flex flex-row justify-left items-center gap-3 pt-3">
              <Mail className="w-4 h-4 " />
              <p className="text-xs text-gray-600 tracking-tight underline">
                robertfox@example.com
              </p>
            </div>

            <p className="text-xs text-muted-foreground text-left pt-10">
              Processing Owner
            </p>
            <div className="flex flex-row justify-left items-center gap-3 pt-3">
              <img
                src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png"
                className=" h-5 w-5 rounded-full"
              />
              <p className="text-xs text-gray-600 tracking-tight">
                Cody Fisher
              </p>
            </div>
            <div className="flex flex-row justify-left items-center gap-3 pt-3">
              <Mail className="w-4 h-4 " />
              <p className="text-xs text-gray-600 tracking-tight underline">
                robertfox@example.com
              </p>
            </div>

            <h4 className="text-s font-semibold tracking-tight border-t-2 w-full mt-20 pt-5 text-left">
              Other leads
            </h4>
            <div className="flex flex-row justify-left items-center gap-3 pt-3">
              <img
                src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png"
                className=" h-5 w-5 rounded-full"
              />
              <p className="text-xs text-gray-600 tracking-tight">
                Cody Fisher
              </p>
            </div>
            <div className="flex flex-row justify-left items-center gap-3 pt-3">
              <Mail className="w-4 h-4 " />
              <p className="text-xs text-gray-600 tracking-tight underline">
                robertfox@example.com
              </p>
            </div>
            <div className="flex flex-row justify-left items-center gap-3 pt-3">
              <img
                src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png"
                className=" h-5 w-5 rounded-full"
              />
              <p className="text-xs text-gray-600 tracking-tight">
                Cody Fisher
              </p>
            </div>
            <div className="flex flex-row justify-left items-center gap-3 pt-3">
              <Mail className="w-4 h-4 " />
              <p className="text-xs text-gray-600 tracking-tight underline">
                robertfox@example.com
              </p>
            </div>
          </div>

          {/* Next component */}
          <div className="  w-full">
            <div className=" m-3 bg-white w-9/10 p-3">
            <h4 className="text-s font-semibold tracking-tight">
                Deal Stage
              </h4>
              <div className="flex justify-between">
                <p className="text-xs text-muted-foreground ">
                  Start Date: 21 june 2024
                </p>
                <p className="text-xs text-muted-foreground ">
                  Close Date: 20 july 2024
                </p>
                <img src='https://github.com/RaamVijith/nextjs-assignment-dashboard/blob/master/src/assets/draw.png?raw=true' />
              </div>
            </div>

            <div className=" m-3 bg-white w-9/10 p-3">dinu</div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="password">
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
  );
}
