import { useEffect, useState } from "react";
import { GetGift } from "../helpers/GetGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const getImages = async () => {
    const newImages = await GetGift(category);
    setImages(newImages);
    setLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading: loading,
  };
};
