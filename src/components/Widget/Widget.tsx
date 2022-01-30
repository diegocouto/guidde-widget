import React, { useState } from "react";
import Button from "../Button";
import Screen from "../Screen";

interface Props {
  url: string;
}

function Widget(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleScreen() {
    setIsOpen((open) => !open);
  }

  return (
    <>
      <Screen isOpen={isOpen} url={props.url} onClose={toggleScreen} />

      {!isOpen && (
        <Button
          onClick={toggleScreen}
          style={{ position: "fixed", right: "1.5rem", bottom: "1.5rem" }}
        />
      )}
    </>
  );
}

export default Widget;
