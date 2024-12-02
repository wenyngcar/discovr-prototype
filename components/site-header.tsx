import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">Discovr</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
  <Link className="transition-colors hover:text-foreground/80 text-foreground" href="/search">
    Find Space
  </Link>
  <Link className="transition-colors hover:text-foreground/80 text-foreground" href="/list-property">
    List Property
  </Link>
</nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for spaces..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
              </div>
            </form>
          </div>
          <nav className="flex items-center">
            <Button variant="ghost" className="mr-2">
              Log in
            </Button>
            <Button>Sign up</Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

