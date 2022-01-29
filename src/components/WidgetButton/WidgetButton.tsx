import React from "react";

import "./WidgetButton.css";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  color?: string;
}

function WidgetButton({ backgroundColor, color, style, ...props }: Props) {
  return (
    <button
      className="guidde-widget-button"
      style={{ ...style, backgroundColor, color }}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 79 117"
      >
        <ellipse cx="40.729" cy="104.18" rx="12.882" ry="12.818" />
        <path d="M50.514 85.171a18.34 18.34 0 0 0-9.785-2.808 18.34 18.34 0 0 0-10.218 3.089c.046-6.043.553-9.612 2.616-14.465 2.65-6.232 7.5-12.263 15.2-18.83 8.966-7.962 11.528-15.975 9.15-22.274-2.195-5.811-8.596-9.884-16.97-9.884-8.088 0-13.205 2.161-16.475 5.791-2.312 2.567-3.663 5.904-4.081 8.958L.135 32.039c.923-6.752 3.773-13.791 9.036-19.634C16.33 4.457 26.884-.001 40.506-.001c16.407 0 30.432 8.923 35.68 22.818 5.528 14.637.206 31.212-14.673 44.377l-.145.126c-5.559 4.732-8.53 8.42-9.837 11.493-.753 1.772-.978 3.141-1.018 6.358l.001.001z" />
      </svg>
    </button>
  );
}

WidgetButton.defaultProps = {
  backgroundColor: "#9333ea",
  color: "#ffffff",
};

export default WidgetButton;
