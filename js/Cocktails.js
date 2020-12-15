import Cocktail from './Cocktail';

class Cocktails{

    constructor(holder, data){
        this.holder = holder;
        this.data = data;
        this.gridRef = this.createGrid();
    }

    createGrid(){
        this.holder.insertAdjacentHTML('beforeend', `
        <div class="cocktail-grid">Click on search to find cocktails</div>
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
        }
    }

    clearGrid = () => {
        this.gridRef.innerHTML = "";
    }

}

export default function(holder, data){
    return new Cocktails(holder, data);
}