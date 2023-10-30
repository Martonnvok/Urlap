class EmailUrlapElem {
    #key = "";
    #leiro = {};
    #value = "";
    #valid = true;
    constructor(key, leiro, formElem) {
        this.#key = key;
        this.#leiro = leiro;
        this.formElem = formElem;
        this.#telElem();

        this.inputElem = $(`#${this.#key}`);
        this.validElem = this.formElem
            .children("div:last-child")
            .children(".valid");
        this.invalidElem = this.formElem
            .children("div:last-child")
            .children(".invalid");
        this.#value = this.inputElem.val();
        console.log(this.#value);
        if (this.#value <= 2023 && this.#value >= 1900) {
            this.#valid = true;
        } else {
            this.#valid = false;
        }
    }

    get value() {
        return this.#value;
    }

    get valid() {
        return this.#valid;
    }

    get key() {
        return this.#key;
    }

    #telElem() {
        let txt = `
          <div class="mb-3 mt-3">
              <label for="${this.#key.tipus}" class="form-label">${this.#leiro.megjelenes}</label>
              <input type="${this.#leiro.tipus}" class="form-control" id="${this.#key}" name="${this.#key.tipus}">
          </div>
          `;

        this.formElem.append(txt);
    }
}

export default EmailUrlapElem;