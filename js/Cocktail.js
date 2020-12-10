class Cocktail{

    constructor(holder, dataObj){
        this.holder = holder;
        this.dataObj = dataObj;
        this.ingredients = this.generateIngredients();
        this.generateBox();
    }

    generateIngredients(){
        const ingredients = [];
        for(let i = 1; i < 16; i++){
           //console.log(this.dataObj[`strIngredient${i}`]);
           if(this.dataObj[`strIngredient${i}`]){
            ingredients.push(this.dataObj[`strIngredient${i}`]);
           }
        }
        console.log(ingredients);
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

export default Cocktail;