import { data } from "../../assets/data";
import Recipes from "./Recipes";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RecipesGrid = () => {
  return (
    <section id="recipes">
      <div className="px-3">
        <h2 className="my-[25px] text-center font-bold font-['Montserrat'] uppercase text-2xl">
          Small Budget? No Problem!
        </h2>
        <p className="text-center">
          Cooking on a budget shouldn't mean canned beans and ramen noodles
          night after night. Welcome to the world of delicious recipes designed
          for small budgets.
        </p>
      </div>
      <div className="mt-[40px] grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((recipe, index) => {
          while (index < 6) {
            index++;
            return (
              <Recipes
                key={recipe.id}
                image={recipe.image}
                name={recipe.name}
                description={recipe.description}
                rPrice={recipe.price.recipe}
                sPrice={recipe.price.serving}
              />
            );
          }
        })}
      </div>

      <div className="text-center">
        <h2 className="px-[15px] py-[5px] bg-black inline-block text-white uppercase text-[14px] font-bold">
          More recent recipes
          <FontAwesomeIcon icon={faAnglesRight} className="ml-2 text-[10px]" />
        </h2>
      </div>
    </section>
  );
};

export default RecipesGrid;
