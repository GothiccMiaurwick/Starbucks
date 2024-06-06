import React from "react";
import "./Starbucks-footer.css";

const StarbucksFooter = () => {
  return (
    <div>
      <footer className="footer-global-container">
        <nav className="footer-global-nav">
          <div className="footer-nav-information-container">
            <div className="footer-nav-text">
              <h2 tabIndex={-1}>About Us</h2>
              <ul className="footer-nav-text-ul">
                <li className="footer-nav-ul-link">Our Company </li>
                <li className="footer-nav-ul-link">Our Coffee</li>
                <li className="footer-nav-ul-link">Stories and News </li>
                <li className="footer-nav-ul-link">Starbucks Archive</li>
                <li className="footer-nav-ul-link">Investor Relations</li>
                <li className="footer-nav-ul-link">Customer Service</li>
                <li className="footer-nav-ul-link">Contact Us</li>
              </ul>
            </div>

            {/* inside dropdawn start listo*/}
            <div className="nav--dropdown">
              <ul className="dropdown" id="menu">
                <li className="dropdown__list">
                  <a href="#" className="dropdown__link">
                    <span className="dropdown__span">About Us</span>
                    <img src="/public/down.svg" className="dropdown__arrow" />
                    <input type="checkbox" className="dropdown__check" />
                  </a>

                  <div className="dropdown__content">
                    <ul className="dropdown__sup">
                      <li className="dropdown__li">
                        <a className="dropdown__anchor" href="#">
                          Our Company
                        </a>
                      </li>

                      <li className="dropdown__li">
                        <a className="dropdown__anchor" href="#">
                          Our Coffee
                        </a>
                      </li>

                      <li className="dropdown__li">
                        <a className="dropdown__anchor" href="#">
                          Stories and News
                        </a>
                      </li>

                      <li className="dropdown__li">
                        <a className="dropdown__anchor" href="#">
                          Starbucks Archive
                        </a>
                      </li>

                      <li className="dropdown__li">
                        <a className="dropdown__anchor" href="#">
                          Investor Relations
                        </a>
                      </li>

                      <li className="dropdown__li">
                        <a className="dropdown__anchor" href="#">
                          Customer Service
                        </a>
                      </li>

                      <li className="dropdown__li">
                        <a className="dropdown__anchor" href="#">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            {/* inside dropdawn end */}

            <div className="footer-nav-text2">
              <h2>Careers</h2>
              <ul className="footer-nav-text-ul">
                <li className="footer-nav-ul-link">Culture and Values</li>
                <li className="footer-nav-ul-link">
                  Inclusion, Diversity, and Equity
                </li>
                <li className="footer-nav-ul-link">College Achievement Plan</li>
                <li className="footer-nav-ul-link">Alumni Community</li>
                <li className="footer-nav-ul-link">U.S. Careers</li>
                <li className="footer-nav-ul-link">International Careers</li>
              </ul>
            </div>

            {/* inside dropdawn start listo*/}
            <div className="nav--dropdown">
              <ul className="dropdown" id="menu">
                <li className="dropdown__list">
                  <a href="#" className="dropdown__link">
                    <span className="dropdown__span">Careers</span>
                    <img src="/public/down.svg" className="dropdown__arrow" />
                    <input type="checkbox" className="dropdown__check" />
                  </a>

                  <div className="dropdown__content">
                    <ul className="dropdown__sup">
                      <li className="dropdown__li">
                        <a className="dropdown__anchor" href="#">
                        Culture and Values
                        </a>
                      </li>

                      <li className="dropdown__li">
                        <a className="dropdown__anchor" href="#">
                        Inclusion, Diversity, and Equity
                        </a>
                      </li>

                      <li className="dropdown__li">
                        <a className="dropdown__anchor" href="#">
                        College Achievement Plan
                        </a>
                      </li>

                      <li className="dropdown__li">
                        <a className="dropdown__anchor" href="#">
                        Alumni Community
                        </a>
                      </li>

                      <li className="dropdown__li">
                        <a className="dropdown__anchor" href="#">
                        U.S. Careers
                        </a>
                      </li>

                      <li className="dropdown__li">
                        <a className="dropdown__anchor" href="#">
                        International Careers
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            {/* inside dropdawn end */}

            <div className="footer-nav-text2">
              <h2>Social Impact</h2>
              <ul className="footer-nav-text-ul">
                <li className="footer-nav-ul-link">People</li>
                <li className="footer-nav-ul-link">Planet</li>
                <li className="footer-nav-ul-link">
                  Environmental and Social Impact Reporting
                </li>
              </ul>
            </div>

            {/* inside dropdawn start listo*/}
            <div className="nav--dropdown">
              <ul className="dropdown" id="menu">
                <li className="dropdown__list">
                  <a href="#" className="dropdown__link">
                    <span className="dropdown__span">Social Impact</span>
                    <img src="/public/down.svg" className="dropdown__arrow" />
                    <input type="checkbox" className="dropdown__check" />
                  </a>

                  <div className="dropdown__content">
                    <ul className="dropdown__sup">
                      <li className="dropdown__li">
                        <a className="dropdown__anchor" href="#">
                        People
                        </a>
                      </li>

                      <li className="dropdown__li">
                        <a className="dropdown__anchor" href="#">
                        Planet
                        </a>
                      </li>

                      <li className="dropdown__li">
                        <a className="dropdown__anchor" href="#">
                        Environmental and Social Impact Reporting
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            {/* inside dropdawn ends*/}

            <div className="footer-nav-text2">
              <h2>For Business Partners</h2>
              <ul className="footer-nav-text-ul">
                <li className="footer-nav-ul-link">Landlord Support Center</li>
                <li className="footer-nav-ul-link">Suppliers</li>
                <li className="footer-nav-ul-link">
                  Corporate Gift Card Sales
                </li>
                <li className="footer-nav-ul-link">
                  Office and Foodservice Coffee
                </li>
              </ul>
            </div>

            {/* inside dropdawn start listo*/}
            <div className="nav--dropdown">
              <ul className="dropdown" id="menu">
                <li className="dropdown__list">
                  <a href="#" className="dropdown__link">
                    <span className="dropdown__span">For Business Partners</span>
                    <img src="/public/down.svg" className="dropdown__arrow" />
                    <input type="checkbox" className="dropdown__check" />
                  </a>

                  <div className="dropdown__content">
                    <ul className="dropdown__sup">
                      <li className="dropdown__li">
                        <a className="dropdown__anchor" href="#">
                        Landlord Support Center
                        </a>
                      </li>

                      <li className="dropdown__li">
                        <a className="dropdown__anchor" href="#">
                        Suppliers
                        </a>
                      </li>

                      <li className="dropdown__li">
                        <a className="dropdown__anchor" href="#">
                        Corporate Gift Card Sales
                        </a>
                      </li>

                      <li className="dropdown__li">
                        <a className="dropdown__anchor" href="#">
                        Office and Foodservice Coffee
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            {/* inside dropdawn end */}

            <div className="footer-nav-text2">
              <h2>Order and Pick Up</h2>
              <ul className="footer-nav-text-ul">
                <li className="footer-nav-ul-link">Order on the App</li>
                <li className="footer-nav-ul-link">Order on the Web</li>
                <li className="footer-nav-ul-link">Delivery</li>
                <li className="footer-nav-ul-link">
                  Order and Pick Up Options
                </li>
                <li className="footer-nav-ul-link">
                  Explore and Find Coffee for Home
                </li>
              </ul>
            </div>

            {/* inside dropdawn start */}
            <div className="nav--dropdown">
              <ul className="dropdown" id="menu">
                <li className="dropdown__list">
                  <a href="#" className="dropdown__link">
                    <span className="dropdown__span">Order and Pick Up</span>
                    <img src="/public/down.svg" className="dropdown__arrow" />
                    <input type="checkbox" className="dropdown__check" />
                  </a>

                  <div className="dropdown__content">
                    <ul className="dropdown__sup">
                      <li className="dropdown__li">
                        <a className="dropdown__anchor" href="#">
                        Order on the App
                        </a>
                      </li>

                      <li className="dropdown__li">
                        <a className="dropdown__anchor" href="#">
                        Order on the Web
                        </a>
                      </li>

                      <li className="dropdown__li">
                        <a className="dropdown__anchor" href="#">
                        Delivery
                        </a>
                      </li>

                      <li className="dropdown__li">
                        <a className="dropdown__anchor" href="#">
                          SOrder and Pick Up Options
                        </a>
                      </li>

                      <li className="dropdown__li">
                        <a className="dropdown__anchor" href="#">
                        Explore and Find Coffee for Home
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            {/* inside dropdawn end */}
          </div>

          <hr className="footer-nav-section" />

          <ul className="footer-global-ul-icons">
            <li>
              <a className="footer-nav-ul-icons-link" href="">
                <img src="./public/spotify.png" alt="spotify" />
              </a>
            </li>
            <li>
              <a className="footer-nav-ul-icons-link" href="">
                <img src="./public/facebook.png" alt="facebook" />
              </a>
            </li>
            <li>
              <a className="footer-nav-ul-icons-link" href="">
                <img src="./public/pinterest.png" alt="pinterest" />
              </a>
            </li>
            <li>
              <a className="footer-nav-ul-icons-link" href="">
                <img src="./public/instagram.png" alt="instagram" />
              </a>
            </li>
            <li>
              <a className="footer-nav-ul-icons-link" href="">
                <img src="./public/youtube.png" alt="youtube" />
              </a>
            </li>
            <li>
              <a className="footer-nav-ul-icons-link" href="">
                <img src="./public/twitter.png" alt="twitter" />
              </a>
            </li>
          </ul>

          <ul className="footer-global-ul-text-final">
            <li className="foter-ul-text-final">
              <a className="footer-ul-text-final-link" href="">
                Privacy Notice
              </a>
            </li>
            <li className="foter-ul-text-final">
              <a className="footer-ul-text-final-link" href="">
                Consumer Health Privacy Notice
              </a>
            </li>
            <li className="foter-ul-text-final">
              <a className="footer-ul-text-final-link" href="">
                Terms of Use
              </a>
            </li>
            <li className="foter-ul-text-final">
              <a className="footer-ul-text-final-link" href="">
                Do Not Share My Personal Information
              </a>
            </li>
            <li className="foter-ul-text-final">
              <a className="footer-ul-text-final-link" href="">
                CA Supply Chain Act
              </a>
            </li>
            <li className="foter-ul-text-final">
              <a className="footer-ul-text-final-link" href="">
                Accessibility
              </a>
            </li>
            <li className="foter-ul-text-final">
              <a className="footer-ul-text-final-link" href="">
                Cookie Preferences
              </a>
            </li>
          </ul>

          <p className="final-text-page">
            © 2024 Starbucks Coffee Company. All rights reserved.
          </p>
        </nav>
      </footer>
    </div>
  );
};

export default StarbucksFooter;
