class TextUrlapElem{
    #key="";
    #leiro={};
    #valid = "";
    constructor(key, leiro, szuloElem){
        this.#key = key;
        this.#leiro = leiro;
        this.formElem = szuloElem;
        this.#textElem();

        this.inputElem=$(`#${this.key}`);
        this.validElem = this.formElem.children("div:last-child").children(".valid");
        this.invalidElem = this.formElem.children("div:last-child").children(".invalid");
        this.inputElem.on("keyup",()=>{
            this.value = this.inputElem.val();
            let reg = this.#leiro.regex;
            let regObj = new RegExp(reg);
            console.log(regObj.test(this.value));
            if (regObj.test(this.value) ) {
                this.validElem.removeClass("elrejt");
                this.invalidElem.removeClass("elrejt");
            }else{
                this.invalidElem.removeClass("elrejt");
                this.validElem.removeClass("elrejt");
            }
        });
    }

    get valid(){
        return this.#valid;
    }

    get value(){
        return this.value;
    }

    #textElem(key) {
        let txt = `
        <div class = "mb-3 mt-3">
            <label for="${this.#key}">${this.#leiro.megjelenes}
            </label>

            <input type="${this.#leiro.tipus}" 
            id="${this.#key}" 
            class= "form-control"
             name="${this.#key}" 
            placeholder="${this.#leiro.placeholder}" 
            pattern=" ${this.#leiro.regex}"
            value= "${this.#leiro.value}">
    
            <div class="valid elrejt">OK</div>
            <div class="invalid elrejt">${this.#leiro.validalas}</div>
        </div>`;
        this.formElem.append(txt);
    }
}
export default TextUrlapElem;