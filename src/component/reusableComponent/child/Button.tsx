import React, { ButtonHTMLAttributes } from "react";

// Define the TypeScript interface for the button props
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  //এখানে extends ButtonHTMLAttributes<HTMLButtonElement> দ্বারা বুঝানো হয়েছে ButtonProps এর ভিতর normal button এর কিছু properties like disabled, type, onClick, etc.ও use  করা যাবে।
  // You can add additional props specific to your button component
  // For example, 'size', 'variant', 'onClick', etc.
  size: "small" | "medium" | "large";
  variant: "primary" | "secondary" | "outline";
}

const Button: React.FC<ButtonProps> = ({
  //এখানে React.FC<ButtonProps> দ্বারা বুঝানো হয়েছে Button er type হল React Functional Component যার props গুলো ButtonProps define করবে।
  size,
  variant,
  children,
  ...rest // Rest props to capture all other attributes passed to the button
}) => {
  // Customize button styles based on 'size' and 'variant' props
  const buttonStyle = `px-4 py-2 mx-3 text-white rounded-md ${
    variant === "primary" ? "bg-primary-500" : "bg-primary-400"
  } ${
    size === "small" ? "text-sm" : size === "large" ? "text-lg" : "text-base"
  }`;

  console.log(buttonStyle);
  return (
    <button className={buttonStyle} {...rest}>
      {children}
    </button>
  );
};

export default Button;
