import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <h2>{recipe.name}</h2>
      <p>Servings: {recipe.servings}</p>
      <Link to={`/recipes/${recipe.id}`}>View Recipe</Link>
    </div>
  );
}

export default RecipeCard;
