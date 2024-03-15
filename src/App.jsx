import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import "./App.css";
import axios from "axios";

const key = "Qjhh6Cb2QdYGSLBf72MnR8DQudqjygWOgkX801HJ6JY";
axios.defaults.baseURL = `https://api.unsplash.com/`;

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const params = new URLSearchParams({
        client_id: key,
        query: searchTerm.toLocaleLowerCase(),
        per_page: 10,
        page: page,
      });

      try {
        const response = await axios.get(`/search/photos?${params}`);
        setPhotos((prevPhotos) => [...prevPhotos, ...response.data.results]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    if (searchTerm !== "") {
      fetchData();
    }
  }, [searchTerm, page]);

  const loadMore = async () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />
      {photos.length > 0 && (
        <>
          <ImageGallery photos={photos} />
          <LoadMoreBtn loadMore={loadMore} />
        </>
      )}
    </>
  );
}

export default App;
