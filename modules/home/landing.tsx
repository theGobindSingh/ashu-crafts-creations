import {
  Options,
  documentToReactComponents,
} from "@contentful/rich-text-react-renderer";
import type { Document } from "@contentful/rich-text-types";
import { BLOCKS } from "@contentful/rich-text-types";

export default function Landing({
  heading,
  subHeading,
  tagline,
}: {
  heading: string;
  subHeading: string;
  tagline: Document;
}) {
  const option: Options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_, children) => (
        <p className="hero-title">{children}</p>
      ),
    },
  };

  function StringToSpans(sentence: string) {
    const words = sentence.split(" ");
    return (
      <h1>
        {words.map((word, index) => (
          <span key={index}>{word}</span>
        ))}
      </h1>
    );
  }

  return (
    <div id="landing">
      {documentToReactComponents(tagline, option)}
      <div className="hero-brief">
        {StringToSpans(heading)}
        <h2 className="hero-heading">{subHeading}</h2>
      </div>
    </div>
  );
}
