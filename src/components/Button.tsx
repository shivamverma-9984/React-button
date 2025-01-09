import * as React from "react";
import { ReactNode } from "react";
import "./Button.css"
type PropsType = {
  children: ReactNode;
  onClick?: () => void;
};
const Button = ({ children, onClick }: PropsType) => {
  return (
    <button
      onClick={onClick}
     className="button"
    >
      {children}
    </button>
  );
};

export { Button };