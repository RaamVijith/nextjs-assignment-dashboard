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

const Sidebar = () => {
  return (
    <>
    <div className="hidden border-r bg-[#2563EB] md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          {/* <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Acme Inc</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div> */}
          <div className="flex-1 pt-20 ">
            <nav className="grid gap-3 items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/"
                className="flex items-center text-xl gap-3 rounded-lg px-3 py-2 text-white transition-all hover:text-black"
              > 
               <LayoutDashboard className="h-5 w-5"/>
                Dashboard
              </Link>
              
              <Link
                href="/contacts"
                className="flex items-center text-xl gap-3 rounded-lg px-3 py-2 text-white transition-all hover:text-black"
              > 
               <CircleUser className="h-5 w-5"/>
                Contacts
              </Link>
              <Link
                href="/leads"
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
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Sidebar