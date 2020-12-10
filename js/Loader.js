import { data } from "autoprefixer";

class Loader{

    constructor(holder, h1, tagline){
        this.holder = holder;
        this.h1 = h1;
        this.tagline = tagline;
        this.loadingRef = this.init();
    }

    init(){
        this.holder.insertAdjacentHTML('beforeend',
        `<span id="loading">Loading cocktails...</span>`
        );
        return this.holder.querySelector('#loading');
    }

    check(){
        if(data.loading){
            this.loadingRef.classList.add('show');
        } else {
            this.loadingRef.classList.remove('show');
        }
    }
}

export default Loader;