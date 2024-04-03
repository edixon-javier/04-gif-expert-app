import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Deat Note"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
    //? la linea comentada, lo que dice es que hace referencia al estado local de categorias cat y despues si hace el resto.
    // setCategories(cats => [...cats, 'Naruto']);
  };

  return (
    <>
      <h1>Expert Gif </h1>
      <AddCategory onNewValue={onAddCategory} />
      {categories.map((cat) => (
        <GifGrid category={cat} key={cat} />
      ))}
    </>
  );
};
