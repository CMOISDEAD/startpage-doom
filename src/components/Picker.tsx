import { useColor } from "../hooks/useColor";

export const Picker = () => {
  const { color, changeColor } = useColor();

  return (
    <input
      type="color"
      className="w-6 h-6 bg-transparent rounded-full border-0 cursor-pointer outline-0"
      value={color}
      onChange={(e) => changeColor(e.target.value)}
    />
  );
};
