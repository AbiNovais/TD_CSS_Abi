import Alpine from "alpinejs";
import Recettes from './modules/Recipes';

window.alpine = Alpine;

// declare your Alpine components here...

Alpine.data('Recettes', Recettes)

Alpine.start();