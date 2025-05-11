import React, {useState} from 'react';

import { SearchBar } from '../components/SearchBar.jsx';
import { userData } from '../fakeData.js';

export default {
  title: 'Components/Inputs/SearchBar',
  component: SearchBar,
  argTypes : {
    mode: { options: ['primary', 'secondary', 'dark']},
  }
};

const SearchBarHooks = (args) => {
  const [storedInput, setStoredInput] = useState('');

  function handleSearch(e) {
  let storedInput = e.target.value;
  setStoredInput(storedInput);
  }
  
  function debounce(handleSearch, milliseconds) {
  
    let timeout;
  
    return function(...args) {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        handleSearch(...args);
  
      }, milliseconds);
    }
  };
  return <SearchBar 
  {...args}
  storedInput={storedInput}
  handleSearch={handleSearch}
  debounce={debounce}
   />
}

export const Primary = {
  args : {
    name: 'SearchBar',
    label: 'solid',
    mode: 'primary',
    userData
  },
  render: (args) => <SearchBarHooks {...args} />
}

export const Secondary = {
  args : {
    ...Primary.args,
    mode: 'secondary',
    label: 'outline'
  },
  render: (args) => <SearchBarHooks {...args} />
  }

export const DarkMode = {
  args : {
    ...Primary.args,
    mode: 'dark',
    label: 'solid'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  render: (args) => <SearchBarHooks {...args} />

  }
