"use client"

import type React from "react"

import type { Comment } from "@/types"
import { createContext, useContext, useState } from "react"

interface CommentsContextType {
  comments: Comment[]
  addComment: (comment: Comment) => void
}

const CommentsContext = createContext<CommentsContextType | undefined>(undefined)

export function CommentsProvider({
  children,
  initialComments = [],
}: {
  children: React.ReactNode
  initialComments?: Comment[]
}) {
  const [comments, setComments] = useState<Comment[]>(initialComments)

  const addComment = (comment: Comment) => {
    setComments((prev) => [comment, ...prev])
  }

  return <CommentsContext.Provider value={{ comments, addComment }}>{children}</CommentsContext.Provider>
}

export function useComments() {
  const context = useContext(CommentsContext)

  if (context === undefined) {
    throw new Error("useComments must be used within a CommentsProvider")
  }

  return context
}

