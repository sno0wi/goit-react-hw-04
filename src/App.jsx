import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import "./App.css";
import axios from "axios";

const key = "Qjhh6Cb2QdYGSLBf72MnR8DQudqjygWOgkX801HJ6JY";
axios.defaults.baseURL = `https://api.unsplash.com/`;

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const params = new URLSearchParams({
        client_id: key,
        query: searchTerm,
        per_page: 10,
        page: 1,
      });

      try {
        const response = await axios.get(`/search/photos?${params}`);
        setPhotos(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    if (searchTerm !== "") {
      fetchData();
    }
  }, [searchTerm]);

  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />
      <ImageGallery photos={photos} />
    </>
  );
}

export default App;
