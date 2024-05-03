import "./Starbucks-navbar.css";

export function StarbucksNavBar({}) {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-global">
          <div className="navbar-global-container">
            <div className="navbar-logo-container">
              <div className="navbar-logo">
                <img
                  src="../public/starbucks.svg"
                  alt="Starbucks icon"
                  className="navbar-logo"
                />
              </div>
            </div>
            <div className="navbar-text-global">
              <div className="navbar-text-container">
                <ul className="navbar-text-1">
                  <li className="navbar-menu-1">
                    <a href="">Menu</a>
                  </li>
                  <li className="navbar-menu">
                    <a href="">Rewards</a>
                  </li>
                  <li className="navbar-menu">
                    <a href="">Gift cards</a>
                  </li>
                </ul>
              </div>
              <div className="navbar-text-2">
                <div className="navbar-text-lateral">
                  <span className="navbar-text-lateral-span">
                    <a href="">
                      <div className="navbar-text-lateral-div">
                        <img
                          src="../public/marker.svg"
                          alt="marker"
                          className="navbar-marker"
                        />
                      </div>
                      <p className="navbar-marker-text">Find a store</p>
                    </a>
                  </span>
                  <a className="navbar-btn" href="#">
                    Sign in
                  </a>
                  <a className="navbar-btn-2" href="#">
                    Join now
                  </a>
                </div>
              </div>

              {/* Dropdown menu start */}
              
              {/* Dropdown menu ends */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
