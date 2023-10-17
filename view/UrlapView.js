import TextUrlapElem from "./TextUrlapElem.js";

class UrlapView {
    #leiro = {}
    #urlapElemLista = [];
    #osszesElemValidE = true;
    urlapAdat = {};
    constructor(szuloElem, leiro) {
        this.szuloElem = szuloElem;
        this.#leiro = leiro;
        this.szuloElem.append("<form>");
        this.formElem = szuloElem.children("form");
        console.log(this.#leiro);
        this.#urlapOsszerak()
        this.submitElem = $("#submit");
        this.submitElem.on("click", (event) => {
            event.preventDefault();
            console.log(elem.valid);
            this.#osszesElemValidE = true;
            this.#osszesElemValidE.on("click", (event) => {
                this.#osszesElemValidE = this.#osszesElemValidE && elem.valid
            });

            if (this.#osszesElemValidE) {
                console.log("valid az űrlap");
                this.#urlapElemLista.array.forEach(element => {
                    this.urlapAdat[elem.key] = elem.value;
                });

            } else {
                console.log("nem valid az űrlap");
            }

        });
    }

    get urlapAdat(){
        return this.urlapAdat;
    }
    #urlapOsszerak() {
        for (const key in this.#leiro) {
            switch (this.#leiro[key].tipus) {
                case "text":
                    this.#urlapElemLista.push(new TextUrlapElem(key, this.#leiro[key], this.formElem));

                case "number":
                    this.#numberElem(key);
                default:
                    break;
            }
        }

        let txt = "<input type ='submit' id = 'submit' value = 'OK'>";
        this.formElem.append(txt);


    }

    #textElem(key) {
        let txt = `
        <div class = "mb-3 mt-3">
            <label for="${key}">${this.#leiro.nev.megjelenes}
            </label>

            <input type="${this.#leiro[key].tipus}" 
            id="${key}" 
            class= "form-control"
             name="${key}" 
            placeholder="${this.#leiro[key].placeholder}" 
            pattern=" ${this.#leiro[key].regex}"
            value= "${this.#leiro[key].value}">
    
        </div>`
        this.formElem.append(txt);
    }
    #numberElem(key) {
        let txt = `
        <div class = "mb-3 mt-3">
            <label for="${key}">${this.#leiro.nev.megjelenes}
            </label>

            <input type="${this.#leiro[key].tipus}" 
            id="${key}" 
            class= "form-control"
             name="${key}" 
            placeholder="${this.#leiro[key].placeholder}" 
            pattern=" ${this.#leiro[key].regex}"
            value= "${this.#leiro[key].value}">
    
        </div>`;
        this.formElem.append(txt);
    }

}
export default UrlapView