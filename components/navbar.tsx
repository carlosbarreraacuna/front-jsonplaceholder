import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-bold text-xl">
          JSONPlaceholder App
        </Link>
        <nav className="flex items-center gap-4">
          <Button asChild variant="ghost">
            <Link href="/users">Users</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/posts">Posts</Link>
          </Button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

