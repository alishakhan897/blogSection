// Write your JS code here
import './index.css'
import Listes from '../BlogList'

const BlogItem = () => {
  return (
    <div className="blog-item">
      {blogsList.map(blog => (
        <Listes key={blog.id} blogDetail={blog} />
      ))}
    </div>
  )
}
export default BlogItem
