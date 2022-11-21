import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    //console.log(newCategory)
    //  Agregar una nueva categoria
    //categories.push(newCategory)
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Aplicación de Gifs</h1>

      <AddCategory
        
        onNewCategory={(value) => onAddCategory(value)}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
