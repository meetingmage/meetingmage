import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<Props> = props => {
  return (
    <button
      onClick={props.onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
