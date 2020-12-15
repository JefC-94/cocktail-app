class footer{

    constructor(holder, copyright){
        this.holder = holder;
        this.copyright = copyright;
        this.init();
    }

    init(){
        this.holder.insertAdjacentHTML('beforeend',
        `<footer>
            <p>${this.copyright}</p>
        </footer>`
        );
    }
}

export default (holder, copyright) => new footer(holder, copyright);