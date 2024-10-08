import "./Starbucks-navbar.css";
import {Link, NavLink} from "react-router-dom";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import React, {useState} from "react";

export function StarbucksNavBar({}) {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-global">
          <div className="navbar-global-container">
            <div className="navbar-logo-container">
              <div className="navbar-logo">
                <Link to="/">
                  <li>
                    <img
                      src="../public/starbucks.svg"
                      alt="Starbucks icon"
                      className="navbar-logo"
                    />
                  </li>
                </Link>
              </div>
            </div>
            {/* Menus text start*/}
            <div className="navbar-text-global">
              <div className="flex items-center uppercase">
                <ul className="navbar-text-1">
                  <NavLink
                    to="/menu"
                    className={({isActive}) => [
                      isActive
                        ? "pisoVerde flex items-center"
                        : "flex items-center",
                    ]}
                  >
                    <li className="my-4 py-4 text-2xl hover:hoverVerde items-center">
                      Menu
                    </li>
                  </NavLink>
                  <NavLink
                    to="/Rewards"
                    className={({isActive}) => [
                      isActive
                        ? "pisoVerde flex items-center"
                        : "flex items-center",
                    ]}
                  >
                    <li className="my-4 py-4 ml-10 text-2xl hover:hoverVerde items-center">
                      Rewards
                    </li>
                  </NavLink>
                  <NavLink
                    to="/Gift Cards"
                    className={({isActive}) => [
                      isActive
                        ? "pisoVerde flex items-center"
                        : "flex items-center",
                    ]}
                  >
                    <li className="my-4 py-4 ml-10 text-2xl hover:hoverVerde items-center">
                      Gift Cards
                    </li>
                  </NavLink>
                </ul>
              </div>
              <div className="ml-auto flex justify-center">
                <div className="navbar-text-lateral">
                  <span className="navbar-text-lateral-span">
                    <Link to={"/"}>
                      <div className="navbar-text-lateral-div">
                        <img
                          src="../public/marker.svg"
                          alt="marker"
                          className="navbar-marker"
                        />
                      </div>
                      <p className="navbar-marker-text text-2xl font-semibold hover:hoverVerde">
                        Find a store
                      </p>
                    </Link>
                  </span>
                  <Link
                    to={"/"}
                    className="navbar-btn text-2xl bg-transparent font-semibold flex items-center hover:hoverGris"
                  >
                    Sign in
                  </Link>
                  <Link
                    to={"/"}
                    className="navbar-btn-2 text-2xl flex bg-black font-semibold items-center hover:hoverBlanco"
                  >
                    Join now
                  </Link>
                </div>
              </div>
            </div>
            {/* menu text end */}
            {/* Dropdown menu start */}
            <div className="bg-transparent flex justify-between items-center max-w-[1240px] ml-auto px-4 text-gray cursor-pointer">
              {/* Mobile Navigation Icon */}
              <div onClick={handleNav} className="block md:hidden item-middle">
                {nav ? (
                  <AiOutlineClose size={20} />
                ) : (
                  <AiOutlineMenu size={20} />
                )}
              </div>

              {/* Mobile Navigation Menu */}
              <div
                className={nav ? " sb-mask sb-hamburgerNav__mask scr" : ""}
              ></div>
              <div>
                <ul
                  className={
                    nav
                      ? "fixed md:hidden right-0 top-per w-[80%] h-full bg-[#ffffff] ease-in-out duration-500 box-per pt-14 font-per overflow-y-hidden draweropened"
                      : "ease-in-out h-full w-[80%] duration-500 fixed top-per right-[-100%] font-per"
                  }
                >
                  {/* Mobile Navigation Items */}
                  <ul>
                    <Link to="/">
                      <li className="py-7 px-14 duration-500 cursor-pointer text-3xl font-normal">
                        Menu
                      </li>
                    </Link>
                    <Link to="/">
                      <li className="py-7 px-14 duration-500 cursor-pointer text-3xl font-normal">
                        Rewards
                      </li>
                    </Link>
                    <Link to="/">
                      <li className="py-7 px-14 duration-500 cursor-pointer text-3xl font-normal">
                        Gift Cards
                      </li>
                    </Link>
                    <li className="py-7 px-14 duration-500 cursor-pointer text-3xl font-normal ">
                      <hr className="box-per h1-min p-2" />
                    </li>
                  </ul>
                  {/* Buttons */}
                  <div className="">
                    <div className="flex align-middle ">
                      <Link
                        to={"/"}
                        className="navbar-btn text-2xl bg-transparent font-semibold flex items-center ml-12"
                      >
                        Sign in
                      </Link>
                      <Link
                        to={"/"}
                        className="navbar-btn-2 text-2xl flex bg-black font-semibold items-center"
                      >
                        Join now
                      </Link>
                    </div>
                    <span className="navbar-text-lateral-span">
                      <Link className="ml-10 mt-5" to={"/"}>
                        <div className="navbar-text-lateral-div">
                          <img
                            src="../public/marker.svg"
                            alt="marker"
                            className="navbar-marker"
                          />
                        </div>
                        <p className="navbar-marker-text text-2xl font-semibold hover:hoverVerde">
                          Find a store
                        </p>
                      </Link>
                    </span>
                  </div>
                </ul>
              </div>
            </div>
            {/* Dropdown menu ends */}
          </div>
        </div>
      </nav>
    </>
  );
}
