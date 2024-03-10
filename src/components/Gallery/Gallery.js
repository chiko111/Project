import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LazyLoad from 'react-lazyload';
import { fetchGallery, toggleFavorite } from '../galleryActions';
import GalleryFooter from './GalleryFooter';

const Gallery = () => {
  const dispatch = useDispatch();
  const { gallery, loading, error, favorites } = useSelector((state) => state.gallery);

  useEffect(() => {
    dispatch(fetchGallery());
  }, [dispatch]);

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };

  if (loading) return <div className='textLoading'>Loading...</div>;
  if (error) return <div>Error loading the gallery: {error}</div>;

  return (
    <div className='galleryContainer'>
      {gallery.map((item) => (
        <div className={`galleryComponents ${favorites.includes(item.id) ? 'favorite' : ''}`} key={item.id}>
          <LazyLoad height={200} offset={100}>
            <img
              src={item.thumbnailUrl}
              alt={item.title}
              onClick={() => handleToggleFavorite(item.id)}
            />
           <button className="favorite-button" onClick={(e) => { e.stopPropagation(); handleToggleFavorite(item.id); }}>
  ★
</button>
            <p>{item.title}</p>
          </LazyLoad>
        </div>
      ))}
      <div className='GalleryFooter'><GalleryFooter favorites={favorites} /></div>
    </div>
  );
};

export default Gallery;
