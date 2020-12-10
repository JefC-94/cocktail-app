import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Cocktails from './Cocktails';

const data = {};

new Header(document.body, "Cocktail Hour", "Find your favorite cocktails");

new Form(document.body, data);

const cocktails = new Cocktails(document.body, data);

cocktails.addCocktails();

new Footer(document.body, "© Jef Ceuppens");