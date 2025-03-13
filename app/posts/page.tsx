import PostsList from "@/components/posts/posts-list"
import { Suspense } from "react"
import { PostsSkeleton } from "@/components/posts/posts-skeleton"

export const metadata = {
  title: "Posts | JSONPlaceholder App",
  description: "List of posts from JSONPlaceholder API",
}

export default function PostsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <Suspense fallback={<PostsSkeleton />}>
        <PostsList />
      </Suspense>
    </div>
  )
}

