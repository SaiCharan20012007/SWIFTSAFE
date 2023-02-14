import './index.css'

const Testimonial = props => {
  const {details} = props
  const {imageUrl, name, job, feedback} = details
  return (
    <li className="testimonial-item">
      <div className="profile-section">
        <img src={imageUrl} alt={name} className="profile" />
        <h5 className="name">{name}</h5>
        <p className="job">{job}</p>
      </div>
      <div className="description-section">
        <img
          src="http://clipart-library.com/new_gallery/104-1043568_5-star-rating-png.png"
          alt="5star"
          className="star-image"
        />
        <p className="feedback">{feedback}</p>
      </div>
    </li>
  )
}
export default Testimonial
