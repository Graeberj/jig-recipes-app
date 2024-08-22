import React, { useEffect, useState } from "react";import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/recipes/${id}/`)
      .then((response) => response.json())
      .then((data) => setRecipe(data));
  }, [id]);

  if (!recipe) return <p>{"Loading..."}</p>;

  return (
    <div className={"recipe-detail"}>
      <h1>{recipe.name}</h1>
      <p>
        <strong>Servings:</strong> {recipe.servings}
      </p>
      <p>
        <strong>Ingredients:</strong>
      </p>
      <p>{recipe.ingredients}</p>
      <p>
        <strong>Instructions:</strong>
      </p>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;
