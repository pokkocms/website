import { IconTilesModuleFragment } from "../../../pokko/queries";

export const IconTilesModule: React.FC<IconTilesModuleFragment> = ({
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
