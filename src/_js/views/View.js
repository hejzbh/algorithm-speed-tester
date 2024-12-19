import TextareaModel from "../models/TextareaModel";
class View {
    constructor() {
        this._formElement = document.querySelector("form");
        this._functionBodyInput = document.querySelector(".function-body");
        this._functionsListElement = document.querySelector(".functions-list");
        this._testButtonElement = document.querySelector(".test-btn");
        this.textarea = new TextareaModel(this._formElement.querySelector("textarea"), "{ \n //Function body \n}");
    }
    bindAddFunction(handler) {
        console.log(this);
        this._formElement.addEventListener("submit", (event) => {
            event.preventDefault(); // Sprječava ponovno učitavanje stranice
            console.log(this);
            const functionBody = this._functionBodyInput.value;
            // Pozivamo handler sa parametrima koje smo uzeli iz inputa
            handler({ name: "Neka funkcija", parameters: [], body: functionBody });
        });
    }
    bindBeginTest(handler) {
        this._testButtonElement.addEventListener("click", handler);
    }
    renderFunctionElement(fn, deleteHandler) {
        var _a;
        const functionElement = document.createElement("li");
        const titleElement = document.createElement("h2");
        const timeElement = document.createElement("p");
        const deleteBtnElement = document.createElement("button");
        functionElement.id = fn.id.toString();
        functionElement.classList.add(`fn-${fn.id}`);
        titleElement.classList.add("title");
        timeElement.classList.add("time");
        deleteBtnElement.classList.add("delete-btn");
        titleElement.textContent = fn.name;
        deleteBtnElement.textContent = "Delete";
        deleteBtnElement.addEventListener("click", () => {
            var _a;
            deleteHandler(fn.id);
            (_a = document.getElementById(fn.id.toString())) === null || _a === void 0 ? void 0 : _a.remove();
        });
        functionElement.appendChild(titleElement);
        functionElement.appendChild(timeElement);
        functionElement.appendChild(deleteBtnElement);
        (_a = this._functionsListElement) === null || _a === void 0 ? void 0 : _a.appendChild(functionElement);
    }
}
export default View;
