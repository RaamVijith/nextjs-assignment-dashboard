import Link from "next/link"
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
  Columns2
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const MobileNav = () => {
  return (
    <>
    <Sheet >
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden "
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col bg-[#2563EB]">
              <nav className="grid gap-2 text-lg font-medium pt-10">
                {/* <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
                </Link> */}

<Link
                href="#"
                className="flex items-center text-xl gap-3 rounded-lg px-3 py-2 text-white transition-all hover:text-black"
              > 
               <LayoutDashboard className="h-5 w-5"/>
                Dashboard
              </Link>
              
              <Link
                href="#"
                className="flex items-center text-xl gap-3 rounded-lg px-3 py-2 text-white transition-all hover:text-black"
              > 
               <CircleUser className="h-5 w-5"/>
                Contacts
              </Link>
              <Link
                href="#"
                className="flex items-center text-xl gap-3 rounded-lg px-3 py-2 text-white transition-all hover:text-black"
              >
                <UsersRound className="h-5 w-5"/>
                Leads
              </Link>
              <Link
                href="/"
                className="flex items-center text-xl gap-3 rounded-lg px-3 py-2 text-white transition-all hover:text-black"
              >
                <Lightbulb className="h-5 w-5"/>
                Opportunity
              </Link>
              <Link
                href="/customers"
                className="flex items-center text-xl gap-3 rounded-lg px-3 py-2 text-white transition-all hover:text-black"
              >
                <Handshake className="h-5 w-5"/>
                Customers
              </Link>
              <Link
                href="/"
                className="flex items-center text-xl gap-3 rounded-lg px-3 py-2 text-white transition-all hover:text-black"
              >
                <Columns2 className="h-5 w-5"/>
                Contents
              </Link>
              </nav>
              
            </SheetContent>
          </Sheet>
    </>
  )
}

export default MobileNav