"use client"

import type { Post } from "@/types"
import { useState } from "react"
import { PostCard } from "./post-card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PostsFilterProps {
  posts: Post[]
}

type SortOption = "default" | "asc" | "desc"

export function PostsFilter({ posts }: PostsFilterProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOption, setSortOption] = useState<SortOption>("default")

  const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()))

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortOption === "default") return 0
    if (sortOption === "asc") return a.title.localeCompare(b.title)
    return b.title.localeCompare(a.title)
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={sortOption} onValueChange={(value) => setSortOption(value as SortOption)}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="asc">Title (A-Z)</SelectItem>
            <SelectItem value="desc">Title (Z-A)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {sortedPosts.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-muted-foreground">No posts found</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {sortedPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}

