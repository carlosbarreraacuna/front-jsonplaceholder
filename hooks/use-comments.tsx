"use client"

import type React from "react"

import type { Comment } from "@/types"
import { createContext, useContext, useState, useMemo } from "react"

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

export function useComments(initialComments?: Comment[]) {
  const context = useContext(CommentsContext)

  const localComments = useState<Comment[]>(initialComments || [])
  const localContextValue = useMemo(() => {
    const [comments, setComments] = localComments

    const addComment = (comment: Comment) => {
      setComments((prev) => [comment, ...prev])
    }

    return { comments, addComment }
  }, [localComments])

  if (context === undefined) {
    if (initialComments) {
      return localContextValue
    }

    throw new Error("useComments must be used within a CommentsProvider")
  }

  return context
}

