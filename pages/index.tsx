import * as React from "react";
import Head from "next/head";
import Link from "next/link";
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

type ResourceTile = Tile & {
  action: {
    title: string;
    url: string;
    disabled?: boolean;
  };
};

const tilesResource: ResourceTile[] = [
  {
    icon: "",
    title: "Documentation",
    body:
      "Check out our documentation. See how you can get set up and how the Pokko works.",
    action: {
      title: "Take me there",
      url: "/",
    },
  },
  {
    icon: "",
    title: "Pokko University",
    body:
      "Not a developer? That’s okay, we have video tutorials which will show you how Pokko works and what it means.",
    action: {
      title: "Coming soon",
      url: "",
      disabled: true,
    },
  },
  {
    icon: "",
    title: "Blog",
    body:
      "Learn more about us and what makes us tick. We’re incredibly passionate about equality and being unconventional.",
    action: {
      title: "Coming soon",
      url: "",
      disabled: true,
    },
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

const tilesSmall: Tile[] = [
  {
    icon: "",
    title: "One active project",
    body:
      "That’s basically an entire product with a live API that you can connect to anything. Feel free to make as many inactive projects as you like though.",
  },
  {
    icon: "",
    title: "One collaborator",
    body:
      "That’s a single user who can log into the system. We know you’re going to share that login, that’s okay, but separate users are better for security and collaboration.",
  },
  {
    icon: "",
    title: "Two environments",
    body:
      "You can run up to two versions of your project and promote or copy content and configuration between them. Great for staging changes.",
  },
  {
    icon: "",
    title: "One active project",
    body:
      "That’s basically an entire product with a live API that you can connect to anything. Feel free to make as many inactive projects as you like though.",
  },
  {
    icon: "",
    title: "Unlimited roles",
    body:
      "You only have one user, but feel free to explore the depth of our roles and permissions to your heart’s desire.",
  },
  {
    icon: "",
    title: "Unlimted API requests p/month",
    body:
      "This is a limit on how many times your application can make a query to the project API. If you’re running a website, one visit is 1 request. For a chatbot, it’s 1 response.",
  },
  {
    icon: "",
    title: "200MB media library",
    body:
      "The total amount of image and document storage you have access to. This is enough for over 400 well-optimised images, or 100 PDFs. Enough to run a light-weight digital asset manager.",
  },
  {
    icon: "",
    title: "60 unique data models",
    body:
      "A data model is really what you came here for. It's a reusable, structured block of content with all the fields you need. This entire pricing module you are reading is one data model.",
  },
  {
    icon: "",
    title: "600 total entries",
    body:
      "An entry is a unique piece of content assembled with data models, like a content page. This entire home page is one entry.",
  },
  {
    icon: "",
    title: "Five build triggers",
    body:
      "A build trigger is a little web hook or build-step that takes the content API and bundles it with something. This might be a compile step which builds your website.",
  },
  {
    icon: "",
    title: "One week history retention",
    body:
      "This is how far back you will see content changes. You can use this to see who updated content last, or roll back to an older version of an entry.",
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
          system, plus all this fun stuff you won’t get anywhere else.
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
                  <li key={idx2}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="10" fill="#CCF0EC" />
                      <path
                        d="M5.71411 11.3251L7.69514 13.22C8.03599 13.5461 8.57627 13.5353 8.90382 13.1959L14.2855 7.61914"
                        stroke="#007F73"
                        strokeWidth="1.5"
                      />
                    </svg>

                    <p>{str}</p>
                  </li>
                ))}
              </ul>
            </div>
            {idx % 2 === 0 ? <div className="why-item__icon"></div> : null}
          </li>
        ))}
      </ul>
    </div>
    <div className="pricing__container">
      <div className="pricing__header">
        <h2>Start with the basics, at no cost</h2>
        <p>
          What you see here is currently running our entire website, and will
          continue to do so until the end of time. And that’s barely scratching
          the surface.
        </p>
      </div>
      <ul className="pricing__tiles">
        {tilesSmall.map((ent, idx) => (
          <li key={idx}>
            <svg />
            <strong>{ent.title}</strong>
            <p>{ent.body}</p>
          </li>
        ))}
      </ul>
    </div>
    <div className="eap-form__container">eap form.</div>
    <div className="resources__container">
      <div className="resources__header">
        <h2>Want to know how it works?</h2>
        <p>
          Good job for making it this far! Still not convinced? Get to know us a
          little better, I’m sure you’ll find something you like.
        </p>
      </div>
      <ul className="resources__tiles">
        {tilesResource.map((ent, idx) => (
          <li
            key={idx}
            className={ent.action.disabled ? "--disabled" : undefined}
          >
            <strong>{ent.title}</strong>
            <p>{ent.body}</p>
            {ent.action.disabled ? (
              <span className="link-button --disabled">{ent.action.title}</span>
            ) : (
              <Link href={ent.action.url}>
                <a className="link-button">{ent.action.title}</a>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default Home;
