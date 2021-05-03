import React from "react";

const FormattedDiv = (props: {
  children: any;
  height?: number;
  styles?: any;
  ref?: any;
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
        ...props.styles,
      }}
      ref={props.ref ? props.ref : undefined}
    >
      <div
        style={{
          width: "95%",
          maxWidth: 1000,
          display: "flex",
          justifyContent: "flex-start",
          minHeight: props.height ? props.height - 65 : undefined,
          zIndex: 1,
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default FormattedDiv;
