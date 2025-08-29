import { useState } from "react";
import PropTypes from "prop-types";
import { generateSize } from "./utils.js";

export const Button = ({
  children,
  variant = "primary",
  rounded = "md",
  size = "md",
  tooltip,
  tooltipPosition = "top",
  ...rest
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const isDisabled = variant === "disabled";
  const hasClick = !!rest.onClick;

  const baseClasses =
    "font-poppins transition-all duration-300 transform active:scale-95 active:shadow-sm";
  const cursorClass =
    isDisabled && !hasClick ? "cursor-not-allowed" : "cursor-pointer";

  const tooltipClasses = `absolute z-10 px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded-md shadow-sm whitespace-nowrap ${
    tooltipPosition === "top"
      ? "bottom-full left-1/2 transform -translate-x-1/2 mb-2"
      : tooltipPosition === "bottom"
        ? "top-full left-1/2 transform -translate-x-1/2 mt-2"
        : tooltipPosition === "left"
          ? "right-full top-1/2 transform -translate-y-1/2 mr-2"
          : "left-full top-1/2 transform -translate-y-1/2 ml-2"
  }`;

  return (
    <div className="relative inline-flex w-full">
      <button
        {...rest}
        disabled={isDisabled}
        onMouseEnter={() => tooltip && setShowTooltip(true)}
        onMouseLeave={() => tooltip && setShowTooltip(false)}
        onClick={(e) =>
          variant === "disabled" ? e.preventDefault() : rest?.onClick?.(e)
        }
        className={`font-[Poppins] ${
          variant === "danger"
            ? "bg-red-500 shadow-red-500"
            : variant === "secondary"
              ? "bg-white shadow-gray-400"
              : variant === "primary"
                ? "bg-gradient-to-r from-[#4C76A3] to-[#203D5D] shadow-[#466c8e]"
                : variant === "success"
                  ? "bg-green-500 shadow-green-500"
                  : variant === "warning"
                    ? "bg-[#ffcc00] shadow-yellow-500"
                    : "bg-gray-300 shadow-gray-300"
        } ${
          variant === "secondary"
            ? "text-black"
            : variant === "disabled"
              ? "text-gray-500"
              : "text-white"
        } ${
          rounded === "sm"
            ? "rounded-sm"
            : rounded === "full"
              ? "rounded-full"
              : rounded === "lg"
                ? "rounded-lg"
                : "rounded-md"
        } font-poppins ${generateSize(size)} ${baseClasses} ${cursorClass} ${
          variant === "danger"
            ? "active:shadow-red-700"
            : variant === "secondary"
              ? "active:shadow-gray-500"
              : variant === "primary"
                ? "active:shadow-blue-900"
                : variant === "success"
                  ? "active:shadow-green-700"
                  : variant === "warning"
                    ? "active:shadow-yellow-600"
                    : "active:shadow-gray-400"
        } ${
          variant === "secondary" ? "border border-solid border-[#2b6394]" : ""
        } ${
          variant === "danger"
            ? "hover:bg-red-600"
            : variant === "secondary"
              ? "hover:bg-gray-100"
              : variant === "primary"
                ? "hover:bg-gradient-to-r hover:from-[#2b6394] hover:to-[#2b6394]"
                : variant === "success"
                  ? "hover:bg-green-600"
                  : variant === "warning"
                    ? "hover:bg-[#d09c35]"
                    : variant === "disabled" && rest.onClick
                      ? "hover:bg-gray-400"
                      : ""
        }`}
      >
        {children}
      </button>
      {tooltip && showTooltip && (
        <div className={tooltipClasses}>{tooltip}</div>
      )}
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "danger",
    "success",
    "disabled",
    "warning",
  ]),
  rounded: PropTypes.oneOf(["sm", "md", "lg", "full"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  tooltip: PropTypes.string,
  tooltipPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
};
