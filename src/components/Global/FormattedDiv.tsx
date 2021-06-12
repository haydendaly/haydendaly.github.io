import React from "react";

const FormattedDiv = (props: {
  children: any;
  height?: number | string;
  styles?: any;
  ref?: any;
}) => {
  const { children, height, styles, ref } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
        ...styles,
      }}
      ref={ref}
    >
      <div
        style={{
          width: "95%",
          maxWidth: 1000,
          display: "flex",
          justifyContent: "flex-start",
          minHeight: typeof height === "number" ? height - 65 : undefined,
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default FormattedDiv;
