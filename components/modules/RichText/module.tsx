import * as React from "react";
import { createEditor } from "slate";
import {
  Slate,
  Editable,
  withReact,
  RenderElementProps,
  RenderLeafProps,
} from "slate-react";
import { RichTextModuleFragment } from "../../../pokko/queries";

export const RichTextModule: React.FC<RichTextModuleFragment> = ({ body }) => {
  const editor = React.useMemo(() => withReact(createEditor()), []);

  if (body) {
    return (
      <div className="richtext__container">
        <Slate editor={editor} value={body as any} onChange={() => {}}>
          <div className="richtext__content">
            <Editable
              readOnly
              renderElement={renderElement}
              renderLeaf={renderLeaf}
            />
          </div>
        </Slate>
      </div>
    );
  }
  return null;
};

const renderElement = ({
  attributes,
  children,
  element,
}: RenderElementProps) => {
  switch (element.type) {
    case "block-quote":
      return <blockquote {...attributes}>{children}</blockquote>;
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>;
    case "heading-one":
      return <h1 {...attributes}>{children}</h1>;
    case "heading-two":
      return <h2 {...attributes}>{children}</h2>;
    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "numbered-list":
      return <ol {...attributes}>{children}</ol>;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

const renderLeaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};
