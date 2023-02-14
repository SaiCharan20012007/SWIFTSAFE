import './index.css'

const BestSellingProduct = props => {
  const {details} = props
  const {productName, price, starImage} = details
  console.log(details)
  return (
    <li className="best-selling-product">
      <img
        src="https://fable.club/wp-content/uploads/2022/05/placeholder-600x600.jpeg"
        className="best-selling-product-image"
        alt="fable"
      />
      <div className="best-selling-product-des">
        <p className="best-selling-product-name">{productName}</p>
        <h4 className="best-selling-product-price">RS.{price}</h4>
        <div className="rating">
          <img src={starImage} className="stars" alt="4star" />
          <span className="reviewsNumber">(5 Reviews)</span>
        </div>
      </div>
    </li>
  )
}

export default BestSellingProduct
