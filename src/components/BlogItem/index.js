import './index.css'
import {CgProfile} from 'react-icons/cg'
import {AiOutlineCalendar} from 'react-icons/ai'

const BlogItem = props => {
  const {details} = props
  const {imageUrl, name, date, title, description} = details
  return (
    <li className="blog-item">
      <img src={imageUrl} alt={title} className="blog-image" />
      <div className="author-details">
        <div className="b1">
          <CgProfile className="blog-profile" />

          <h4>
            <span>By </span>
            {name}
          </h4>
        </div>
        <div className="b1">
          <AiOutlineCalendar className="blog-profile" />
          <p className="date"> {date}</p>
        </div>
      </div>
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <button type="button" className="read-more">
        Read More
      </button>
    </li>
  )
}
export default BlogItem
