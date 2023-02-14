import './index.css'

const Category = props => {
  const {details} = props
  const {title, imageUrl} = details
  return (
    <li className="category-item">
      <div className="category-image-sec">
        <img src={imageUrl} alt={title} className="category-image" />
      </div>
      <h3 className="category-title">{title}</h3>
    </li>
  )
}

export default Category
