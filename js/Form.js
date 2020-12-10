class Form{

    constructor(holder, data){
        this.holder = holder;
        this.data = data;
        this.formRef = this.generateForm();
        this.setUpEvents();
        this.formSubmit = new CustomEvent('formSubmit');
    }

    generateForm(){
        this.holder.insertAdjacentHTML('beforeend', `
        <form id="searchForm" action="">
            <input type="text" id="cocktailInput" name="cocktailInput" placeholder="type a name...">
            <input type="submit" name="cocktailInput" value="zoeken" id="submitBtn">
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
        console.log(inputValue);
        
    }

}

export default Form;