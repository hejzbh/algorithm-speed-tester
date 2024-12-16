// View.ts
import { AddFunctionParams } from "../controllers/Controller";

class View {
  _formElement = document.querySelector("form")!;
  _functionBodyInput = document.querySelector(
    "#functionBody"
  ) as HTMLTextAreaElement;

  constructor() {}

  bindAddFunction(handler: (params: AddFunctionParams) => void) {
    this._formElement.addEventListener("submit", (event) => {
      event.preventDefault(); // Sprječava ponovno učitavanje stranice

      const functionBody = this._functionBodyInput.value;

      // Pozivamo handler sa parametrima koje smo uzeli iz inputa
      handler({ name: "", parameters: [], body: functionBody });
    });
  }
}

export default View;
