import {Link} from "react-router-dom";
import "./Starbucks-menu-sub.css";
import React from "react";

const StarbucksMenuSub = () => {

  return (
    <div>
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
    </div>
  );
};

export default StarbucksMenuSub;
