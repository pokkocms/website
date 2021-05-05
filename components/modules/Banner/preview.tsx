import { useRouter } from "next/dist/client/router";
import * as React from "react";
import { Banner } from "./module";

export const PreviewBanner: React.FC = () => {
  const { isPreview, asPath } = useRouter();

  if (!isPreview) {
    return null;
  }

  return (
    <Banner
      colour="grey"
      body={
        <>
          <p>
            You are viewing this site in Preview mode.{" "}
            <a href={`/api/preview?mode=public&path=${asPath}`}>
              Click here to exit
            </a>
            .
          </p>
        </>
      }
    />
  );
};
