import type { Comment, Post, User } from "@/types"

const API_BASE_URL = "https://jsonplaceholder.typicode.com"

export async function getUsers(): Promise<User[]> {
  const response = await fetch(`${API_BASE_URL}/users`)

  if (!response.ok) {
    throw new Error("Failed to fetch users")
  }

  return response.json()
}

export async function getUserById(id: string): Promise<User | null> {
  const response = await fetch(`${API_BASE_URL}/users/${id}`)

  if (response.status === 404) {
    return null
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch user with ID ${id}`)
  }

  return response.json()
}

export async function getPosts(): Promise<Post[]> {
  const response = await fetch(`${API_BASE_URL}/posts`)

  if (!response.ok) {
    throw new Error("Failed to fetch posts")
  }

  return response.json()
}

export async function getPostById(id: string): Promise<Post | null> {
  const response = await fetch(`${API_BASE_URL}/posts/${id}`)

  if (response.status === 404) {
    return null
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch post with ID ${id}`)
  }

  return response.json()
}

export async function getPostComments(postId: string): Promise<Comment[]> {
  const response = await fetch(`${API_BASE_URL}/posts/${postId}/comments`)

  if (!response.ok) {
    throw new Error(`Failed to fetch comments for post with ID ${postId}`)
  }

  return response.json()
}

