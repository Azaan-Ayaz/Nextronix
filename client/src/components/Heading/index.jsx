import React from "react";

const sizes = {
  s: "text-base font-semibold leading-[145%]",
  md: "text-4xl font-semibold leading-[120%]",
  xs: "text-sm font-semibold leading-[145%]",
  lg: "text-6xl font-semibold leading-[110%]",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
