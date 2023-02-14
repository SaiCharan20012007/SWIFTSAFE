import './index.css'
import {AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {BiMenuAltLeft} from 'react-icons/bi'
import {Link} from 'react-router-dom'

import {MdFavoriteBorder} from 'react-icons/md'

const Header = () => (
  <div className="header-container">
    <img
      src="https://fable.club/wp-content/uploads/2022/11/Fable-Club.svg"
      alt="logo"
    />
    <ul className="nav-items">
      <li className="nav-item">Home</li>
      <li className="nav-item">Shop</li>
      <li className="nav-item">Pages</li>
      <li className="nav-item">Blog</li>
      <li className="nav-item">Contact Us</li>
    </ul>
    <div className="search-container">
      <input
        type="search"
        className="search-box"
        placeholder="Search Products..."
      />
      <AiOutlineSearch className="searchIcon" />
    </div>
    <div className="icons-container">
      <Link to="/login">
        <CgProfile className="profile-icon" />
      </Link>
      <MdFavoriteBorder className="profile-icon" />
      <Link to="/cart">
        <AiOutlineShoppingCart className="profile-icon" />
      </Link>
    </div>
    <div className="menu">
      <BiMenuAltLeft />
    </div>
  </div>
)

export default Header
