import * as React from "react";

export type BannerProps = {
  icon: React.ReactNode;
  body: string;
};

export const Banner: React.FC<BannerProps> = ({ icon, body }) => (
  <div className="banner__container">
    <div className="banner__icon">{icon}</div>
    <div className="banner__body">{body}</div>
  </div>
);
