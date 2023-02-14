import React, { useEffect, useState } from "react";
import "./gallery.css";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/api/gallery.json")
      .then(response => response.json())
      .then(data => setImages(data));
  }, []);

  return (
    <div className="gallery">
      {images.map(photo => (
        <div className="photo">
          <img key={photo.image_id} src={photo.url} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Gallery;

/* const images = [
  "https://cdn.jornaldenegocios.pt/images/2022-05/img_1200x900$2022_05_13_19_39_14_428765.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCclXfQg_t5cAUHfgKpWjn3IT0C6AdGUSMJg&usqp=CAU",
  "https://images.indianexpress.com/2023/01/Benfica-2.jpg",
  "https://pbs.twimg.com/media/Fl0NavJWYAA_QkF?format=jpg&name=4096x4096",
  "https://static.globalnoticias.pt/oj/image.jpg?brand=OJOGO&type=generate&guid=eeacfd20-d1a5-48c2-9d0a-75128e30f36e",
];

let position = 0;

const btnPrevious = document.querySelector("#buttons button:first-child");
const btnNext = document.querySelector("#buttons button:last-child");
const photo = document.querySelector("#photo img");

btnPrevious.addEventListener("click", () => {
  position--;

  if (position < 0) {
    position = images.length - 1;
  }

  photo.src = images[position];
});

btnNext.addEventListener("click", () => {
  position++;

  if (position >= images.length) {
    position = 0;
  }

  photo.src = images[position];
}); */
