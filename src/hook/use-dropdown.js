import { useState } from 'react';

const UseDropdown = () => {
  const [dropdownIsShown, setDropdownIsShown] = useState(false);
  const dropdownHandler = () => {
    setDropdownIsShown(true);

    if (dropdownIsShown) {
      setDropdownIsShown(false);
    }
  };
  const dropdownIsVisible = dropdownIsShown;

  return{
    dropdownHandler,
    dropdownIsVisible
  }
};

export default UseDropdown;
