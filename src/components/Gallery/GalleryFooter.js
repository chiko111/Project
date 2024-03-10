import React from 'react';

const GalleryFooter = (props) => {
  const { favorites } = props;
  return (
    <div className='GalleryFooter'>
      <div className='footer-container'>
        <div className='footer-images'>
          {favorites.map((favoriteId) => (
            <img className='favoriteImg'
            key={favoriteId}
            src={`https://via.placeholder.com/80x80?text=${favoriteId}`} 
            alt={`Favorite ${favoriteId}`}
          />
          ))}
        </div>
        <p>Your favorite images</p>
      </div>
    </div>
  );
};

export default GalleryFooter;
