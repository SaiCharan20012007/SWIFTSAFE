import './index.css'
import {FiPhoneCall} from 'react-icons/fi'
import {RiTwitterFill} from 'react-icons/ri'

import {FaPinterestP} from 'react-icons/fa'

import {SiFacebook} from 'react-icons/si'
import {AiOutlineInstagram} from 'react-icons/ai'

const usefulLinks = [
  {
    id: 1,
    link: 'New Products',
  },
  {
    id: 2,
    link: 'Best Sellers',
  },
  {
    id: 3,
    link: 'Bundle & Save',
  },
  {
    id: 4,
    link: 'Online Gift Card',
  },
  {
    id: 5,
    link: 'Discount',
  },
  {
    id: 6,
    link: 'Pet Store Locator',
  },
]

const accounts = [
  {
    id: 1,
    accountName: 'My Profile',
  },
  {
    id: 2,
    accountName: 'My Order History',
  },
  {
    id: 3,
    accountName: 'My Wish List',
  },
  {
    id: 4,
    accountName: 'Order Tracking',
  },
  {
    id: 5,
    accountName: 'Shipping Info',
  },
  {
    id: 6,
    accountName: 'Shopping Cart',
  },
]

const company = [
  {
    id: 1,
    detail: 'About Us',
  },
  {
    id: 2,
    detail: 'Careers',
  },
  {
    id: 3,
    detail: 'Blog',
  },
  {
    id: 4,
    detail: 'Affiliate',
  },
  {
    id: 5,
    detail: 'Contact Us',
  },
  {
    id: 6,
    detail: 'Gift Cards',
  },
]
const Footer = () => (
  <div className="footer-section">
    <div className="footer-section-1">
      <img
        src="https://fable.club/wp-content/uploads/2022/11/Fable-Club.svg"
        alt="fableclub"
      />
      <p className="footer-des">
        We know pets are like family, so we are
        <br /> committed to providing the highest-quality <br /> products &
        services that you can trust.
      </p>
      <div className="call-section">
        <FiPhoneCall />
        Hotline Order
      </div>
      <h2 className="number">+91 98666 63653</h2>
      <div className="social-media-icons">
        <div className="social-icon">
          <SiFacebook />
        </div>
        <div className="social-icon">
          <RiTwitterFill />
        </div>
        <div className="social-icon">
          <AiOutlineInstagram />
        </div>
        <div className="social-icon">
          <FaPinterestP />
        </div>
      </div>
    </div>
    <div className="footer-section-2">
      <h2 className="section-title">USEFUL LINKS</h2>
      <ul className="useful-links-ul">
        {usefulLinks.map(each => (
          <li className="link-item">{each.link}</li>
        ))}
      </ul>
    </div>
    <div className="footer-section-3">
      <h2 className="section-title">MY ACCOUNT</h2>

      <ul className="useful-links-ul">
        {accounts.map(each => (
          <li className="link-item">{each.accountName}</li>
        ))}
      </ul>
    </div>
    <div className="footer-section-4">
      <h2 className="section-title">COMPANY</h2>

      <ul className="useful-links-ul">
        {company.map(each => (
          <li className="link-item">{each.detail}</li>
        ))}
      </ul>
    </div>
  </div>
)

export default Footer
