"use client"

import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

function BlogPost() {
  const { slug } = useParams() // Get slug from URL using React Router
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    if (slug) {
      // Check if slug is a number (old format)
      const isNumeric = /^\d+$/.test(slug)

      const fetchPost = async () => {
        try {
          // If it's a numeric ID, use that for fetching
          const endpoint = isNumeric
            ? `${import.meta.env.VITE_API_URL}/getblog/${slug}`
            : `${import.meta.env.VITE_API_URL}/getblogbyslug/${slug}`

          const response = await fetch(endpoint)
          if (!response.ok) {
            throw new Error("Failed to fetch blog post")
          }
          const data = await response.json()
          setPost(data)
        } catch (err) {
          setError(err instanceof Error ? err.message : "Failed to load blog post")
        } finally {
          setLoading(false)
        }
      }

      fetchPost()
    }
  }, [slug])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-secondary">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 bg-secondary">
        <div className="bg-red-900 border border-red-700 text-text-primary px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 bg-secondary">
        <div className="text-center py-10 text-text-primary">Blog post not found</div>
      </div>
    )
  }

  return (
    <div className="bg-secondary min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary-dark mb-6">
          <ArrowLeft size={16} className="mr-2" />
          Back to Blog
        </Link>

        <article className="bg-accent rounded-lg shadow-md overflow-hidden">
          <div className="relative">
            <img
              src={post.image || "/default-image.jpg"}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
          </div>

          <div className="p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-4">{post.title}</h1>

            <div className="flex flex-wrap items-center text-text-secondary mb-6">
              <div className="mr-6 mb-2">
                <span>By {post.writer}</span>
              </div>
              <div className="mb-2">
                <span>
                  {new Date(post.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>

            <div className="prose max-w-none text-text-primary">{post.content}</div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default BlogPost

