import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

function Loading() {
  let [loading] = useState(true);
  let [color] = useState("#ffffff");

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <ClipLoader color={color} loading={loading} css={override} size={150} />
  );
}

export default Loading;
