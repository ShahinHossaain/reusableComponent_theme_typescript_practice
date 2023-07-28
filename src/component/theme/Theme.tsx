import { useState } from "react";

const Theme = () => {
  const [theme, setTheme] = useState("light");
  const handleThemeChange = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");
  return (
    <div className={theme}>
      <button
        onClick={handleThemeChange}
        className="bg-primary  md:text-2xl shahin:text-4xl lg:text-6xl"
      >
        click
      </button>
    </div>
  );
};

export default Theme;
