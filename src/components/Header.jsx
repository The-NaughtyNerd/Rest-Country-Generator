import { BsMoon } from 'react-icons/bs';
import { useState } from 'react';
import useDarkMode from '../theme/useDarkMode';

const Header = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkMode, setDarkMode] = useState(
    colorTheme === 'light' ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  return (
    <>
      <header className="mt-0 text-lightText  dark:text-white ">
        <nav className="fixed w-full bg-white shadow-md dark:bg-darkBlue flex justify-between py-6 px-8 md:px-20 z-20">
          <h1 className="font-bold text-[1.4rem] md:text-[1.8rem] ">
            Where in the world?
          </h1>
          <div className="flex gap-3 items-center">
            <BsMoon
              checked={darkMode}
              onClick={toggleDarkMode}
              className="h-6 w-6 cursor-pointer dark:text-white"
            />
            <p className="text-[1.2rem] md:text-[1.4rem] font-light">
              Dark Mode
            </p>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
