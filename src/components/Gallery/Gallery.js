import React from 'react';
import LazyLoad from 'react-lazyload';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../galleryActions';
import GalleryFooter from './GalleryFooter';

const galleryDef = state => state.gallery.gallery;
const loadingDef = state => state.gallery.loading;
const errorDef = state => state.gallery.error;
const favoritesDef = state => state.gallery.favorites;

const Gallery = ({ IDalbum, setSelectedAlbum }) => {
  const dispatch = useDispatch();
  const gallery = useSelector(galleryDef);
  const favorites = useSelector(favoritesDef);
  const loading = useSelector(loadingDef);
  const error = useSelector(errorDef);

  const handleToggleFavorite = id => {
    dispatch(toggleFavorite(id));
  };

  if (loading) return <div className="textLoading">Loading...</div>;
  if (error) return <div>Error loading the gallery: {error}</div>;
  console.log('all', gallery);
  console.log(IDalbum);
  // if (onGallery) {
  //   return <AlbumGallery />;
  // }
  return (
    <>
      <div className="galleryContainer">
        {gallery
          .filter(item => item.albumId === Number(IDalbum))
          .map(item => (
            <div
              className={`galleryComponents ${
                favorites.includes(item.id) ? 'favorite' : ''
              }`}
              key={item.id}
            >
              <LazyLoad height={200} offset={100}>
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  onClick={() => handleToggleFavorite(item.id)}
                />
                <button
                  className="favorite-button"
                  onClick={e => {
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
        <div></div>
        <div className="GalleryFooter">
          <GalleryFooter favorites={favorites} />
        </div>
      </div>
      <button
        className="buttonAlbum"
        onClick={() => {
          setSelectedAlbum(null);
        }}
      ></button>
    </>
  );
};

export default Gallery;
