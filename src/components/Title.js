import React, { useState } from "react";

function Title() {
  const [title] = useState("Couples Moments");

  return <h1>{title}</h1>;
}

export default Title;
