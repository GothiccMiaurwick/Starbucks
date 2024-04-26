import React from "react";
import "./Starbucks-main.css";

const StarbucksConditions = () => {
  return (
    <>
      <div className="condition-global-container">
        <div className="condition-container">
          <div className="condition-pre">
            <div className="condition-text-container">
              <div className="condition-text">
                *From 3/17-4/8, enjoy $4 off your Starbucks order of $20 or more
                through the DoorDash app, excluding taxes and fees. Offer valid
                for four (4) redemption per customer. Restrictions and other
                taxes/fees/gratuity still apply. See DoorDash app for details
                and location availability. Fees subject to change. Menu limited.
                Restricted delivery area. Available at participating locations
                only. All deliveries subject to availability. Must have or
                create a valid DoorDash account with valid form of accepted
                payment on file. No cash value. Non-transferable. Your delivery
                order may be limited in any one transaction to one hundred
                dollars ($100) before taxes, tip, and fees. We may adjust this
                limit at any time at our discretion. Prices for Starbucks
                <sup>®</sup> items purchased through DoorDash may be higher than
                as marked or posted in stores. May not be combined with other
                offers, discounts, or promotions. See DoorDash terms and
                conditions at{" "}
                <a className="condition-text-link" href="https://help.doordash.com/consumers/s/article/offer-terms-conditions">
                  help.doordash.com/consumers/s/article/offer-terms-conditions
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StarbucksConditions;
