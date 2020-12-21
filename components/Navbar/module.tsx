import React from "react";
import { Logo } from "../Logo";

const NavbarBurger: React.FC<{ active: boolean; toggle: () => void }> = ({
  active,
  toggle,
}) => (
  <div className={"navbar__burger-menu" + (active ? " --active" : "")}>
    <div className="navbar__burger-header">
      <div className="navbar__burger-brand">
        <Logo />
      </div>
      <button className="navbar__burger-toggle" onClick={toggle}>
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.9999 2.64C16.8653 2.64 11.941 4.67971 8.31031 8.31041C4.6796 11.9411 2.63989 16.8654 2.63989 22C2.63989 27.1346 4.6796 32.0589 8.31031 35.6896C11.941 39.3203 16.8653 41.36 21.9999 41.36C27.1345 41.36 32.0588 39.3203 35.6895 35.6896C39.3202 32.0589 41.3599 27.1346 41.3599 22C41.3599 16.8654 39.3202 11.9411 35.6895 8.31041C32.0588 4.67971 27.1345 2.64 21.9999 2.64V2.64Z"
            stroke="#384057"
            strokeWidth="1.76"
            strokeMiterlimit="10"
          />
          <path
            d="M16.0208 27.9793L28 16"
            stroke="#384057"
            strokeWidth="1.76"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M16.0208 16.0207L28 28"
            stroke="#384057"
            strokeWidth="1.76"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
    <ul className="navbar__burger-links">
      <li>
        <a href="#">Core features</a>
      </li>
      <li>
        <a href="#">Why Pokko?</a>
      </li>
      <li>
        <a href="#">Pricing</a>
      </li>
      <li>
        <a href="#">Documentation</a>
      </li>
    </ul>
    <a href="#" className="button --primary">
      Login
    </a>
  </div>
);

export const Navbar: React.FC = () => {
  const [burger, setBurger] = React.useState(false);

  return (
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
        <a className="button --primary" href="https://au-syd1.pokko.io/">
          Login
        </a>
      </div>
      <div className="navbar__burger">
        <button
          className="navbar__burger-toggle"
          onClick={() => setBurger(true)}
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.9999 2.64C16.8653 2.64 11.941 4.67971 8.31031 8.31041C4.6796 11.9411 2.63989 16.8654 2.63989 22C2.63989 27.1346 4.6796 32.0589 8.31031 35.6896C11.941 39.3203 16.8653 41.36 21.9999 41.36C27.1345 41.36 32.0588 39.3203 35.6895 35.6896C39.3202 32.0589 41.3599 27.1346 41.3599 22C41.3599 16.8654 39.3202 11.9411 35.6895 8.31041C32.0588 4.67971 27.1345 2.64 21.9999 2.64V2.64Z"
              stroke="#384057"
              strokeWidth="1.76"
              strokeMiterlimit="10"
            />
            <path
              d="M13.2 27.28H30.8M13.2 22H30.8H13.2ZM13.2 16.72H30.8H13.2Z"
              stroke="#384057"
              strokeWidth="1.76"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <NavbarBurger active={burger} toggle={() => setBurger(false)} />
      </div>
    </nav>
  );
};
