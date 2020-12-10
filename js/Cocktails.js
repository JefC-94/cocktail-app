import Cocktail from './Cocktail';

class Cocktails{

    constructor(holder, data){
        this.holder = holder;
        this.data = data;
        this.gridRef = this.createGrid();
    }

    createGrid(){
        this.holder.insertAdjacentHTML('beforeend', `
        <div class="cocktail-grid">
        Click on search to find cocktails
        </div>
        `);
        return this.holder.querySelector('.cocktail-grid');
    }

    addCocktails = () => {
        this.gridRef.innerHTML = "";
        console.log(this.data.cocktails);
        if(this.data.cocktails === null){
            this.gridRef.innerHTML = "No cocktails found";
        } else {
            this.data.cocktails.forEach((cocktail) => {
                new Cocktail(this.gridRef, cocktail);
            });
            /* const cocktaildivs = this.data.cocktails.map(cocktail => {
                //let ingredients = cocktail.strIngredient[i];
                return `<div class="cocktail">
                <div class="info">
                    <h2>${cocktail.strDrink}</h2>
                    <p>${cocktail.strCategory}</p>
                </div>
                <div class="image">
                    <img src='${cocktail.strDrinkThumb}'>
                </div>
                </div>`;
            }).join('');
            this.gridRef.innerHTML = cocktaildivs; */
        }
        
    }

    clearGrid = () => {
        this.gridRef.innerHTML = "";
    }

}

export default Cocktails;