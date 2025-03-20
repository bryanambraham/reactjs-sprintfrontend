"use client"

import { useState, useEffect } from "react"
import { Loader2 } from "lucide-react"

const BlogGrid = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log("APP_URL:", import.meta.env.VITE_API_URL)
        const response = await fetch(`${import.meta.env.VITE_API_URL}/getblog`)
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts")
        }
        const data = await response.json()
        setPosts(data.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load blog posts")
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-[#FF6600]" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-8">
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <a href="#" className="block">
              <div className="relative aspect-[16/9]">
                <img
                  src={post.image ? post.image : "/ekspedisi.png"}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </a>
            <div className="p-6">
              <a href="#">
                <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-[#FF6600] transition-colors line-clamp-2">
                  {post.title}
                </h2>
              </a>
              <div className="text-sm text-gray-600 mb-3">
                by {post.writer} |{" "}
                {new Date(post.created_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div className="text-sm text-gray-600 mb-3">{post.summary}</div>
              <a
                href={`/Blog/${post.id}`}
                className="inline-block mt-4 text-[#FF6600] hover:text-[#ff751a] font-semibold transition-colors"
              >
                Read More →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default BlogGrid

