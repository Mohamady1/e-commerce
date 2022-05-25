import React from "react";

export default function Background({ src }) {
  const background = {
    backgroundImage: `url(${src})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "96vh",
  };

  return <div style={background}></div>;
}
