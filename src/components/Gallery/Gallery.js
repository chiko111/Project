import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LazyLoad from "react-lazyload";
import { fetchGallery, toggleFavorite } from "../galleryActions";
import GalleryFooter from "./GalleryFooter";

const galleryDef = (state) => state.gallery.gallery;
const loadingDef = (state) => state.gallery.loading;
const errorDef = (state) => state.gallery.error;
const favoritesDef = (state) => state.gallery.favorites;

const Gallery = () => {
  const dispatch = useDispatch();
  const gallery = useSelector(galleryDef);
  const favorites = useSelector(favoritesDef);
  const loading = useSelector(loadingDef);
  const error = useSelector(errorDef);

  useEffect(() => {
    dispatch(fetchGallery());
  }, [dispatch]);

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };

  if (loading) return <div className="textLoading">Loading...</div>;
  if (error) return <div>Error loading the gallery: {error}</div>;
  console.log("inside", gallery);

  return (
    <div className="galleryContainer">
      {gallery.map((item) => (
        <div
          className={`galleryComponents ${
            favorites.includes(item.id) ? "favorite" : ""
          }`}
        >
          <LazyLoad height={200} offset={100}>
            <img
              src={item.thumbnailUrl}
              alt={item.title}
              onClick={() => handleToggleFavorite(item.id)}
            />
            <button
              className="favorite-button"
              onClick={(e) => {
                e.stopPropagation();
                handleToggleFavorite(item.id);
              }}
            >
              ★
            </button>
            <p>{item.title}</p>
          </LazyLoad>
        </div>
      ))}
      <div className="GalleryFooter">
        <GalleryFooter favorites={favorites} />
      </div>
    </div>
  );
};

export default Gallery;
