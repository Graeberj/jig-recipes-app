import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/recipes/")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="home-page">
      <h1>Recipes</h1>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Home;
