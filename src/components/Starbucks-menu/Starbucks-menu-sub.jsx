import {Link} from "react-router-dom";
import "./Starbucks-menu-sub.css";
import React from "react";

const StarbucksMenuSub = () => {
  return (
    <div className="MenuGlobalContainer">
      {/* NavBar - Submenu */}
      <div className="pl-52 pr-16 fondoBlancoMedio box-per2">
        <nav>
          <ul className="flex textPer font-semibold tracking-wide leading-8">
            <Link className="TextNavDown">
              <li className="TextDecorationDown">Menu</li>
            </Link>
            <Link className="TextNavDown">
              <li>Featured</li>
            </Link>
            <Link className="TextNavDown">
              <li>Previous</li>
            </Link>
            <Link className="TextNavDown">
              <li>Favorites</li>
            </Link>
          </ul>
        </nav>
      </div>

      {/* Menu Content */}
      <div className="pl-131 !flex">
        {/* left bar */}
        <nav>
          <ul className="TitleBarUl">
            <li className="mt-6 TitleBar">
              <h2 className="text-black"> Drinks</h2>
              <ul>
                <li className="TitleBarLi">Iced Energy</li>
                <li className="TitleBarLi">Hot Coffees</li>
                <li className="TitleBarLi">Cold Coffees</li>
                <li className="TitleBarLi">Starbucks Refreshers® Beverages</li>
                <li className="TitleBarLi">Frappuccino® Blended Beverages</li>
                <li className="TitleBarLi">Iced Tea and Lemonade</li>
                <li className="TitleBarLi">Hot Teas</li>
                <li className="TitleBarLi">Milk, Juice & More</li>
                <li className="TitleBarLi">Bottled Beverages</li>
              </ul>
            </li>

            <li className="mt-6 TitleBar">
              <h2 className="text-black"> Food</h2>
              <ul>
                <li className="TitleBarLi">Hot Breakfast</li>
                <li className="TitleBarLi">Oatmeal & Yogurt</li>
                <li className="TitleBarLi">Bakery</li>
                <li className="TitleBarLi">Bakery</li>
                <li className="TitleBarLi">Snacks & Sweets</li>
              </ul>
            </li>

            <li className="mt-6 TitleBar">
              <h2 className="text-black"> At Home Coffee</h2>
              <ul>
                <li className="TitleBarLi">Whole Bean</li>
                <li className="TitleBarLi">VIA® Instant</li>
              </ul>
            </li>

            <li className="mt-6 TitleBar">
              <h2 className="text-black"> Merchandise</h2>
              <ul>
                <li className="TitleBarLi">Cold Cups</li>
                <li className="TitleBarLi">Tumblers</li>
                <li className="TitleBarLi">Mugs</li>
                <li className="TitleBarLi">Other</li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* Rigth content */}
        <div className="RigthMenuContainer">
            <h1 className="font-bold MenuTextH1">Menu</h1>
            <h2 className="font-bold MenuTextH2">Drinks</h2>
        </div>
      </div>
    </div>
  );
};

export default StarbucksMenuSub;
