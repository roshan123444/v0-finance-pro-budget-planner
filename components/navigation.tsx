"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/calculator", label: "Calculator" },
    { href: "/about", label: "About" },
  ]

  return (
    <nav className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <span className="text-primary-foreground font-bold text-sm">FP</span>
            </div>
            <span className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
              FinancePro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-200 hover:text-primary relative",
                  pathname === item.href
                    ? "text-primary after:absolute after:bottom-[-20px] after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild className="shadow-sm hover:shadow-md transition-all duration-200">
              <Link href="/calculator">Start Budgeting</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="w-5 h-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">FP</span>
                    </div>
                    <span className="font-bold text-xl text-foreground">FinancePro</span>
                  </div>
                  <div className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "text-lg font-medium transition-colors py-2 px-3 rounded-lg",
                          pathname === item.href
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                  <Button asChild className="w-full mt-6" onClick={() => setIsOpen(false)}>
                    <Link href="/calculator">Start Budgeting</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
