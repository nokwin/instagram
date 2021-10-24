import { useEffect, useState } from "react";

export const useKeyboardHold = (key: string) => {
  const [onHold, setOnHold] = useState(false);

  useEffect(() => {
    const downHandler = (ev: KeyboardEvent) => {
      if (ev.key === key) {
        setOnHold(true);
      }
    };

    const upHandler = (ev: KeyboardEvent) => {
      if (ev.key === key) {
        setOnHold(false);
      }
    };

    document.addEventListener("keydown", downHandler);
    document.addEventListener("keyup", upHandler);

    return () => {
      document.removeEventListener("keydown", downHandler);
      document.removeEventListener("keyup", upHandler);
    };
  }, []);

  return onHold;
};
