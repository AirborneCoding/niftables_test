import React from "react";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-md",
} as const;
const variants = {
  gradient: {
    blue_A200_purple_A700_01: "bg-gradient text-white-A700",
  },
  outline: {
    gray_900: "border-gray-900 border border-solid text-white-A700",
    white_A700: "border-white-A700 border-2 border-solid text-white-A700",
  },
} as const;
const sizes = {
  sm: "h-[44px] px-[30px] text-lg",
  lg: "h-[54px] px-[35px] text-lg",
  xs: "h-[34px] px-[9px]",
  md: "h-[51px] px-[18px] text-lg",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "md",
  color = "gray_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer  ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
