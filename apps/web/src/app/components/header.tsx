"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@pulzeup/ui/components/ui/avatar";
import { Badge } from "@pulzeup/ui/components/ui/badge";
import { Button } from "@pulzeup/ui/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@pulzeup/ui/components/ui/dropdown-menu";
import { Input } from "@pulzeup/ui/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@pulzeup/ui/components/ui/sheet";

import { signOut, useSession } from "next-auth/react";
import { LOGIN_ROUTE } from "@/routes";

export default function Header() {
  const router = useRouter();
  const session = useSession();

  return (
    <header className="z-50 sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="h-6 w-6" />
          <span className="font-bold">PulzeUp</span>
        </Link>
        {/* <Link
          href="#"
          className="text-foreground transition-colors hover:text-foreground"
        >
          Dashboard
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Orders
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Products
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Customers
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Analytics
        </Link> */}
      </nav>
      {/* <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link href="#" className="hover:text-foreground">
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Orders
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Customers
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Analytics
            </Link>
          </nav>
        </SheetContent>
      </Sheet> */}
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {session.data?.user?.image ? (
              <Avatar className="cursor-pointer">
                <AvatarImage src={session.data?.user?.image} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ) : (
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            )}
          </DropdownMenuTrigger>
          {session.status === "authenticated" ? (
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => signOut()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          ) : (
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => router.push(LOGIN_ROUTE)}>
                Login
              </DropdownMenuItem>
            </DropdownMenuContent>
          )}
        </DropdownMenu>
        <div className="relative">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-4 w-4" />
          </Button>
          <Badge className="absolute rounded-full -bottom-1 -right-1">1</Badge>
        </div>
      </div>
    </header>
  );
}
