import React, { useState } from "react";

import "./Screen.css";

interface Props {
  isOpen?: boolean;
  url: string;
  closeButtonBackgroundColor?: string;
  closeButtonColor?: string;
  onClose?: () => void;
}

function Screen(props: Props) {
  const [hasLoaded, setHasLoaded] = useState(false);

  const screenUrl = new URL(props.url);
  const buttonStyle = {
    backgroundColor: props.closeButtonBackgroundColor,
    color: props.closeButtonColor,
  };

  screenUrl.searchParams.append("embedded", "true");

  if (!props.isOpen) {
    return null;
  }

  return (
    <div className={`guidde-screen-wrapper ${props.isOpen ? "open" : ""}`}>
      <iframe
        src={screenUrl.toString()}
        onLoad={() => setHasLoaded(true)}
        className={`${hasLoaded ? "loaded" : ""}`}
      />

      <button onClick={props.onClose} style={buttonStyle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="currentColor"
            d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
          />
        </svg>
      </button>
    </div>
  );
}

Screen.defaultProps = {
  closeButtonBackgroundColor: "#f3f4f6",
  closeButtonColor: "#11181d",
  isOpen: false,
};

export default Screen;
