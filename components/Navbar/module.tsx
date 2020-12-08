import React from "react";
import { Logo } from "../Logo";

export const Navbar: React.FC = () => (
  <nav className="navbar">
    <div className="navbar__brand">
      <Logo />
    </div>
    <div className="navbar__left">
      <a href="#">Core features</a>
      <a href="#">Why Pokko?</a>
      <a href="#">Pricing</a>
      <a href="#">Documentation</a>
    </div>
    <div className="navbar__right">
      <a className="button --primary" href="#">
        Login
      </a>
    </div>
  </nav>
);
