import * as React from "react";
import Head from "next/head";
import Document from "next/document";
import { Metadata } from "../components/Metadata";
import { Logo } from "../components/Logo";

const Navbar: React.FC = () => (
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

const Home: React.FC<Document> = () => (
  <>
    <Head>
      <title>Pokko - Content made better</title>
      <Metadata />
    </Head>
    <div className="hero__container">
      <Navbar />
      <div className="hero__content">
        <div className="hero__left">
          <h1>
            Structured content
            <br />
            <span>Ready for anyone creating anything</span>
          </h1>
          <p>
            Pokko is a platform for connecting content to any digital product.
            Infinitely scales up or down. Effortlessly changes direction.
          </p>
          <a href="https://au-syd1.pokko.io/register">Get started</a>
        </div>
        <div className="hero__right">graphic</div>
      </div>
    </div>
  </>
);

export default Home;
