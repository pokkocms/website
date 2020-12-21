import * as React from "react";
import Link from "next/link";
import { ResourceTileModuleFragment } from "../../../api/queries";

export const ResourceTileModule: React.FC<ResourceTileModuleFragment> = ({
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
      <div className="resources__tile-container">
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
    </div>
  );
};
