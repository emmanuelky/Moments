import React, { useState } from "react";

function Title() {
  const [title] = useState("Moments");

  return <h1>{title}</h1>;
}

export default Title;
