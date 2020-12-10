class Cocktails{

    constructor(holder, data){
        this.holder = holder;
        this.data = data;
        this.gridRef = this.createGrid();
    }

    createGrid(){
        this.holder.insertAdjacentHTML('beforeend', `
        <div class="cocktail-grid">
        </div>
        `);
        return this.holder.querySelector('.cocktail-grid');
    }

    addCocktails = () => {
        
    }

}

export default Cocktails;