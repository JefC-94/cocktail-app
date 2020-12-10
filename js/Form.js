class Form{

    constructor(holder, data){
        this.holder = holder;
        this.data = data;
        this.formRef = this.generateForm();
        this.setUpEvents();
        this.cocktailSubmit = new CustomEvent('cocktailSubmit');
        this.clearGrid = new CustomEvent('clearGrid');
    }

    generateForm(){
        this.holder.insertAdjacentHTML('beforeend', `
        <form id="searchForm" action="">
            <input type="text" id="cocktailInput" name="cocktailInput" placeholder="Type...">
            <input type="submit" name="cocktailInput" value="search" id="submitBtn">
            <span id="alert">Empty search field!</span>
        </form>
        `);
        return this.holder.querySelector("form");
    }

    setUpEvents(){
        this.formRef.addEventListener('submit', this.findCocktails);
    }

    findCocktails = (e) => {
        e.preventDefault();
        const inputValue = this.formRef.querySelector('#cocktailInput').value;
        //for some reason the API returns all cocktails when no parameter is given for the search API
        // -> manually clear the grid and show error
        if(inputValue === ""){
            dispatchEvent(this.clearGrid);
            this.formRef.querySelector('#alert').classList.add('show');
        } else {
            this.formRef.querySelector('#alert').classList.remove('show');
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`)
            .then(response => response.json())
            .then(jsonData => {
                this.data.cocktails = jsonData.drinks;
                dispatchEvent(this.cocktailSubmit);
            })
            .catch(err => console.log(err));
        }
    }

}

export default Form;