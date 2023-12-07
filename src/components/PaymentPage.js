import React from "react";
import { Link } from "react-router-dom";

const PaymentPage = () => {
  return (
    <div className="payment-page-container">
      <div className="container">
        <div className="payment-message">
          <h2>Thank you for ordering food!</h2>
          <p>Your order has been successfully placed.</p>
        </div>
        <Link to="/">
          <button className="return-home-button">Return to Home Page</button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentPage;
