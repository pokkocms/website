import * as React from "react";

export type BannerProps = {
  icon?: React.ReactNode;
  body: React.ReactNode;
};

export const Banner: React.FC<BannerProps> = ({ icon, body }) => (
  <div className="banner__container">
    {icon ? <div className="banner__icon">{icon}</div> : null}
    <div className="banner__body">{body}</div>
  </div>
);
