import React, { useEffect, useState } from "react";

function Gallery(props) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/api/gallery.json")
      .then(response => response.json())
      .then(data => setImages(data));
  }, []);

  return (
    <div>
      {images.map(photo => (
        <img key={photo.image_id} src={photo.url} alt="" />
      ))}
    </div>
  );
}

export default Gallery;
