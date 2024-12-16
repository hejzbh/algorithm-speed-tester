class View {
    constructor() {
        this._formElement = document.querySelector("form");
        this._functionBodyInput = document.querySelector("#functionBody");
    }
    bindAddFunction(handler) {
        this._formElement.addEventListener("submit", (event) => {
            event.preventDefault(); // Sprječava ponovno učitavanje stranice
            const functionBody = this._functionBodyInput.value;
            // Pozivamo handler sa parametrima koje smo uzeli iz inputa
            handler({ name: "", parameters: [], body: functionBody });
        });
    }
}
export default View;
