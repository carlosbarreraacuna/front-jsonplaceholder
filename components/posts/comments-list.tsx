"use client"

import type { Comment } from "@/types"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useComments } from "@/hooks/use-comments"

interface CommentsListProps {
  initialComments: Comment[]
}

export function CommentsList({ initialComments }: CommentsListProps) {
  const { comments } = useComments(initialComments)

  return (
    <div className="space-y-4">
      {comments.length === 0 ? (
        <p className="text-center py-4 text-muted-foreground">No comments yet</p>
      ) : (
        comments.map((comment) => (
          <Card key={comment.id}>
            <CardHeader className="py-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <p className="font-medium">{comment.name}</p>
                <p className="text-sm text-muted-foreground">{comment.email}</p>
              </div>
            </CardHeader>
            <CardContent className="py-3">
              <p className="text-sm">{comment.body}</p>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}

