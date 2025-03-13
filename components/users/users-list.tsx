import { getUsers } from "@/lib/api"
import { UserSearch } from "./user-search"
import { Suspense } from "react"

export default async function UsersList() {
  const users = await getUsers()

  return (
    <div>
      <Suspense fallback={<div>Loading search...</div>}>
        <UserSearch users={users} />
      </Suspense>
    </div>
  )
}

