import BlogGrid from "../components/BlogGrid"

function Blog() {
  return (
    <main className="min-h-screen bg-secondary">
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Blog & Articles</h1>
          <p className="mt-4 text-center text-text-primary max-w-2xl mx-auto">
            Stay updated with the latest news, tips, and insights about shipping and logistics in Indonesia
          </p>
        </div>
      </div>
      <BlogGrid />
    </main>
  )
}

export default Blog

