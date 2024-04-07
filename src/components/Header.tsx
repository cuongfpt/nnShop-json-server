import { Logo, userIcon, seachIcon, heartIcon, cartIcon } from "./icons";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <div className="header_media">
              <img src={Logo} alt="" />
            </div>
            <nav className="main-menu">
              <ul className="main-menu__list">
                <li className="main-menu__item">
                  <a className="main-menu__link" href="/">
                    Home
                  </a>
                </li>
                <li className="main-menu__item">
                  <a className="main-menu__link" href="shop">
                    Shop
                  </a>
                </li>
                <li className="main-menu__item">
                  <a className="main-menu__link" href="about">
                    About
                  </a>
                </li>
                <li className="main-menu__item">
                  <a className="main-menu__link" href="signin">
                  Login
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header-action">
              <div className="header-action-item">
                <img src={userIcon} alt="" />
              </div>
              <div className="header-action-item">
                <img src={seachIcon} alt="" />
              </div>
              <div className="header-action-item">
                <img src={heartIcon} alt="" />
              </div>
              <div className="header-action-item">
                <a href="cart">
                  <img src={cartIcon} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
