import './index.css'
import {HiOutlineShoppingBag} from 'react-icons/hi'

const SpringPetProduct = props => {
  const {details} = props
  const {productName, price, starImage} = details
  return (
    <li className="spring-pet-product-container">
      <div className="spring-pet-image">
        <button className="add-to-cart-btn" type="button">
          <HiOutlineShoppingBag /> Add to cart
        </button>
      </div>
      <h4 className="spring-pet-product-price">₹ {price}</h4>
      <p className="spring-pet-product-name">{productName}</p>
      <img src={starImage} alt="star" className="rating-star-size" />
    </li>
  )
}

export default SpringPetProduct
