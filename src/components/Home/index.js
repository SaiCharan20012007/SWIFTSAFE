import './index.css'
import {BsSearch} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Slider from 'react-slick'
import {Link} from 'react-router-dom'
import Category from '../Category'
import BestSellingProduct from '../BestSellingProduct'
import SpringPetProduct from '../SpringPetProduct'
import BlogItem from '../BlogItem'
import Testimonial from '../Testimonial'
import Footer from '../Footer'
import 'slick-carousel/slick/slick.css'

import 'slick-carousel/slick/slick-theme.css'

const brandImages = [
  {
    id: 1,
    imgUrl: 'https://fable.club/wp-content/uploads/2022/05/brand-1.svg',
  },
  {
    id: 2,
    imgUrl: 'https://fable.club/wp-content/uploads/2022/06/brand-2.svg',
  },
  {
    id: 3,
    imgUrl: 'https://fable.club/wp-content/uploads/2022/06/brand-3.svg',
  },
  {
    id: 4,
    imgUrl: 'https://fable.club/wp-content/uploads/2022/06/brand-4.svg',
  },
  {
    id: 5,
    imgUrl: 'https://fable.club/wp-content/uploads/2022/06/brand-6.svg',
  },
  {
    id: 6,
    imgUrl: 'https://fable.club/wp-content/uploads/2022/06/brand-6.svg',
  },
  {
    id: 7,
    imgUrl: 'https://fable.club/wp-content/uploads/2022/06/brand-7.svg',
  },
]
const galleryImages = [
  {
    id: 1,
    imageUrl: 'https://fable.club/wp-content/uploads/2022/05/gallery_1.jpg',
  },
  {
    id: 2,
    imageUrl: 'https://fable.club/wp-content/uploads/2022/05/gallery_2.jpg',
  },
  {
    id: 3,
    imageUrl: 'https://fable.club/wp-content/uploads/2022/06/gallery_3.jpg',
  },
  {
    id: 4,
    imageUrl: 'https://fable.club/wp-content/uploads/2022/05/gallery_4.jpg',
  },
  {
    id: 5,
    imageUrl: 'https://fable.club/wp-content/uploads/2022/05/gallery_5.jpg',
  },
]
const testimonialsData = [
  {
    id: 1,
    imageUrl: 'https://fable.club/wp-content/uploads/2022/05/avatar2.jpg',
    name: 'Waylan S',
    job: 'Cat Owner',
    feedback:
      "This is simply unbelievable! Pet shop did exactly what you said it does. I'm good to go. Pet shop is great. One cats horrid breath...gone! One cat from a bit 'toround' to almost perfect weight.",
  },
  {
    id: 2,
    imageUrl: 'https://fable.club/wp-content/uploads/2022/05/avatar3.jpg',
    name: 'Jack Morrison',
    job: 'Dog Owner',
    feedback:
      'Thank you so much! My cat has severe food allergies and pretty much can only eat rabbit, apples, and chicken. This is the only way I can feed her without her throwing up all the time and chewing her fur out',
  },
  {
    id: 3,
    imageUrl: 'https://fable.club/wp-content/uploads/2022/05/avatar1.jpg',
    name: 'John Alvy ',
    job: 'Engineer',
    feedback:
      ' These are the perfect size for our small dog. The design is cute and the rubber on the bottom is great because it makes them more durable. They’ve held up to being tipped and played with by the baby and are easy to clean. ',
  },
]
const blogData = [
  {
    id: 1,
    imageUrl:
      'https://fable.club/wp-content/uploads/2022/05/blog-1-1070x510-1-820x500.jpg',
    name: 'Rapelly11akhil',
    date: 'November 12 2022',
    title: 'How to Choose the Right Bully Stick for Your Dog',
    description:
      'Below is an excerpt of porch.com’s article “Moving With Pets? We Have the Experts’ Advice to Do It Properly”. For…',
  },
  {
    id: 2,
    imageUrl:
      'https://fable.club/wp-content/uploads/2022/05/placeholder-820x500.jpeg',
    name: 'Rapelly11akhil',
    date: 'September 7 2022',
    title: 'Saving Lives: Animal House Shelter And Downtown Pet Supply',
    description:
      'Below is an excerpt of porch.com’s article “Moving With Pets? We Have the Experts’ Advice to Do It Properly”. For…',
  },
  {
    id: 3,
    imageUrl:
      'https://fable.club/wp-content/uploads/2022/05/placeholder-820x500.jpeg',
    name: 'Rapelly11akhil',
    date: 'September 7 2022',
    title: 'Himalayan Yak Chews: 11 Benefits You Need To Know',
    description:
      'Below is an excerpt of porch.com’s article “Moving With Pets? We Have the Experts’ Advice to Do It Properly”. For…',
  },
]

const bestSellingProducts = [
  {
    id: 1,
    productName: 'Practical Rubber Bottle',
    price: 131.01,

    starImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/4_stars.svg/1280px-4_stars.svg.png',
  },
  {
    id: 2,
    productName: 'Rustic Iron Hat',
    price: 941.23,
    starImage: 'http://www.clipartbest.com/cliparts/xTg/onG/xTgonGBTA.jpeg',
  },
  {
    id: 3,

    productName: 'Fantastic Plastic clock',
    price: 305.49,
    starImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/4_stars.svg/1280px-4_stars.svg.png',
  },
  {
    id: 4,

    productName: 'Intelligent Wooden shirt',
    price: 426.03,
    starImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/4_stars.svg/1280px-4_stars.svg.png',
  },

  {
    id: 5,

    productName: 'Rustic Marble Car',
    price: 899.41,
    starImage:
      'https://www.pngarts.com/files/8/Golden-3-Stars-PNG-Free-Download.png',
  },
  {
    id: 6,
    productName: 'Heavy Duty Wood knife',
    price: 169.93,
    starImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/4_stars.svg/1280px-4_stars.svg.png',
  },
  {
    id: 7,
    productName: 'Ergonomic paper',
    price: 611.82,
    starImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/4_stars.svg/1280px-4_stars.svg.png',
  },
  {
    id: 8,
    productName: 'Gorgeous Bronze Knife',
    price: 368.84,
    starImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/4_stars.svg/1280px-4_stars.svg.png',
  },
]

const categories = [
  {
    id: 1,
    imageUrl: 'https://fable.club/wp-content/uploads/2022/06/categories-3.jpg',
    title: 'Furniture',
  },
  {
    id: 2,
    imageUrl: 'https://fable.club/wp-content/uploads/2022/06/categories-4.jpg',
    title: 'Toys',
  },
  {
    id: 3,
    imageUrl: 'https://fable.club/wp-content/uploads/2022/05/categories-5.jpg',
    title: 'Beds',
  },
  {
    id: 4,
    imageUrl: 'https://fable.club/wp-content/uploads/2022/05/categories-6.jpg',
    title: 'Bowls',
  },
  {
    id: 5,
    imageUrl: 'https://fable.club/wp-content/uploads/2022/05/categories-8.jpg',
    title: 'Crates',
  },
  {
    id: 6,
    imageUrl: 'https://fable.club/wp-content/uploads/2022/05/categories-9.jpg',
    title: 'Flea & Tick',
  },
  {
    id: 7,
    imageUrl: 'https://fable.club/wp-content/uploads/2022/05/categories-10.jpg',
    title: 'Clothings',
  },
  {
    id: 8,
    imageUrl: 'https://fable.club/wp-content/uploads/2022/06/categories-1.jpg',
    title: 'Food',
  },
  {
    id: 9,
    imageUrl: 'https://fable.club/wp-content/uploads/2022/05/categories-2.jpg',
    title: 'Pharmacy',
  },
]

const propertiesLaptop = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
}
const propertiesMobile = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
}

const categoryLaptopProperties = {
  dots: false,
  infinite: true,
  speed: 400,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
}
const categoryMobileProperties = {
  dots: false,
  infinite: true,
  speed: 400,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
}
const testimonialProperties = {
  dots: false,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
}

const Home = () => (
  <>
    <div className="section-a">
      <div className="section-a1">
        <h4 className="discount">Get 10% Discount</h4>
        <h1 className="title">Best Food And Toys For Your Dog</h1>
        <p className="home-description">
          Help Your Dog maintain a healthier weight.
        </p>
      </div>
      <div className="section-a2">
        <img
          src="https://fable.club/wp-content/uploads/revslider/slider-1/rev_home2_9.png"
          alt="dog"
          className="home-image-1"
        />
        <img
          src="https://fable.club/wp-content/uploads/revslider/slider-1/rev_home2_01.png"
          alt="food"
          className="home-image"
        />
        <img
          src="https://fable.club/wp-content/uploads/revslider/slider-1/rev_home7_16.png"
          alt="cat"
          className="home-image-3"
        />
      </div>
    </div>

    <div className="nav-mbl">
      <Link to="/search">
        <BsSearch />
      </Link>
      <Link to="/login">
        <CgProfile />
      </Link>
      <Link to="/cart">
        <AiOutlineShoppingCart />
      </Link>
    </div>

    <div className="best-selling-products-section">
      <div>
        <img
          src="https://clipartsign.com/upload/2016/02/21/clipart-dog-paw-print-clipart-2.png"
          alt="foot"
          className="footimage"
        />
        <div className="tiny-red-card">Best Selling Products.</div>
      </div>
      <ul className="best-selling-products-cards-lap">
        <Slider className="slider" {...propertiesLaptop}>
          {bestSellingProducts.map(item => (
            <BestSellingProduct key={item.id} details={item} />
          ))}
        </Slider>
      </ul>
      <ul className="best-selling-products-cards-mbl">
        <Slider className="slider" {...propertiesMobile}>
          {bestSellingProducts.map(item => (
            <BestSellingProduct key={item.id} details={item} />
          ))}
        </Slider>
      </ul>
    </div>
    <div className="percent-discounts-images">
      <img
        src="https://res.cloudinary.com/dwzaz0hvq/image/upload/v1675799065/Screenshot_38_pdtv3c.png"
        alt="a"
        className="discounts-image"
      />
      <img
        src="https://res.cloudinary.com/dwzaz0hvq/image/upload/v1675799144/Screenshot_39_ubogjb.png"
        alt="b"
        className="discounts-image"
      />
      <img
        src="https://res.cloudinary.com/dwzaz0hvq/image/upload/v1675799271/Screenshot_40_ubcxcz.png"
        alt="c"
        className="discounts-image"
      />
    </div>
    <div className="spring-pet-collection-section">
      <div>
        <img
          src="https://clipartsign.com/upload/2016/02/21/clipart-dog-paw-print-clipart-2.png"
          alt="foot"
          className="footimage"
        />
        <h2 className="spring-pet-title">Spring Pet Collection</h2>
      </div>
      <ul className="spring-pet-content-lap">
        <Slider className="slider" {...propertiesLaptop}>
          {bestSellingProducts.map(item => (
            <SpringPetProduct key={item.id} details={item} />
          ))}
        </Slider>
      </ul>
      <ul className="spring-pet-content-mbl">
        <Slider className="slider" {...propertiesMobile}>
          {bestSellingProducts.map(item => (
            <SpringPetProduct key={item.id} details={item} />
          ))}
        </Slider>
      </ul>
    </div>
    <div className="category-section">
      <div>
        <img
          src="https://clipartsign.com/upload/2016/02/21/clipart-dog-paw-print-clipart-2.png"
          alt="foot"
          className="footimage"
        />
        <h2 className="spring-pet-title">Browse By Categories</h2>
      </div>

      <ul className="spring-pet-content-mbl">
        <Slider className="slider" {...categoryMobileProperties}>
          {categories.map(item => (
            <Category key={item.id} details={item} />
          ))}
        </Slider>
      </ul>
      <ul className="spring-pet-content-lap">
        <Slider className="slider" {...categoryLaptopProperties}>
          {categories.map(item => (
            <Category key={item.id} details={item} />
          ))}
        </Slider>
      </ul>
      <div className="category-banner-section">
        <div className="cat-banner-a">
          <h3 className="cat-banner-title-1">BUY 1 GET 1</h3>
          <h1 className="cat-banner-title-2">Save 50% Off</h1>
          <h3 className="cat-banner-title-1">Safe and effective products</h3>
        </div>
        <div className="cat-banner-b">
          <img
            src="https://fable.club/wp-content/uploads/2022/05/h1-banner6.png"
            alt="banner"
            className="cat-banner-image"
          />
        </div>
        <div className="cat-banner-c">
          <h2 className="cat-banner-title-3">Shop for your Pet</h2>
          <button type="button" className="shop-now-btn">
            Shop Now
          </button>
        </div>
      </div>
    </div>
    <div className="best-seller-products-section">
      <div>
        <img
          src="https://clipartsign.com/upload/2016/02/21/clipart-dog-paw-print-clipart-2.png"
          alt="foot"
          className="footimage"
        />
        <h2 className="spring-pet-title">Best Seller Products</h2>
      </div>
      <ul className="best-seller-products">
        {bestSellingProducts.map(item => (
          <SpringPetProduct key={item.id} details={item} />
        ))}
      </ul>
    </div>
    <div className="blog-section">
      <div>
        <img
          src="https://clipartsign.com/upload/2016/02/21/clipart-dog-paw-print-clipart-2.png"
          alt="foot"
          className="footimage"
        />
        <h2 className="spring-pet-title">Latest From Blog</h2>
      </div>
      <ul className="blogsData">
        {blogData.map(blog => (
          <BlogItem key={blog.id} details={blog} />
        ))}
      </ul>
    </div>
    <div className="testimonial-section">
      <ul className="testimonial-ul">
        <Slider className="slider" {...testimonialProperties}>
          {testimonialsData.map(item => (
            <Testimonial key={item.id} details={item} />
          ))}
        </Slider>
      </ul>
    </div>
    <div className="gallery-section">
      <ul className="gallery-ul">
        {galleryImages.map(each => (
          <li>
            <img
              src={each.imageUrl}
              key={each.id}
              alt={each.id}
              className="galleryImage"
            />
          </li>
        ))}
      </ul>
    </div>
    <div className="brands-section">
      <ul className="brands-ul">
        {brandImages.map(each => (
          <li>
            <img src={each.imgUrl} alt="brand" className="brand-image" />
          </li>
        ))}
      </ul>
    </div>
    <hr />
    <Footer />
  </>
)

export default Home
