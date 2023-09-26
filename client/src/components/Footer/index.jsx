import facebookIcon from '@/assets/facebook.svg'
import twitterIcon from '@/assets/twitter.svg'
import instagramIcon from '@/assets/instagram.svg'

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="footer-content">
        <div className="footer-links">
          <h3>Categories</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Shop</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-faq">
          <h3>FAQ</h3>
          <ul>
            <li>
              <a href="/">Terms & Conditions</a>
            </li>
            <li>
              <a href="/">Privacy</a>
            </li>
            <li>
              <a href="/">Policy</a>
            </li>
            <li>
              <a href="/">Cookies</a>
            </li>
          </ul>
        </div>
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            Our Clothes store is a premier destination for fashion enthusiasts.
            We offer a wide range of trendy and high-quality clothing for every
            occasion.
          </p>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>
            If you have any questions or inquiries, feel free to reach out to
            our customer support team at
            <a href="mailto:info@example.com">
              <span>info@example.com</span>
            </a>
            .
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <small>&copy; 2023 Fashion EC. All rights reserved.</small>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="footer-social-links">
            <a href="/">
              <img src={facebookIcon} alt="iconFacebook" />
            </a>
            <a href="/">
              <img src={twitterIcon} alt="iconTwitter" />
            </a>
            <a href="/">
              <img src={instagramIcon} alt="iconInstagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
