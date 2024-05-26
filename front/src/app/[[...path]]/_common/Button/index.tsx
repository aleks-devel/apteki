import React, { ReactNode } from "react";

import classNames from "classnames";

import style from "./style.module.scss";

type ButtonProps = {
  variant: "main" | "second";
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={classNames(style.button, style[variant])}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export const MainButton: React.FC<Omit<ButtonProps, "variant">> = (props) => (
  <Button variant="main" {...props} />
);
export const SecondButton: React.FC<Omit<ButtonProps, "variant">> = (props) => (
  <Button variant="second" {...props} />
);
