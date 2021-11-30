import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { IconSearch } from '.';

export default function Search() {
  const router = useRouter();
  const [q, setQ] = useState('');
  
  const searchTerm = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${q}`);
    searchTerm.current.blur();
  }

  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        type="text"
        ref={searchTerm}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search Products"
        className="search__input"
      />

      <button
        type="submit"
        className="search__btn"
        aria-label={`Search for ${q}`}
      >
        <IconSearch stroke="#fff" />
      </button>
    </form>
  );
}