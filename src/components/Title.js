import React, { useState } from "react";

function Title() {
  const [title] = useState("Couples Moments");

  return (<div>
  <h1 className="title">{title}</h1>;
</div>)
}

export default Title;
