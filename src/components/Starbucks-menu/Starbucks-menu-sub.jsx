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
          <section>
          <h1 className="font-bold MenuTextH1">Menu</h1>
          <h2 className="font-bold MenuTextH2">Drinks</h2>
          <hr className="MenuTextHr" />
          <div className="grillaInferior">
            <div className="gridItem mdLar mb3-2 gridItem">
              <div className="!flex !items-center">
                <div className="mr3 wper">
                  <div className="!relative wper">
                    <div className="!block w-full pfull"></div>
                    <div className="iconContorno">
                      <div className="!relative h-full">
                        <img
                          className="imgDec imgPosition"
                          src="../public/8.jpg"
                          alt="Iced Energy"
                        />
                        <div className="imgFadeHide imgColorFadeDiv imgFadeBack imgHideForFade"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text19r textCard">Iced Energy</h3>
                <a className="block linkOverlay" href="">
                  <span className="hiddenVisually">Iced Energy</span>
                </a>
              </div>
            </div>
            {/* /////// */}
            <div className="gridItem mdLar mb3-2 gridItem">
              <div className="!flex !items-center">
                <div className="mr3 wper">
                  <div className="!relative wper">
                    <div className="!block w-full pfull"></div>
                    <div className="iconContorno">
                      <div className="!relative h-full">
                        <img
                          className="imgDec imgPosition"
                          src="../public/9.jpg"
                          alt="Hot Coffees"
                        />
                        <div className="imgFadeHide imgColorFadeDiv imgFadeBack imgHideForFade"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text19r textCard">Hot Coffees</h3>
                <a className="block linkOverlay" href="">
                  <span className="hiddenVisually">Hot Coffees</span>
                </a>
              </div>
            </div>
            {/* /////// */}
            <div className="gridItem mdLar mb3-2 gridItem">
              <div className="!flex !items-center">
                <div className="mr3 wper">
                  <div className="!relative wper">
                    <div className="!block w-full pfull"></div>
                    <div className="iconContorno">
                      <div className="!relative h-full">
                        <img
                          className="imgDec imgPosition"
                          src="../public/10.jpg"
                          alt="Cold Coffees"
                        />
                        <div className="imgFadeHide imgColorFadeDiv imgFadeBack imgHideForFade"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text19r textCard">Cold Coffees</h3>
                <a className="block linkOverlay" href="">
                  <span className="hiddenVisually">Cold Coffees</span>
                </a>
              </div>
            </div>
            {/* /////// */}
            <div className="gridItem mdLar mb3-2 gridItem">
              <div className="!flex !items-center">
                <div className="mr3 wper">
                  <div className="!relative wper">
                    <div className="!block w-full pfull"></div>
                    <div className="iconContorno">
                      <div className="!relative h-full">
                        <img
                          className="imgDec imgPosition"
                          src="../public/11.jpg"
                          alt="Starbucks Refreshers® Beverages"
                        />
                        <div className="imgFadeHide imgColorFadeDiv imgFadeBack imgHideForFade"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text19r textCard">Starbucks Refreshers® Beverages</h3>
                <a className="block linkOverlay" href="">
                  <span className="hiddenVisually">Starbucks Refreshers® Beverages</span>
                </a>
              </div>
            </div>
            {/* /////// */}
            <div className="gridItem mdLar mb3-2 gridItem">
              <div className="!flex !items-center">
                <div className="mr3 wper">
                  <div className="!relative wper">
                    <div className="!block w-full pfull"></div>
                    <div className="iconContorno">
                      <div className="!relative h-full">
                        <img
                          className="imgDec imgPosition"
                          src="../public/12.jpg"
                          alt="Frappuccino® Blended Beverages"
                        />
                        <div className="imgFadeHide imgColorFadeDiv imgFadeBack imgHideForFade"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text19r textCard">Frappuccino® Blended Beverages</h3>
                <a className="block linkOverlay" href="">
                  <span className="hiddenVisually">Frappuccino® Blended Beverages</span>
                </a>
              </div>
            </div>
            {/* /////// */}
            <div className="gridItem mdLar mb3-2 gridItem">
              <div className="!flex !items-center">
                <div className="mr3 wper">
                  <div className="!relative wper">
                    <div className="!block w-full pfull"></div>
                    <div className="iconContorno">
                      <div className="!relative h-full">
                        <img
                          className="imgDec imgPosition"
                          src="../public/13.jpg"
                          alt="Iced Tea and Lemonade"
                        />
                        <div className="imgFadeHide imgColorFadeDiv imgFadeBack imgHideForFade"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text19r textCard">Iced Tea and Lemonade</h3>
                <a className="block linkOverlay" href="">
                  <span className="hiddenVisually">Iced Tea and Lemonade</span>
                </a>
              </div>
            </div>
            {/* /////// */}
            <div className="gridItem mdLar mb3-2 gridItem">
              <div className="!flex !items-center">
                <div className="mr3 wper">
                  <div className="!relative wper">
                    <div className="!block w-full pfull"></div>
                    <div className="iconContorno">
                      <div className="!relative h-full">
                        <img
                          className="imgDec imgPosition"
                          src="../public/14.jpg"
                          alt="Hot Teas"
                        />
                        <div className="imgFadeHide imgColorFadeDiv imgFadeBack imgHideForFade"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text19r textCard">Hot Teas</h3>
                <a className="block linkOverlay" href="">
                  <span className="hiddenVisually">Hot Teas</span>
                </a>
              </div>
            </div>
            {/* /////// */}
            <div className="gridItem mdLar mb3-2 gridItem">
              <div className="!flex !items-center">
                <div className="mr3 wper">
                  <div className="!relative wper">
                    <div className="!block w-full pfull"></div>
                    <div className="iconContorno">
                      <div className="!relative h-full">
                        <img
                          className="imgDec imgPosition"
                          src="../public/15.jpg"
                          alt="Milk, Juice & More"
                        />
                        <div className="imgFadeHide imgColorFadeDiv imgFadeBack imgHideForFade"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text19r textCard">Milk, Juice & More</h3>
                <a className="block linkOverlay" href="">
                  <span className="hiddenVisually">Milk, Juice & More</span>
                </a>
              </div>
            </div>
            {/* /////// */}
            <div className="gridItem mdLar mb3-2 gridItem">
              <div className="!flex !items-center">
                <div className="mr3 wper">
                  <div className="!relative wper">
                    <div className="!block w-full pfull"></div>
                    <div className="iconContorno">
                      <div className="!relative h-full">
                        <img
                          className="imgDec imgPosition"
                          src="../public/16.jpg"
                          alt="Bottled Beverages"
                        />
                        <div className="imgFadeHide imgColorFadeDiv imgFadeBack imgHideForFade"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text19r textCard">Bottled Beverages</h3>
                <a className="block linkOverlay" href="">
                  <span className="hiddenVisually">Bottled Beverages</span>
                </a>
              </div>
            </div>
          </div>
          </section>

          <section>
          <h2 className="font-bold MenuTextH2">Food</h2>
          <hr className="MenuTextHr" />
          <div className="grillaInferior">
            {/* ////// */}
            <div className="gridItem mdLar mb3-2 gridItem">
              <div className="!flex !items-center">
                <div className="mr3 wper">
                  <div className="!relative wper">
                    <div className="!block w-full pfull"></div>
                    <div className="iconContorno">
                      <div className="!relative h-full">
                        <img
                          className="imgDec imgPosition"
                          src="../public/17.jpg"
                          alt="Hot Breakfast"
                        />
                        <div className="imgFadeHide imgColorFadeDiv imgFadeBack imgHideForFade"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text19r textCard">Hot Breakfast</h3>
                <a className="block linkOverlay" href="">
                  <span className="hiddenVisually">Hot Breakfast</span>
                </a>
              </div>
            </div>
            {/* /////// */}
            <div className="gridItem mdLar mb3-2 gridItem">
              <div className="!flex !items-center">
                <div className="mr3 wper">
                  <div className="!relative wper">
                    <div className="!block w-full pfull"></div>
                    <div className="iconContorno">
                      <div className="!relative h-full">
                        <img
                          className="imgDec imgPosition"
                          src="../public/18.jpg"
                          alt="Oatmeal & Yogurt"
                        />
                        <div className="imgFadeHide imgColorFadeDiv imgFadeBack imgHideForFade"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text19r textCard">Oatmeal & Yogurt</h3>
                <a className="block linkOverlay" href="">
                  <span className="hiddenVisually">Oatmeal & Yogurt</span>
                </a>
              </div>
            </div>
            {/* /////// */}
            <div className="gridItem mdLar mb3-2 gridItem">
              <div className="!flex !items-center">
                <div className="mr3 wper">
                  <div className="!relative wper">
                    <div className="!block w-full pfull"></div>
                    <div className="iconContorno">
                      <div className="!relative h-full">
                        <img
                          className="imgDec imgPosition"
                          src="../public/19.jpg"
                          alt="Bakery"
                        />
                        <div className="imgFadeHide imgColorFadeDiv imgFadeBack imgHideForFade"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text19r textCard">Bakery</h3>
                <a className="block linkOverlay" href="">
                  <span className="hiddenVisually">Bakery</span>
                </a>
              </div>
            </div>
            {/* /////// */}
            <div className="gridItem mdLar mb3-2 gridItem">
              <div className="!flex !items-center">
                <div className="mr3 wper">
                  <div className="!relative wper">
                    <div className="!block w-full pfull"></div>
                    <div className="iconContorno">
                      <div className="!relative h-full">
                        <img
                          className="imgDec imgPosition"
                          src="../public/20.jpg"
                          alt="Lunch"
                        />
                        <div className="imgFadeHide imgColorFadeDiv imgFadeBack imgHideForFade"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text19r textCard">Lunch</h3>
                <a className="block linkOverlay" href="">
                  <span className="hiddenVisually">Lunch</span>
                </a>
              </div>
            </div>
            {/* /////// */}
            <div className="gridItem mdLar mb3-2 gridItem">
              <div className="!flex !items-center">
                <div className="mr3 wper">
                  <div className="!relative wper">
                    <div className="!block w-full pfull"></div>
                    <div className="iconContorno">
                      <div className="!relative h-full">
                        <img
                          className="imgDec imgPosition"
                          src="../public/21.jpg"
                          alt="Snacks & Sweets"
                        />
                        <div className="imgFadeHide imgColorFadeDiv imgFadeBack imgHideForFade"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text19r textCard">Snacks & Sweets</h3>
                <a className="block linkOverlay" href="">
                  <span className="hiddenVisually">Snacks & Sweets</span>
                </a>
              </div>
            </div>
          </div>
          </section>
          
          <section>
          <h2 className="font-bold MenuTextH2">At Home Coffee</h2>
          <hr className="MenuTextHr" />
          <div className="grillaInferior">
            {/* ////// */}
            <div className="gridItem mdLar mb3-2 gridItem">
              <div className="!flex !items-center">
                <div className="mr3 wper">
                  <div className="!relative wper">
                    <div className="!block w-full pfull"></div>
                    <div className="iconContorno">
                      <div className="!relative h-full">
                        <img
                          className="imgDec imgPosition"
                          src="../public/22.jpg"
                          alt="Whole Bean"
                        />
                        <div className="imgFadeHide imgColorFadeDiv imgFadeBack imgHideForFade"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text19r textCard">Whole Bean</h3>
                <a className="block linkOverlay" href="">
                  <span className="hiddenVisually">Whole Bean</span>
                </a>
              </div>
            </div>
            {/* /////// */}
            <div className="gridItem mdLar mb3-2 gridItem">
              <div className="!flex !items-center">
                <div className="mr3 wper">
                  <div className="!relative wper">
                    <div className="!block w-full pfull"></div>
                    <div className="iconContorno">
                      <div className="!relative h-full">
                        <img
                          className="imgDec imgPosition"
                          src="../public/23.jpg"
                          alt="VIA® Instant"
                        />
                        <div className="imgFadeHide imgColorFadeDiv imgFadeBack imgHideForFade"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text19r textCard">VIA® Instant</h3>
                <a className="block linkOverlay" href="">
                  <span className="hiddenVisually">VIA® Instant</span>
                </a>
              </div>
            </div>
  
          </div>
          </section>

          <section>
          <h2 className="font-bold MenuTextH2">Merchandise</h2>
          <hr className="MenuTextHr" />
          <div className="grillaInferior">
            {/* ////// */}
            <div className="gridItem mdLar mb3-2 gridItem">
              <div className="!flex !items-center">
                <div className="mr3 wper">
                  <div className="!relative wper">
                    <div className="!block w-full pfull"></div>
                    <div className="iconContorno">
                      <div className="!relative h-full">
                        <img
                          className="imgDec imgPosition"
                          src="../public/24.jpg"
                          alt="Cold Cups"
                        />
                        <div className="imgFadeHide imgColorFadeDiv imgFadeBack imgHideForFade"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text19r textCard">Cold Cups</h3>
                <a className="block linkOverlay" href="">
                  <span className="hiddenVisually">Cold Cups</span>
                </a>
              </div>
            </div>
            {/* /////// */}
            <div className="gridItem mdLar mb3-2 gridItem">
              <div className="!flex !items-center">
                <div className="mr3 wper">
                  <div className="!relative wper">
                    <div className="!block w-full pfull"></div>
                    <div className="iconContorno">
                      <div className="!relative h-full">
                        <img
                          className="imgDec imgPosition"
                          src="../public/25.jpg"
                          alt="Tumblers"
                        />
                        <div className="imgFadeHide imgColorFadeDiv imgFadeBack imgHideForFade"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text19r textCard">Tumblers</h3>
                <a className="block linkOverlay" href="">
                  <span className="hiddenVisually">Tumblers</span>
                </a>
              </div>
            </div>
            {/* /////// */}
            <div className="gridItem mdLar mb3-2 gridItem">
              <div className="!flex !items-center">
                <div className="mr3 wper">
                  <div className="!relative wper">
                    <div className="!block w-full pfull"></div>
                    <div className="iconContorno">
                      <div className="!relative h-full">
                        <img
                          className="imgDec imgPosition"
                          src="../public/26.jpg"
                          alt="Mugs"
                        />
                        <div className="imgFadeHide imgColorFadeDiv imgFadeBack imgHideForFade"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text19r textCard">Mugs</h3>
                <a className="block linkOverlay" href="">
                  <span className="hiddenVisually">Mugs</span>
                </a>
              </div>
            </div>
            {/* /////// */}
            <div className="gridItem mdLar mb3-2 gridItem">
              <div className="!flex !items-center">
                <div className="mr3 wper">
                  <div className="!relative wper">
                    <div className="!block w-full pfull"></div>
                    <div className="iconContorno">
                      <div className="!relative h-full">
                        <img
                          className="imgDec imgPosition"
                          src="../public/27.jpg"
                          alt="Other"
                        />
                        <div className="imgFadeHide imgColorFadeDiv imgFadeBack imgHideForFade"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text19r textCard">Other</h3>
                <a className="block linkOverlay" href="">
                  <span className="hiddenVisually">Other</span>
                </a>
              </div>
            </div>
          </div>
          </section>
        </div> 
      </div>
    </div>
  );
};

export default StarbucksMenuSub;
