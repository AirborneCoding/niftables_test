import React from "react";

const sizes = {
  xs: "text-base font-normal",
  lg: "text-[68px] font-normal md:text-5xl",
  s: "text-lg font-normal",
  md: "text-[38px] font-normal md:text-4xl sm:text-[34px]",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "s",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-satoshi ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
