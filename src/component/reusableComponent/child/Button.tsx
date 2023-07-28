import React, { ButtonHTMLAttributes } from "react";

// Define the TypeScript interface for the button props
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // You can add additional props specific to your button component
  // For example, 'size', 'variant', 'onClick', etc.
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "outline";
}

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  variant = "primary",
  children,
  ...rest // Rest props to capture all other attributes passed to the button
}) => {
  // Customize button styles based on 'size' and 'variant' props
  const buttonStyle = `px-4 py-2 text-white rounded-md ${
    variant === "primary" ? "bg-primary-500" : "bg-primary-400"
  } ${
    size === "small" ? "text-sm" : size === "large" ? "text-lg" : "text-base"
  }`;

  return (
    <button className={buttonStyle} {...rest}>
      {children}
    </button>
  );
};

export default Button;
