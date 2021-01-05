import * as React from "react";
import { FeatureTilesModuleFragment } from "../../../pokko/queries";
import { GreenCheck } from "../../icons/GreenCheck";

export const FeatureTilesModule: React.FC<FeatureTilesModuleFragment> = ({
  featureTilesBody,
}) => {
  return (
    <div className="why__container">
      <ul className="why__items">
        {featureTilesBody.map((ent, idx) =>
          ent.__typename === "FeatureTile" ? (
            <li key={idx} className="why-item__container">
              <div className="why-item__bleed" />
              <div className="why-item__icon">
                <img src={ent.icon?.url} />
              </div>
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
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};
