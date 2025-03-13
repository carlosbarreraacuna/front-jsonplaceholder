import type { User } from "@/types"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, UserIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface UserCardProps {
  user: User
}

export function UserCard({ user }: UserCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserIcon className="h-5 w-5" />
          {user.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">@{user.username}</p>
          <p className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4" />
            {user.email}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/users/${user.id}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

