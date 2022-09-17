import React, { useEffect, useState } from "react";
import axios from "axios";

const getRandomPhotos = () => {
  return axios
    .get("https://picsum.photos/v2/list")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {});
};

const Photos = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  useEffect(() => {
    getRandomPhotos().then((images) => {
      setRandomPhotos(images);
    });
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5 p-5">
      {randomPhotos.map((image, index) => (
        <div key={image.id}>
          <img src={image.download_url} alt={image.author} />
        </div>
      ))}
    </div>
  );
};

export default Photos;
