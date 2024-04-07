import React from "react";
import { Trophy, Guarantee, Shipping, Customer } from "./icons";
const Footer = () => {
  return (
    <>
      <section className="role">
        <div className="role_inner">
          <div className="role_inner__box">
            <div className="role_inner__box__img">
              <img src={Trophy} alt="" />
            </div>
            <div className="ole_inner__box__text">
              <h4>High Quality</h4>
              <p>crafted from top materials</p>
            </div>
          </div>
          <div className="role_inner__box">
            <div className="role_inner__box__img">
              <img src={Guarantee} alt="" />
            </div>
            <div className="ole_inner__box__text">
              <h4>Warranty Protection</h4>
              <p>Over 2 years</p>
            </div>
          </div>
          <div className="role_inner__box">
            <div className="role_inner__box__img">
              <img src={Shipping} alt="" />
            </div>
            <div className="ole_inner__box__text">
              <h4>Free Shipping</h4>
              <p>Order over 150 $</p>
            </div>
          </div>
          <div className="role_inner__box">
            <div className="role_inner__box__img">
              <img src={Customer} alt="" />
            </div>
            <div className="ole_inner__box__text">
              <h4>24 / 7 Support</h4>
              <p>Dedicated support</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer_inner">
            <div className="footer_inner_list">
              <div className="footer_inner_list__information">
                <h3>Funiro.</h3>
                <p>
                  400 University Drive Suite 200 Coral Gables, <br />
                  FL 33134 USA
                </p>
              </div>
              <div className="footer_inner_list__link">
                <h3>Links</h3>
                <ul>
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">Shop</a>
                  </li>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="footer_inner_list__link">
                <h3>Help</h3>
                <ul>
                  <li>
                    <a href="">Payment Options</a>
                  </li>
                  <li>
                    <a href="">Returns</a>
                  </li>
                  <li>
                    <a href="">Privacy Policies</a>
                  </li>
                </ul>
              </div>
              <div className="footer_inner_list__newsletter">
                <h3>Newsletter</h3>
                <div className="footer_inner_list__newsletter__formSubmit">
                  <input placeholder="Enter Your Email Address" type="text" />
                  <button>SUBCRIBE</button>
                </div>
              </div>
            </div>
          </div>
          <span className="footer_end">2023 furino. All rights reverved</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
