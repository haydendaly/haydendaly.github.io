import React from "react";
import Spinner from "react-spinkit";

const Loading = (props: {
  height: number | string;
  width: number | string;
}) => (
  <div
    style={{
      height:
        typeof props.height === "string" ? props.height : props.height - 55,
      width: props.width,
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

export default Loading;
