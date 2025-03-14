import { getPostById, getPostComments } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CommentsList } from "@/components/posts/comments-list"
import { CommentForm } from "@/components/posts/comment-form"
import { Suspense } from "react"
import { CommentsProvider } from "@/hooks/use-comments"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | JSONPlaceholder App`,
    description: post.body.substring(0, 160),
  }
}

export default async function PostDetailPage({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id)

  if (!post) {
    notFound()
  }

  const comments = await getPostComments(params.id)

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Button asChild variant="outline">
          <Link href="/posts" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Posts
          </Link>
        </Button>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="whitespace-pre-line">{post.body}</p>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Comments</h2>
        <CommentsProvider initialComments={comments}>
          <CommentForm postId={post.id} />
          <Suspense fallback={<div>Loading comments...</div>}>
            <CommentsList initialComments={comments} />
          </Suspense>
        </CommentsProvider>
      </div>
    </div>
  )
}

