import React, { useEffect, useState } from "react";
import AlbumGallery from "./AlbumGallery";

const MainGallery = ({ galleryOn }) => {
  const [selectedAlbum, setSelectedAlbum] = useState();

  useEffect(() => {
    if (galleryOn) {
      setSelectedAlbum(false);
      console.log("work");
    }
  }, [galleryOn]);

  return (
    <>
      <AlbumGallery />
    </>
  );
};

export default MainGallery;
