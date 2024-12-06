import recipeList from './../../data/recipes.json';

export default function Recettes() {

    return{
        recipes: [],
        difficultyFilter: 'Tout',
        filterRecipes: [],
        modalOpen: false,
        vueRecipe: {},

        init() {
            this.recipes = this.filterRecipes = recipeList.recipes;
            this.filterRecipes = this.recipes;
        },

        filterDifficulty() {
            if (this.difficultyFilter === 'Tout') {
                this.filterRecipes = this.recipes;
            } else {
                this.filterRecipes = this.recipes.filter(
                    recipe => recipe.difficulty === this.difficultyFilter
                );
            }
        },
        
        openRecipe(recipe) {
            this.vueRecipe = recipe;
            this.modalOpen = true;
        },

    }
}
