import { getPosts } from "@/lib/api"
import { PostsFilter } from "./posts-filter"

export default async function PostsList() {
  const posts = await getPosts()

  return <PostsFilter posts={posts} />
}

