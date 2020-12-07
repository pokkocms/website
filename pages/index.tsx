import * as React from "react";
import Head from "next/head";
import Document from "next/document";
import { Metadata } from "../components/Metadata";
import { Logo } from "../components/Logo";

type Tile = {
  icon: string;
  title: string;
  body: string;
};

const tiles: Tile[] = [
  {
    icon: "",
    title: "Content inheritance",
    body:
      "Create a global set of models that can be reused to assemble content types. If you need to change or update the model, it updates everywhere. No more repetition. Cleaner data structure.",
  },
  {
    icon: "",
    title: "Hierarchical content structure",
    body:
      "Visualise the structure of your content. Dynamically generate listings and directories. Add search and filter parameters for listings.",
  },
  {
    icon: "",
    title: "Pay-as-you-need pricing",
    body:
      "Pricing that doesn’t jump to $400 as soon as you need one small feature. Basic resources scale granularly, and feature packages can be added with ease.",
  },
  {
    icon: "",
    title: "Localized billing and hosting",
    body:
      "We bill in your local currency (so it’s consistent). You can also pick where you want everything hosted with our Architecture Pack.",
  },
  {
    icon: "",
    title: "Integrated web hooks",
    body:
      "One-click integrations and web hooks to all of your favourite systems and frameworks, like Gatsby.js and Next.js. We continue to add new ones regularly.",
  },
  {
    icon: "",
    title: "Smart workflows and user roles",
    body:
      "We’re the only headless CMS that offers authoring workflows and granular role management. Available with our Content Pack.",
  },
];

type WhyTile = {
  title: string;
  body: string;
  features: string[];
};

const why: WhyTile[] = [
  {
    title: "We started with the best bits from headless systems",
    body:
      "We offer everything you’ve come to know and love about headless content management systems: performant CDN, beautiful GraphQL API, easy to structure and support for all of your favourite tech and frameworks.",
    features: [
      "REST and GraphQL API",
      "Global Content Delivery Network",
      "Fully modular content structure",
      "One-click integrations",
    ],
  },
  {
    title: "Enhanced with time savers from traditional systems",
    body:
      "Pokko includes smart features that are common to traditional content management experiences. We reduce replication by providing native ‘normalisation’ (akak content inheritence), as well as tree-based content heirarchy and the ability to copy and syncronise environments.",
    features: [
      "Content inheritance",
      "Hierarchical content structure",
      "Dynamic listings",
      "Enviornment syncronisation",
    ],
  },
  {
    title: "Containerised so you can build an experience that’s right for you",
    body:
      "Our pay-as-you-need structure means you can incrementally scale your experience. Micro-manage individual resources to maximise return on investment, and add features to your solution based on your needs. Gone are the days of mammoth price increases.",
    features: [
      "Localised billing",
      "Incrementally manage resources",
      "Use-case features are separated",
      "SSO without an enterprise price tag",
    ],
  },
];

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
        <div className="hero__right">...</div>
      </div>
    </div>
    <div className="features__container">
      <div className="features__header">
        <h2>Affordable enterprise-level features</h2>
        <p>
          Everything you expect from a leading headless content management
          system, plus all this fun stuff you won’t get anywhere else
        </p>
      </div>
      <ul className="features__tiles">
        {tiles.map((ent, idx) => (
          <li key={idx}>
            <svg />
            <strong>{ent.title}</strong>
            <p>{ent.body}</p>
          </li>
        ))}
      </ul>
    </div>
    <div className="eap-form__container">eap form.</div>
    <div className="why__container">
      <ul className="why__items">
        {why.map((ent, idx) => (
          <li key={idx} className="why-item__container">
            {
              idx % 2 !== 0 ? (
                <div className="why-item__icon"></div>
              ) : null /* TODO: change this to CSS */
            }
            <div className="why-item__detail">
              <strong>{ent.title}</strong>
              <p>{ent.body}</p>
              <ul>
                {ent.features.map((str, idx2) => (
                  <li key={idx2}>{str}</li>
                ))}
              </ul>
            </div>
            {idx % 2 === 0 ? <div className="why-item__icon"></div> : null}
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default Home;
