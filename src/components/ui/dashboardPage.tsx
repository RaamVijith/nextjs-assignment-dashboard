import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function DashboardPage() {
  return (
    
        <main className="grid flex-1 m-10 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">




            
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <Card
                className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
              >
                <CardHeader className="pb-3">
                  <CardTitle>Your Orders</CardTitle>
                  <CardDescription className="max-w-lg text-balance leading-relaxed">
                    Introducing Our Dynamic Orders Dashboard for Seamless
                    Management and Insightful Analysis.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button>Create New Order</Button>
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-05-chunk-1">
                <CardHeader className="pb-2">
                  <CardDescription>This Week</CardDescription>
                  <CardTitle className="text-4xl">$1,329</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    +25% from last week
                  </div>
                </CardContent>
                <CardFooter>
                  <Progress value={25} aria-label="25% increase" />
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-05-chunk-2">
                <CardHeader className="pb-2">
                  <CardDescription>This Month</CardDescription>
                  <CardTitle className="text-4xl">$5,329</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    +10% from last month
                  </div>
                </CardContent>
                <CardFooter>
                  <Progress value={12} aria-label="12% increase" />
                </CardFooter>
              </Card>
            </div>







            <Tabs defaultValue="week">
              <div className="flex items-center">
                <TabsList>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                  <TabsTrigger value="year">Year</TabsTrigger>
                </TabsList>
                <div className="ml-auto flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 gap-1 text-sm"
                      >
                        <ListFilter className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only">Filter</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem checked>
                        Fulfilled
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Declined
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Refunded
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 gap-1 text-sm"
                  >
                    <File className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Export</span>
                  </Button>
                </div>
              </div>
              <TabsContent value="week">
                <Card x-chunk="dashboard-05-chunk-3">
                  <CardHeader className="px-7">
                    <CardTitle>Orders</CardTitle>
                    <CardDescription>
                      Recent orders from your store.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Customer</TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Type
                          </TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Status
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Date
                          </TableHead>
                          <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="bg-accent">
                          <TableCell>
                            <div className="font-medium">Liam Johnson</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              liam@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Sale
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Fulfilled
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-23
                          </TableCell>
                          <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Olivia Smith</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              olivia@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Refund
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="outline">
                              Declined
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-24
                          </TableCell>
                          <TableCell className="text-right">$150.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Noah Williams</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              noah@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Subscription
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Fulfilled
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-25
                          </TableCell>
                          <TableCell className="text-right">$350.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Emma Brown</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              emma@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Sale
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Fulfilled
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-26
                          </TableCell>
                          <TableCell className="text-right">$450.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Liam Johnson</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              liam@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Sale
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Fulfilled
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-23
                          </TableCell>
                          <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Liam Johnson</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              liam@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Sale
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Fulfilled
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-23
                          </TableCell>
                          <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Olivia Smith</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              olivia@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Refund
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="outline">
                              Declined
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-24
                          </TableCell>
                          <TableCell className="text-right">$150.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Emma Brown</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              emma@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Sale
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Fulfilled
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-26
                          </TableCell>
                          <TableCell className="text-right">$450.00</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div>
            <Card
              className="overflow-hidden" x-chunk="dashboard-05-chunk-4"
            >
              <CardHeader className="flex flex-row items-start bg-muted/50">
                <div className="grid gap-0.5">
                  <CardTitle className="group flex items-center gap-2 text-lg">
                    Order Oe31b70H
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <Copy className="h-3 w-3" />
                      <span className="sr-only">Copy Order ID</span>
                    </Button>
                  </CardTitle>
                  <CardDescription>Date: November 23, 2023</CardDescription>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <Button size="sm" variant="outline" className="h-8 gap-1">
                    <Truck className="h-3.5 w-3.5" />
                    <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                      Track Order
                    </span>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="outline" className="h-8 w-8">
                        <MoreVertical className="h-3.5 w-3.5" />
                        <span className="sr-only">More</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Export</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Trash</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                  <div className="font-semibold">Order Details</div>
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Glimmer Lamps x <span>2</span>
                      </span>
                      <span>$250.00</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Aqua Filters x <span>1</span>
                      </span>
                      <span>$49.00</span>
                    </li>
                  </ul>
                  <Separator className="my-2" />
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>$299.00</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>$5.00</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span>$25.00</span>
                    </li>
                    <li className="flex items-center justify-between font-semibold">
                      <span className="text-muted-foreground">Total</span>
                      <span>$329.00</span>
                    </li>
                  </ul>
                </div>
                <Separator className="my-4" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <div className="font-semibold">Shipping Information</div>
                    <address className="grid gap-0.5 not-italic text-muted-foreground">
                      <span>Liam Johnson</span>
                      <span>1234 Main St.</span>
                      <span>Anytown, CA 12345</span>
                    </address>
                  </div>
                  <div className="grid auto-rows-max gap-3">
                    <div className="font-semibold">Billing Information</div>
                    <div className="text-muted-foreground">
                      Same as shipping address
                    </div>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold">Customer Information</div>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Customer</dt>
                      <dd>Liam Johnson</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Email</dt>
                      <dd>
                        <a href="mailto:">liam@acme.com</a>
                      </dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Phone</dt>
                      <dd>
                        <a href="tel:">+1 234 567 890</a>
                      </dd>
                    </div>
                  </dl>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold">Payment Information</div>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <dt className="flex items-center gap-1 text-muted-foreground">
                        <CreditCard className="h-4 w-4" />
                        Visa
                      </dt>
                      <dd>**** **** **** 4532</dd>
                    </div>
                  </dl>
                </div>
              </CardContent>
              <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                <div className="text-xs text-muted-foreground">
                  Updated <time dateTime="2023-11-23">November 23, 2023</time>
                </div>
                <Pagination className="ml-auto mr-0 w-auto">
                  <PaginationContent>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronLeft className="h-3.5 w-3.5" />
                        <span className="sr-only">Previous Order</span>
                      </Button>
                    </PaginationItem>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronRight className="h-3.5 w-3.5" />
                        <span className="sr-only">Next Order</span>
                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardFooter>
            </Card>
          </div>
        </main>
      
  )
}











// "use client"

// import {
//   Area,
//   AreaChart,
//   Bar,
//   BarChart,
//   CartesianGrid,
//   Label,
//   LabelList,
//   Line,
//   LineChart,
//   PolarAngleAxis,
//   RadialBar,
//   RadialBarChart,
//   Rectangle,
//   ReferenceLine,
//   XAxis,
//   YAxis,
// } from "recharts"

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import {
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart"
// import { Separator } from "@/components/ui/separator"

// export default function DashboardPage() {
//   return (
//     // <div className="chart-wrapper mx-auto flex max-w-6xl flex-col flex-wrap items-start justify-center gap-6 p-6 sm:flex-row sm:p-8">
//     //   <div className="grid w-full gap-6 sm:grid-cols-2 lg:max-w-[22rem] lg:grid-cols-1 xl:max-w-[25rem]">
//     //     <Card
//     //       className="lg:max-w-md" x-chunk="charts-01-chunk-0"
//     //     >
//     //       <CardHeader className="space-y-0 pb-2">
//     //         <CardDescription>Today</CardDescription>
//     //         <CardTitle className="text-4xl tabular-nums">
//     //           12584
//     //           <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
//     //             steps
//     //           </span>
//     //         </CardTitle>
//     //       </CardHeader>
//     //       <CardContent>
//     //         <ChartContainer
//     //           config={{
//     //             steps: {
//     //               label: "Steps",
//     //               color: "hsl(var(--chart-1))",
//     //             },
//     //           }}
//     //         >
//     //           <BarChart
//     //             accessibilityLayer
//     //             margin={{
//     //               left: -4,
//     //               right: -4,
//     //             }}
//     //             data={[
//     //               {
//     //                 date: "2024-01-01",
//     //                 steps: 2000,
//     //               },
//     //               {
//     //                 date: "2024-01-02",
//     //                 steps: 2100,
//     //               },
//     //               {
//     //                 date: "2024-01-03",
//     //                 steps: 2200,
//     //               },
//     //               {
//     //                 date: "2024-01-04",
//     //                 steps: 1300,
//     //               },
//     //               {
//     //                 date: "2024-01-05",
//     //                 steps: 1400,
//     //               },
//     //               {
//     //                 date: "2024-01-06",
//     //                 steps: 2500,
//     //               },
//     //               {
//     //                 date: "2024-01-07",
//     //                 steps: 1600,
//     //               },
//     //             ]}
//     //           >
//     //             <Bar
//     //               dataKey="steps"
//     //               fill="var(--color-steps)"
//     //               radius={5}
//     //               fillOpacity={0.6}
//     //               activeBar={<Rectangle fillOpacity={0.8} />}
//     //             />
//     //             <XAxis
//     //               dataKey="date"
//     //               tickLine={false}
//     //               axisLine={false}
//     //               tickMargin={4}
//     //               tickFormatter={(value) => {
//     //                 return new Date(value).toLocaleDateString("en-US", {
//     //                   weekday: "short",
//     //                 })
//     //               }}
//     //             />
//     //             <ChartTooltip
//     //               defaultIndex={2}
//     //               content={
//     //                 <ChartTooltipContent
//     //                   hideIndicator
//     //                   labelFormatter={(value) => {
//     //                     return new Date(value).toLocaleDateString("en-US", {
//     //                       day: "numeric",
//     //                       month: "long",
//     //                       year: "numeric",
//     //                     })
//     //                   }}
//     //                 />
//     //               }
//     //               cursor={false}
//     //             />
//     //             <ReferenceLine
//     //               y={1200}
//     //               stroke="hsl(var(--muted-foreground))"
//     //               strokeDasharray="3 3"
//     //               strokeWidth={1}
//     //             >
//     //               <Label
//     //                 position="insideBottomLeft"
//     //                 value="Average Steps"
//     //                 offset={10}
//     //                 fill="hsl(var(--foreground))"
//     //               />
//     //               <Label
//     //                 position="insideTopLeft"
//     //                 value="12,343"
//     //                 className="text-lg"
//     //                 fill="hsl(var(--foreground))"
//     //                 offset={10}
//     //                 startOffset={100}
//     //               />
//     //             </ReferenceLine>
//     //           </BarChart>
//     //         </ChartContainer>
//     //       </CardContent>
//     //       <CardFooter className="flex-col items-start gap-1">
//     //         <CardDescription>
//     //           Over the past 7 days, you have walked
//     //           <span className="font-medium text-foreground">53,305</span> steps.
//     //         </CardDescription>
//     //         <CardDescription>
//     //           You need
//     //           <span className="font-medium text-foreground">12,584</span> more
//     //           steps to reach your goal.
//     //         </CardDescription>
//     //       </CardFooter>
//     //     </Card>
//     //     <Card
//     //       className="flex flex-col lg:max-w-md" x-chunk="charts-01-chunk-1"
//     //     >
//     //       <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2 [&>div]:flex-1">
//     //         <div>
//     //           <CardDescription>Resting HR</CardDescription>
//     //           <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
//     //             62
//     //             <span className="text-sm font-normal tracking-normal text-muted-foreground">
//     //               bpm
//     //             </span>
//     //           </CardTitle>
//     //         </div>
//     //         <div>
//     //           <CardDescription>Variability</CardDescription>
//     //           <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
//     //             35
//     //             <span className="text-sm font-normal tracking-normal text-muted-foreground">
//     //               ms
//     //             </span>
//     //           </CardTitle>
//     //         </div>
//     //       </CardHeader>
//     //       <CardContent className="flex flex-1 items-center">
//     //         <ChartContainer
//     //           config={{
//     //             resting: {
//     //               label: "Resting",
//     //               color: "hsl(var(--chart-1))",
//     //             },
//     //           }}
//     //           className="w-full"
//     //         >
//     //           <LineChart
//     //             accessibilityLayer
//     //             margin={{
//     //               left: 14,
//     //               right: 14,
//     //               top: 10,
//     //             }}
//     //             data={[
//     //               {
//     //                 date: "2024-01-01",
//     //                 resting: 62,
//     //               },
//     //               {
//     //                 date: "2024-01-02",
//     //                 resting: 72,
//     //               },
//     //               {
//     //                 date: "2024-01-03",
//     //                 resting: 35,
//     //               },
//     //               {
//     //                 date: "2024-01-04",
//     //                 resting: 62,
//     //               },
//     //               {
//     //                 date: "2024-01-05",
//     //                 resting: 52,
//     //               },
//     //               {
//     //                 date: "2024-01-06",
//     //                 resting: 62,
//     //               },
//     //               {
//     //                 date: "2024-01-07",
//     //                 resting: 70,
//     //               },
//     //             ]}
//     //           >
//     //             <CartesianGrid
//     //               strokeDasharray="4 4"
//     //               vertical={false}
//     //               stroke="hsl(var(--muted-foreground))"
//     //               strokeOpacity={0.5}
//     //             />
//     //             <YAxis hide domain={["dataMin - 10", "dataMax + 10"]} />
//     //             <XAxis
//     //               dataKey="date"
//     //               tickLine={false}
//     //               axisLine={false}
//     //               tickMargin={8}
//     //               tickFormatter={(value) => {
//     //                 return new Date(value).toLocaleDateString("en-US", {
//     //                   weekday: "short",
//     //                 })
//     //               }}
//     //             />
//     //             <Line
//     //               dataKey="resting"
//     //               type="natural"
//     //               fill="var(--color-resting)"
//     //               stroke="var(--color-resting)"
//     //               strokeWidth={2}
//     //               dot={false}
//     //               activeDot={{
//     //                 fill: "var(--color-resting)",
//     //                 stroke: "var(--color-resting)",
//     //                 r: 4,
//     //               }}
//     //             />
//     //             <ChartTooltip
//     //               content={
//     //                 <ChartTooltipContent
//     //                   indicator="line"
//     //                   labelFormatter={(value) => {
//     //                     return new Date(value).toLocaleDateString("en-US", {
//     //                       day: "numeric",
//     //                       month: "long",
//     //                       year: "numeric",
//     //                     })
//     //                   }}
//     //                 />
//     //               }
//     //               cursor={false}
//     //             />
//     //           </LineChart>
//     //         </ChartContainer>
//     //       </CardContent>
//     //     </Card>
//     //   </div>
//     //   <div className="grid w-full flex-1 gap-6 lg:max-w-[20rem]">
//     //     <Card
//     //       className="max-w-xs" x-chunk="charts-01-chunk-2"
//     //     >
//     //       <CardHeader>
//     //         <CardTitle>Progress</CardTitle>
//     //         <CardDescription>
//     //           You're average more steps a day this year than last year.
//     //         </CardDescription>
//     //       </CardHeader>
//     //       <CardContent className="grid gap-4">
//     //         <div className="grid auto-rows-min gap-2">
//     //           <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
//     //             12453
//     //             <span className="text-sm font-normal text-muted-foreground">
//     //               steps/day
//     //             </span>
//     //           </div>
//     //           <ChartContainer
//     //             config={{
//     //               steps: {
//     //                 label: "Steps",
//     //                 color: "hsl(var(--chart-1))",
//     //               },
//     //             }}
//     //             className="aspect-auto h-[32px] w-full"
//     //           >
//     //             <BarChart
//     //               accessibilityLayer
//     //               layout="vertical"
//     //               margin={{
//     //                 left: 0,
//     //                 top: 0,
//     //                 right: 0,
//     //                 bottom: 0,
//     //               }}
//     //               data={[
//     //                 {
//     //                   date: "2024",
//     //                   steps: 12435,
//     //                 },
//     //               ]}
//     //             >
//     //               <Bar
//     //                 dataKey="steps"
//     //                 fill="var(--color-steps)"
//     //                 radius={4}
//     //                 barSize={32}
//     //               >
//     //                 <LabelList
//     //                   position="insideLeft"
//     //                   dataKey="date"
//     //                   offset={8}
//     //                   fontSize={12}
//     //                   fill="white"
//     //                 />
//     //               </Bar>
//     //               <YAxis dataKey="date" type="category" tickCount={1} hide />
//     //               <XAxis dataKey="steps" type="number" hide />
//     //             </BarChart>
//     //           </ChartContainer>
//     //         </div>
//     //         <div className="grid auto-rows-min gap-2">
//     //           <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
//     //             10103
//     //             <span className="text-sm font-normal text-muted-foreground">
//     //               stepsday
//     //             </span>
//     //           </div>
//     //           <ChartContainer
//     //             config={{
//     //               steps: {
//     //                 label: "Steps",
//     //                 color: "hsl(var(--muted))",
//     //               },
//     //             }}
//     //             className="aspect-auto h-[32px] w-full"
//     //           >
//     //             <BarChart
//     //               accessibilityLayer
//     //               layout="vertical"
//     //               margin={{
//     //                 left: 0,
//     //                 top: 0,
//     //                 right: 0,
//     //                 bottom: 0,
//     //               }}
//     //               data={[
//     //                 {
//     //                   date: "2023",
//     //                   steps: 10103,
//     //                 },
//     //               ]}
//     //             >
//     //               <Bar
//     //                 dataKey="steps"
//     //                 fill="var(--color-steps)"
//     //                 radius={4}
//     //                 barSize={32}
//     //               >
//     //                 <LabelList
//     //                   position="insideLeft"
//     //                   dataKey="date"
//     //                   offset={8}
//     //                   fontSize={12}
//     //                   fill="hsl(var(--muted-foreground))"
//     //                 />
//     //               </Bar>
//     //               <YAxis dataKey="date" type="category" tickCount={1} hide />
//     //               <XAxis dataKey="steps" type="number" hide />
//     //             </BarChart>
//     //           </ChartContainer>
//     //         </div>
//     //       </CardContent>
//     //     </Card>
//     //     <Card
//     //       className="max-w-xs" x-chunk="charts-01-chunk-3"
//     //     >
//     //       <CardHeader className="p-4 pb-0">
//     //         <CardTitle>Walking Distance</CardTitle>
//     //         <CardDescription>
//     //           Over the last 7 days your distance walked and run was 12.5 miles
//     //           per day.
//     //         </CardDescription>
//     //       </CardHeader>
//     //       <CardContent className="flex flex-row items-baseline gap-4 p-4 pt-0">
//     //         <div className="flex items-baseline gap-1 text-3xl font-bold tabular-nums leading-none">
//     //           125
//     //           <span className="text-sm font-normal text-muted-foreground">
//     //             milesday
//     //           </span>
//     //         </div>
//     //         <ChartContainer
//     //           config={{
//     //             steps: {
//     //               label: "Steps",
//     //               color: "hsl(var(--chart-1))",
//     //             },
//     //           }}
//     //           className="ml-auto w-[72px]"
//     //         >
//     //           <BarChart
//     //             accessibilityLayer
//     //             margin={{
//     //               left: 0,
//     //               right: 0,
//     //               top: 0,
//     //               bottom: 0,
//     //             }}
//     //             data={[
//     //               {
//     //                 date: "2024-01-01",
//     //                 steps: 2000,
//     //               },
//     //               {
//     //                 date: "2024-01-02",
//     //                 steps: 2100,
//     //               },
//     //               {
//     //                 date: "2024-01-03",
//     //                 steps: 2200,
//     //               },
//     //               {
//     //                 date: "2024-01-04",
//     //                 steps: 1300,
//     //               },
//     //               {
//     //                 date: "2024-01-05",
//     //                 steps: 1400,
//     //               },
//     //               {
//     //                 date: "2024-01-06",
//     //                 steps: 2500,
//     //               },
//     //               {
//     //                 date: "2024-01-07",
//     //                 steps: 1600,
//     //               },
//     //             ]}
//     //           >
//     //             <Bar
//     //               dataKey="steps"
//     //               fill="var(--color-steps)"
//     //               radius={2}
//     //               fillOpacity={0.2}
//     //               activeIndex={6}
//     //               activeBar={<Rectangle fillOpacity={0.8} />}
//     //             />
//     //             <XAxis
//     //               dataKey="date"
//     //               tickLine={false}
//     //               axisLine={false}
//     //               tickMargin={4}
//     //               hide
//     //             />
//     //           </BarChart>
//     //         </ChartContainer>
//     //       </CardContent>
//     //     </Card>
       
//     //   </div>
//     //   <div className="grid w-full flex-1 gap-6">
        
//     //     <Card
//     //       className="max-w-xs" x-chunk="charts-01-chunk-6"
//     //     >
//     //       <CardHeader className="p-4 pb-0">
//     //         <CardTitle>Active Energy</CardTitle>
//     //         <CardDescription>
//     //           You're burning an average of 754 calories per day. Good job!
//     //         </CardDescription>
//     //       </CardHeader>
//     //       <CardContent className="flex flex-row items-baseline gap-4 p-4 pt-2">
//     //         <div className="flex items-baseline gap-2 text-3xl font-bold tabular-nums leading-none">
//     //           1,254
//     //           <span className="text-sm font-normal text-muted-foreground">
//     //             kcal/day
//     //           </span>
//     //         </div>
//     //         <ChartContainer
//     //           config={{
//     //             calories: {
//     //               label: "Calories",
//     //               color: "hsl(var(--chart-1))",
//     //             },
//     //           }}
//     //           className="ml-auto w-[64px]"
//     //         >
//     //           <BarChart
//     //             accessibilityLayer
//     //             margin={{
//     //               left: 0,
//     //               right: 0,
//     //               top: 0,
//     //               bottom: 0,
//     //             }}
//     //             data={[
//     //               {
//     //                 date: "2024-01-01",
//     //                 calories: 354,
//     //               },
//     //               {
//     //                 date: "2024-01-02",
//     //                 calories: 514,
//     //               },
//     //               {
//     //                 date: "2024-01-03",
//     //                 calories: 345,
//     //               },
//     //               {
//     //                 date: "2024-01-04",
//     //                 calories: 734,
//     //               },
//     //               {
//     //                 date: "2024-01-05",
//     //                 calories: 645,
//     //               },
//     //               {
//     //                 date: "2024-01-06",
//     //                 calories: 456,
//     //               },
//     //               {
//     //                 date: "2024-01-07",
//     //                 calories: 345,
//     //               },
//     //             ]}
//     //           >
//     //             <Bar
//     //               dataKey="calories"
//     //               fill="var(--color-calories)"
//     //               radius={2}
//     //               fillOpacity={0.2}
//     //               activeIndex={6}
//     //               activeBar={<Rectangle fillOpacity={0.8} />}
//     //             />
//     //             <XAxis
//     //               dataKey="date"
//     //               tickLine={false}
//     //               axisLine={false}
//     //               tickMargin={4}
//     //               hide
//     //             />
//     //           </BarChart>
//     //         </ChartContainer>
//     //       </CardContent>
//     //     </Card>
     
//     //   </div>
//     // </div>



//     <>
    
    
//     </>
//   )
// }
