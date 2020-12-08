import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import { Metadata } from "../components/Metadata";
import { Logo } from "../components/Logo";
import { GetStaticProps } from "next";
import { client } from "../lib/pokko";
import {
  FeatureTilesModuleFragment,
  GetHomeDocument,
  GetHomeQuery,
  HeroModuleFragment,
  HomeModuleFragment,
  IconTilesModuleFragment,
  ResourceTileModuleFragment,
} from "../api/queries";
import ReactMarkdown from "react-markdown";

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

const HeroModule: React.FC<HeroModuleFragment> = ({
  title,
  link,
  heroBody,
  image,
}) => {
  return (
    <div className="hero__container">
      <Navbar />
      <div className="hero__content">
        <div className="hero__left">
          <h1>
            <ReactMarkdown renderers={{ paragraph: React.Fragment }}>
              {title}
            </ReactMarkdown>
          </h1>
          <p>{heroBody}</p>

          {link.__typename === "Link" ? (
            <a href={link.target}>{link.text}</a>
          ) : null}
        </div>
        <div className="hero__right">
          <img src={image?.url} />
        </div>
      </div>
    </div>
  );
};

const IconTilesModule: React.FC<IconTilesModuleFragment> = ({
  layout,
  title,
  summary,
  iconTileBody,
}) => {
  if (layout === "large") {
    return (
      <div className="features__container">
        <div className="features__header">
          <h2>{title}</h2>
          <p>{summary}</p>
        </div>
        <ul className="features__tiles">
          {iconTileBody.map((ent, idx) =>
            ent.__typename === "IconTile" ? (
              <li key={idx}>
                <img src={ent.icon?.url} />
                <strong>{ent.title}</strong>
                <p>{ent.body}</p>
              </li>
            ) : null
          )}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="pricing__container">
        <div className="pricing__header">
          <h2>{title}</h2>
          <p>{summary}</p>
        </div>
        <ul className="pricing__tiles">
          {iconTileBody.map((ent, idx) =>
            ent.__typename === "IconTile" ? (
              <li key={idx}>
                <img src={ent.icon?.url} />
                <strong>{ent.title}</strong>
                <p>{ent.body}</p>
              </li>
            ) : null
          )}
        </ul>
      </div>
    );
  }
};

const GreenCheck: React.FC = () => (
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
);

const FeatureTilesModule: React.FC<FeatureTilesModuleFragment> = ({
  featureTilesBody,
}) => {
  return (
    <div className="why__container">
      <ul className="why__items">
        {featureTilesBody.map((ent, idx) =>
          ent.__typename === "FeatureTile" ? (
            <li key={idx} className="why-item__container">
              {idx % 2 !== 0 ? (
                <div className="why-item__icon">
                  <img src={ent.icon?.url} />
                </div>
              ) : null}
              <div className="why-item__detail">
                <strong>{ent.title}</strong>
                <p>{ent.body}</p>
                <ul>
                  {ent.features.map((str, idx2) => (
                    <li key={idx2}>
                      <GreenCheck />
                      <p>{str}</p>
                    </li>
                  ))}
                </ul>
              </div>
              {idx % 2 === 0 ? (
                <div className="why-item__icon">
                  <img src={ent.icon?.url} />
                </div>
              ) : null}
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

const ResourceTileModule: React.FC<ResourceTileModuleFragment> = ({
  title,
  summary,
  resourceTilesBody,
}) => {
  return (
    <div className="resources__container">
      <div className="resources__header">
        <h2>{title}</h2>
        <p>{summary}</p>
      </div>
      <ul className="resources__tiles">
        {resourceTilesBody.map((ent, idx) =>
          ent.__typename === "ResourceTile" ? (
            <li
              key={idx}
              className={
                !ent.link ||
                (ent.link.__typename === "Link" && !ent.link.target)
                  ? "--disabled"
                  : undefined
              }
            >
              <strong>{ent.title}</strong>
              <p>{ent.body}</p>
              {ent.link?.__typename === "Link" ? (
                !ent.link.target ? (
                  <span className="link-button --disabled">
                    {ent.link.text}
                  </span>
                ) : (
                  <Link href={ent.link.target}>
                    <a className="link-button">{ent.link.text}</a>
                  </Link>
                )
              ) : null}
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

const HomeModuleHandler: React.FC<HomeModuleFragment> = ({
  __typename,
  ...rest
}) => {
  switch (__typename) {
    case "Hero":
      return <HeroModule {...(rest as HeroModuleFragment)} />;
    case "IconTiles":
      return <IconTilesModule {...(rest as IconTilesModuleFragment)} />;
    case "FeatureTiles":
      return <FeatureTilesModule {...(rest as FeatureTilesModuleFragment)} />;
    case "ResourceTiles":
      return <ResourceTileModule {...(rest as ResourceTileModuleFragment)} />;
    default:
      return (
        <pre>
          unhandled module: {__typename} - {JSON.stringify(rest)}
        </pre>
      );
  }
};

const Home: React.FC<GetHomeQuery> = ({ entry }) =>
  entry.__typename === "ModularPage" ? (
    <>
      <Head>
        <title>Pokko - Content made better</title>
        <Metadata />
      </Head>
      {entry.body.map((ent, idx) => (
        <HomeModuleHandler key={idx} {...ent} />
      ))}
    </>
  ) : null;

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.query<GetHomeQuery>({ query: GetHomeDocument });

  return {
    revalidate: 5,
    props: { entry: res.data.entry },
  };
};

export default Home;
