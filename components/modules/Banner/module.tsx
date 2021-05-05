import * as React from "react";

export type BannerProps = {
  icon?: React.ReactNode;
  body: React.ReactNode;
  colour?: "grey";
};

export const Banner: React.FC<BannerProps> = ({ icon, body, colour }) => (
  <div className={"banner__container" + (colour ? ` --${colour}` : "")}>
    {icon ? <div className="banner__icon">{icon}</div> : null}
    <div className="banner__body">{body}</div>
  </div>
);
