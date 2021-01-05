import * as React from "react";
import { RichTextModuleFragment } from "../../../pokko/queries";
import { SlateReactPresentation } from "./renderer";

export const RichTextModule: React.FC<RichTextModuleFragment> = ({ body }) => {
  if (body) {
    return (
      <div className="richtext__container">
        <div className="richtext__content">
          <SlateReactPresentation value={body} />
        </div>
      </div>
    );
  }
  return null;
};
