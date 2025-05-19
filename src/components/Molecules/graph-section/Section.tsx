import React from "react";

import Donough from "./Donough";

interface SectionProps {
  title: string;
  type: "donough" | "bar" | "line";
  graphConfigration: any;
}

const Section: React.FC<SectionProps> = ({
  graphConfigration,
  title,
  type,
}) => {
  return (
    <div>
      {title}
      {type === "donough" && <Donough {...graphConfigration} />}
    </div>
  );
};

export default Section;
