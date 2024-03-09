import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchGallery } from "./actions";

function Gallery({ gallery, loading, error, fetchGallery }) {
  useEffect(() => {
    fetchGallery();
  }, []);
  if (loading) return <div>Loading.....</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <h2>Gallery</h2>
      <ul>
        {gallery.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => ({
  gallery: state.gallery,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = {
  fetchGallery,
};
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
