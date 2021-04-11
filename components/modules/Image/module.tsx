import * as React from "react";
import Image from "next/image";
import { ImageModuleFragment } from "../../../pokko/queries";

export const ImageModule: React.FC<ImageModuleFragment> = ({ image }) => {
  if (image) {
    return (
      <div className="image__container">
        <div className="image__content">
          <Image src={image.url} layout="fill" />
        </div>
      </div>
    );
  }
  return null;
};
