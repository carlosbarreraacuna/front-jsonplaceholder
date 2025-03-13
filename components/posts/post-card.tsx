import type { Post } from "@/types"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3 text-muted-foreground">{post.body}</p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/posts/${post.id}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

