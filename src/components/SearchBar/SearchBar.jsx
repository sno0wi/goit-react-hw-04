import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBtn.module.css";

const SearchBar = ({ handleSubmit }) => {
  const inputRef = useRef(null);

  const onHandleSubmit = (event) => {
    event.preventDefault();
    const searchTerm = inputRef.current.value;
    if (searchTerm === "") {
      toast("Please enter a search term.");
      return;
    }
    handleSubmit(searchTerm);
  };

  return (
    <header>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <form onSubmit={onHandleSubmit} className={css.searchForm}>
        <input
          className={css.searchInput}
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
