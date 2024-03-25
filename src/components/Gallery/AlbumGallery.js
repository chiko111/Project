import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGallery } from "../galleryActions";
import Gallery from "./Gallery";

const galleryDef = (state) => state.gallery.gallery;

const AlbumGallery = ({ IDalbum }) => {
  const dispatch = useDispatch();
  const gallery = useSelector(galleryDef);
  const [selectedAlbum, setSelectedAlbum] = useState();

  useEffect(() => {
    dispatch(fetchGallery());
  }, [dispatch]);

  // useEffect(() => {
  //   if (IDalbum) {
  //     setSelectedAlbum(Number(IDalbum));
  //   }
  // }, [IDalbum]); // Update selectedAlbum when IDalbum prop changes

  return selectedAlbum ? (
    <Gallery IDalbum={selectedAlbum} setSelectedAlbum={setSelectedAlbum} />
  ) : (
    <div className="galleryContainer">
      {[...new Set(gallery.map(({ albumId }) => albumId))].map((albumId) => (
        <div key={albumId} className="albumContainer">
          <h2 onClick={() => setSelectedAlbum(Number(albumId))}>
            Album {albumId}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default AlbumGallery;
