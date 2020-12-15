import header from './Header';
import footer from './Footer';
import form from './Form';
import cocktails from './Cocktails';

const data = {
    cocktails: []
};

header(document.body, "Cocktail Hour", "Find your favorite cocktails");

const myForm = form(document.body, data);

const myCocktails = cocktails(document.body, data);

window.addEventListener('cocktailSubmit', myCocktails.addCocktails);
window.addEventListener('clearGrid', myCocktails.clearGrid);

footer(document.body, "© Jef Ceuppens");