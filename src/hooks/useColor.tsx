import { useEffect, useState } from "react";

export const useColor = () => {
  const [color, setColor] = useState(
    localStorage.getItem("color") || "#000000"
  );

  useEffect(() => {
    document.documentElement.style.setProperty("--color-primary", color);
  }, []);

  const changeColor = (color: string) => {
    localStorage.setItem("color", color);
    setColor(color);
    document.documentElement.style.setProperty("--color-primary", color);
  };

  return { color, changeColor };
};
