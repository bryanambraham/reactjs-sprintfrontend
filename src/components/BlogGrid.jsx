"use client"

import { useState, useEffect } from "react"
import { Loader2, ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

const BlogGrid = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6 // Show 6 posts per page (3 in top row, 3 in bottom row)

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

  // Function to create a slug from a title
  const createSlug = (title, id) => {
    return `${title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")}-${id}`
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
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

  // Calculate pagination values
  const totalPages = Math.ceil(posts.length / postsPerPage)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1))

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map((post, index) => {
          const postSlug = createSlug(post.title, post.id)

          return (
            <article
              key={post.id}
              className="bg-accent rounded-lg shadow-md overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={(index % postsPerPage) * 100}
            >
              <Link to={`/blog/${postSlug}`} className="block">
                <div className="relative aspect-[16/9]">
                  <img
                    src={post.image ? post.image : "/ekspedisi.png"}
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </Link>
              <div className="p-6">
                <Link to={`/blog/${postSlug}`}>
                  <h2 className="text-xl font-bold text-text-primary mb-2 hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                </Link>
                <div className="text-sm text-text-secondary mb-3">
                  by {post.writer} |{" "}
                  {new Date(post.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <div className="text-sm text-text-secondary mb-3">{post.summary}</div>
                <Link
                  to={`/blog/${postSlug}`}
                  className="inline-block mt-4 text-primary hover:text-primary-dark font-semibold transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </article>
          )
        })}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-12" data-aos="fade-up">
          <nav className="flex items-center space-x-2">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`p-2 rounded-md ${
                currentPage === 1
                  ? "text-text-secondary bg-accent-dark cursor-not-allowed"
                  : "text-text-primary bg-accent hover:bg-primary hover:text-white"
              } transition-colors`}
              aria-label="Previous page"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`w-10 h-10 rounded-md ${
                    currentPage === i + 1
                      ? "bg-primary text-white"
                      : "bg-accent text-text-primary hover:bg-primary-dark hover:text-white"
                  } transition-colors`}
                  aria-label={`Page ${i + 1}`}
                  aria-current={currentPage === i + 1 ? "page" : undefined}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-md ${
                currentPage === totalPages
                  ? "text-text-secondary bg-accent-dark cursor-not-allowed"
                  : "text-text-primary bg-accent hover:bg-primary hover:text-white"
              } transition-colors`}
              aria-label="Next page"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </nav>
        </div>
      )}
    </div>
  )
}

export default BlogGrid

