import * as React from "react";
import ReactMarkdown from "react-markdown";
import { HeroModuleFragment } from "../../../api/queries";
import { Navbar } from "../../Navbar/module";

export const HeroModule: React.FC<HeroModuleFragment> = ({
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
