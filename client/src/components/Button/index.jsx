import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[15px]",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-blue_gray-800",
  },
};
const sizes = {
  xs: "h-[55px] px-[35px] text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  variant = "fill",
  size = "xs",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center gap-4 text-center cursor-pointer text-blue_gray-800 text-base font-semibold border-gray-300 border-t border-l border-b-2 border-r border-solid bg-white-A700 rounded-[15px] ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700"]),
};

export { Button };
