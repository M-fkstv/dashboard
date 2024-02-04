import { useState } from 'react';

import { Search as SearchIcon } from '../Icons/Search';

import './Search.css';

export const Search = () => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <form className='search' method='get'>
      <div className='search__wrap'>
        <input
          name='q'
          className='search__input'
          type='text'
          placeholder='Search '
          onChange={handleChange}
          value={query}
        />
        <span className='search__border'></span>
        <span className='search__splitter'></span>
        <button className='search__submit' type='submit'>
          <SearchIcon className='search__icon' />
        </button>
      </div>
    </form>
  );
};
