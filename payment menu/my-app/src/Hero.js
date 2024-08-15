import React from "react";
import phoneImg from "./images/phone.svg"
import { useGlobalContext } from "./Context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments Infastructure For The Internet</h1>
            <p>
              {" "}
              millions of companies of all sizes-from startups to Fourtune
              %00s-useGlobalContext Stripe's software and APIs to accept payments,
              send payouts, and manage their bussinesses online.
            </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
