class Cocktail{

    constructor(holder, dataObj){
        this.holder = holder;
        this.dataObj = dataObj;
        this.ingredients = this.generateIngredients();
        this.generateBox();
    }

    generateIngredients(){
        //Multiple ingredients are possible. Check all 15 ingredient slots and add to array if not null
        const ingredients = [];
        for(let i = 1; i < 15; i++){
           if(this.dataObj[`strIngredient${i}`]){
            ingredients.push(this.dataObj[`strIngredient${i}`]);
           }
        }
        return ingredients.map(el => `<li>${el}</li>`).join('');
    }

    generateBox(){
        this.holder.insertAdjacentHTML('beforeend', `
        <div class="cocktail">
            <div class="info">
                <h2>${this.dataObj.strDrink}</h2>
                <p>${this.dataObj.strCategory}</p>
                <ul class="ing">${this.ingredients}</ul>
            </div>
            <div class="image">
                <img src='${this.dataObj.strDrinkThumb}'>
            </div>
        </div>
        `
        );
    }

}

export default function(holder, dataObj){
    return new Cocktail(holder, dataObj);
}