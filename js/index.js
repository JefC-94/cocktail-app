import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Cocktails from './Cocktails';

const data = {
    cocktails: [],
    loading: false,
};

new Header(document.body, "Cocktail Hour", "Find your favorite cocktails");

const form = new Form(document.body, data);

const cocktails = new Cocktails(document.body, data);

window.addEventListener('cocktailSubmit', cocktails.addCocktails);
window.addEventListener('clearGrid', cocktails.clearGrid);

new Footer(document.body, "© Jef Ceuppens");