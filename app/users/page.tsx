import UsersList from "@/components/users/users-list"
import { Suspense } from "react"
import { UsersSkeleton } from "@/components/users/users-skeleton"

export const metadata = {
  title: "Users | JSONPlaceholder App",
  description: "List of users from JSONPlaceholder API",
}

export default function UsersPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <Suspense fallback={<UsersSkeleton />}>
        <UsersList />
      </Suspense>
    </div>
  )
}

