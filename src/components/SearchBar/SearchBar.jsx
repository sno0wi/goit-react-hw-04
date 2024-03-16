import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ setSearchTerm }) => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchTerm = inputRef.current.value;
    if (searchTerm === "") {
      toast("Please enter a search term.");
      return;
    }
    setSearchTerm(searchTerm);
    inputRef.current.value = "";
  };

  return (
    <header>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          ref={inputRef}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
