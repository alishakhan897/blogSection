// Write your JS code here
import './index.css'

const Listes = props => {
  const {blogDetail} = props
  const {title, description, publishedDate} = blogDetail

  return (
    <div className="blog-list">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{publishedDate}</p>
    </div>
  )
}

export default Listes
