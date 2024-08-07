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
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { AlertDialogDemo } from "@/components/ui/alertDialogForm";
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
    Columns4
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
                            </div>
                            <ProgressSteps />
                            <div className="flex justify-between items-center">
                                <p className="text-xs text-muted-foreground ">
                                    Move Stage: New
                                </p>
                                <div >
                                    <Button className="m-1">Make as Completed</Button>
                                    <AlertDialogDemo />
                                </div>

                            </div>
                        </div>
                        {/* New component */}
                        <div className=" m-3 bg-white w-9/10 p-3 flex flex-row">
                            <div className="flex flex-col w-3/12 gap-5 border-r-2 pl-5 pt-3 cursor-pointer">
                                <h4 className="text-s font-semibold tracking-tight text-gray-700 hover:text-blue-700"> Categories </h4>
                                <h4 className="text-s font-semibold tracking-tight text-gray-700 hover:text-blue-700"> Activity </h4>
                                <h4 className="text-s font-semibold tracking-tight text-gray-700 hover:text-blue-700"> Contact </h4>
                                <h4 className="text-s font-semibold tracking-tight text-gray-700 hover:text-blue-700"> Engagement </h4>
                                <h4 className="text-s font-semibold tracking-tight text-gray-700 hover:text-blue-700"> Partners </h4>
                                <h4 className="text-s font-semibold tracking-tight text-gray-700 hover:text-blue-700"> Products </h4>
                                <h4 className="text-s font-semibold tracking-tight text-gray-700 hover:text-blue-700"> Qutoes </h4>
                                <h4 className="text-s font-semibold tracking-tight text-gray-700 hover:text-blue-700"> Stage history </h4>
                                <h4 className="text-s font-semibold tracking-tight text-gray-700 hover:text-blue-700"> Approval History </h4>
                                <h4 className="text-s font-semibold tracking-tight text-gray-700 hover:text-blue-700"> Categories </h4>

                            </div>
                            <div className="flex flex-col w-full border-r-2 p-5 ">
                                <div className="flex justify-between">
                                    <div className="flex flex-row gap-2">
                                        <Columns4 className="text-blue-600" />
                                        <h4 className="text-s font-semibold tracking-tight text-blue-600"> Phone Calls </h4>
                                    </div>
                                    <Button className="bg-white text-gray-600 items-center py-0">Log new call</Button>
                                </div>
                                <div className="flex flex-row justify-between border-2 p-5 ">
                                    <div className="flex flex-row gap-2 items-center">
                                        <Columns4 className="text-gray-600 text-xs" />
                                        <h4 className="text-s font-semibold tracking-tight text-gray-600 text-xs items-center "> Product Walkthrough </h4>
                                    </div>
                                </div>


                                <div className="flex flex-row justify-between border-2 p-5 ">
                                    <div className="flex flex-col gap-2 ">
                                        <h4 className="text-s font-semibold tracking-tight text-gray-600 text-xs text-left justify-start "> Notes </h4>
                                        <p className="text-xs text-muted-foreground ">
                                            Notes from the call - this is just a placeholder, she is intrested our new product and wanted the process and go with the new excelent product where she get.
                                        </p>
                                    </div>
                                </div>


                                <div className="flex flex-row justify-around border-2 p-5 ">
                                    <div className="flex flex-col gap-2  pr-5 ">
                                        <p className="text-xs text-muted-foreground text-left">
                                            Call Duration
                                        </p>
                                        <div className="flex flex-row justify-left items-center gap-3 pt-3 ">
                                            <img
                                                src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png"
                                                className=" h-5 w-5 rounded-full"
                                            />
                                            <p className="text-xs text-gray-600 tracking-tight">
                                                Cody Fisher
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-l-2 pl-5 ">
                                        <p className="text-xs text-muted-foreground text-left">
                                            Call Duration
                                        </p>
                                        <div className="flex flex-row justify-left items-center gap-3 pt-3 ">
                                            <img
                                                src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png"
                                                className=" h-5 w-5 rounded-full"
                                            />
                                            <p className="text-xs text-gray-600 tracking-tight">
                                                Cody Fisher
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-l-2 pl-5 ">
                                        <p className="text-xs text-muted-foreground text-left">
                                            Call Duration
                                        </p>
                                        <div className="flex flex-row justify-left items-center gap-3 pt-3 ">
                                            <img
                                                src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png"
                                                className=" h-5 w-5 rounded-full"
                                            />
                                            <p className="text-xs text-gray-600 tracking-tight">
                                                Cody Fisher
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-row justify-between border-2 p-5 mt-10">
                                    <div className="flex flex-row gap-2 items-center">
                                        <Columns4 className="text-gray-600 text-xs" />
                                        <h4 className="text-s font-semibold tracking-tight text-gray-600 text-xs items-center "> Product Walkthrough </h4>
                                    </div>
                                </div>


                                <div className="flex flex-row justify-between border-2 p-5 ">
                                    <div className="flex flex-col gap-2 ">
                                        <h4 className="text-s font-semibold tracking-tight text-gray-600 text-xs text-left justify-start "> Notes </h4>
                                        <p className="text-xs text-muted-foreground ">
                                            Notes from the call - this is just a placeholder, she is intrested our new product and wanted the process and go with the new excelent product where she get.
                                        </p>
                                    </div>
                                </div>


                                <div className="flex flex-row justify-around border-2 p-5 ">
                                    <div className="flex flex-col gap-2  pr-5 ">
                                        <p className="text-xs text-muted-foreground text-left">
                                            Call Duration
                                        </p>
                                        <div className="flex flex-row justify-left items-center gap-3 pt-3 ">
                                            <img
                                                src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png"
                                                className=" h-5 w-5 rounded-full"
                                            />
                                            <p className="text-xs text-gray-600 tracking-tight">
                                                Cody Fisher
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-l-2 pl-5 ">
                                        <p className="text-xs text-muted-foreground text-left">
                                            Call Duration
                                        </p>
                                        <div className="flex flex-row justify-left items-center gap-3 pt-3 ">
                                            <img
                                                src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png"
                                                className=" h-5 w-5 rounded-full"
                                            />
                                            <p className="text-xs text-gray-600 tracking-tight">
                                                Cody Fisher
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-l-2 pl-5 ">
                                        <p className="text-xs text-muted-foreground text-left">
                                            Call Duration
                                        </p>
                                        <div className="flex flex-row justify-left items-center gap-3 pt-3 ">
                                            <img
                                                src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png"
                                                className=" h-5 w-5 rounded-full"
                                            />
                                            <p className="text-xs text-gray-600 tracking-tight">
                                                Cody Fisher
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>

                        {/* new component 2 */}
                            
                        
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="password">
                <Card>
                   
                    <CardContent className="space-y-2 w-full  py-[250px]">
                        <div className="flex justify-center items-center">
                            <h1 className="text-3xl">Company View</h1>
                        </div>
                    </CardContent>
                    
                </Card>
            </TabsContent>
        </Tabs>
    );
}
