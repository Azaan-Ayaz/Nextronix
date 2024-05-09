import React from "react";

const sizes = {
  xs: "text-sm font-medium leading-[145%]",
  s: "text-lg font-normal leading-[145%]",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900_01 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
