// GalleryComponent.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LazyLoad from 'react-lazyload'; // Import the LazyLoad component
import { fetchGallery } from '../galleryActions';

const Gallery = () => {
  const dispatch = useDispatch();
  const { gallery, loading, error } = useSelector((state) => state.gallery);

  useEffect(() => {
    dispatch(fetchGallery());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading the gallery: {error}</div>;

  return (
    <div className='galleryContainer'>
      {gallery.map((item) => (
        <div className='galleryComponents' key={item.id}>
          <LazyLoad height={200} offset={100}>
            {/* Wrap the image inside LazyLoad */}
            <img src={item.thumbnailUrl} alt={item.title} />
          <p>{item.title}</p>
          </LazyLoad>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
 