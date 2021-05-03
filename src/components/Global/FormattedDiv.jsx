import React from "react";

const FormattedDiv = ({ children, height, styles = {}, ref = null }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
        ...styles,
      }}
      ref={ref ? ref : undefined}
    >
      <div
        style={{
          width: "95%",
          maxWidth: 1000,
          display: "flex",
          justifyContent: "flex-start",
          minHeight: height ? height - 65 : undefined,
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default FormattedDiv;