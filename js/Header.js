class Header{

    constructor(holder, h1, tagline){
        this.holder = holder;
        this.h1 = h1;
        this.tagline = tagline;
        this.init();
    }

    init(){
        this.holder.insertAdjacentHTML('beforeend',
        `<header>
            <h1>${this.h1}</h1>
            <p>${this.tagline}</p>
        </header>`
        );
    }
}



export default function(holder, h1, tagline){
    return new Header(holder, h1, tagline)}