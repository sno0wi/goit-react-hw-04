import { useRef } from "react";

const SearchBar = ({ setSearchTerm }) => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchTerm = inputRef.current.value;
    setSearchTerm(searchTerm);
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
