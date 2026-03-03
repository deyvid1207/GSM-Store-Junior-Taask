import React from 'react';
 import './footer.css'
 import {useLocation } from "react-router-dom";

 const FooterComponent = () => {
  const location = useLocation();
  return (
    <div className="footer">
    <section className="footer-container">
      <ul className="footer-navigation">
        <li>
          <a href="/contacts">Contacts</a>
        </li>
        <li>
          <a href="/support">FAQ</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/terms&conditions">Terms & Conditions</a>
        </li>
      </ul>

       

    </section>


  </div>
);
};
 
export default FooterComponent;