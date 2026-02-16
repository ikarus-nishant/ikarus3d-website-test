import React from "react";
import { useState } from "react";
import { useLocalStorage } from "react-use";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("darkMode", false);
  const [toggleChecked, setToggleChecked] = useState(isDarkMode);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setToggleChecked(!toggleChecked);
  };

  return (
    <div className="dark-mode-toggle">
      <input
        type="checkbox"
        className="dark-mode-toggle-input"
        checked={toggleChecked}
        onChange={toggleDarkMode}
      />
      <label className="dark-mode-toggle-label">Dark Mode</label>
    </div>
  );
};

export default DarkMode;

// const DarkMode = () => {
//   let clickedClass = "clicked";
//   const body = document.body;
//   const lightTheme = "";
//   const darkTheme = "dark";
//   let theme;

//   if (localStorage) {
//     theme = localStorage.getItem("theme");
//   }

//   if (theme === lightTheme || theme === darkTheme) {
//     body.classList.add(theme);
//   } else {
//     body.classList.add(lightTheme);
//   }

//   const switchTheme = (e) => {
//     if (theme === darkTheme) {
//       body.classList.replace(darkTheme, lightTheme);
//       e.target.classList.remove(clickedClass);
//       localStorage.setItem("theme", "light");
//       theme = lightTheme;
//     } else {
//       body.classList.replace(lightTheme, darkTheme);
//       e.target.classList.add(clickedClass);
//       localStorage.setItem("theme", "dark");
//       theme = darkTheme;
//     }
//   };

//   return (
//     <button
//       className={theme === "dark" ? clickedClass : ""}
//       id="darkMode"
//       onClick={(e) => switchTheme(e)}
//     ></button>
//   );
// };

// export default DarkMode;
