import React, { useContext } from "react";
import Spinner from "react-spinkit";

import { StyleContext } from "../../functions/Style";

const Loading = () => {
  const { height, width } = useContext(StyleContext);
  return (
    <div
      style={{
        height: typeof height === "number" ? height - 55 : height,
        width,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Spinner name="cube-grid" />
      </div>
    </div>
  );
};

export default Loading;
