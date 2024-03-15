import React, { useState } from "react";

const LoadMoreBtn = ({ loadMore }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await loadMore();
    } catch (error) {
      console.error("Error loading more photos:", error);
    }
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <button type="button" onClick={handleClick}>
        {isLoading ? "Loading..." : "Load More"}
      </button>
    </React.Fragment>
  );
};

export default LoadMoreBtn;
