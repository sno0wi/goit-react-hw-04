import { useEffect, useState } from "react";
import { requestImg } from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import Loader from "./components/Loader/Loader.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import Modal from "react-modal";
import "./App.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [photos, setPhotos] = useState(null);
  const [page, setPage] = useState(1);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await requestImg({ searchTerm, page });
        setPhotos((prevPhotos) => {
          return prevPhotos === null
            ? response.data.results
            : [...prevPhotos, ...response.data.results];
        });
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    if (searchTerm !== "") {
      setPhotos(null);
      setPage(1);
      fetchData();
    }
  }, [searchTerm, page]);

  const loadMore = async () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleSelectPhoto = (photo) => {
    setSelectedImg(photo);
    openModal();
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />
      {isError && <ErrorMessage />}
      <ImageGallery photos={photos} handleSelectPhoto={handleSelectPhoto} />
      {isLoading && <Loader />}
      {photos !== null && <LoadMoreBtn loadMore={loadMore} />}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ImageModal selectedImg={selectedImg} />
      </Modal>
    </>
  );
}

export default App;
