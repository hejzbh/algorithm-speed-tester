// View.ts
import { AddFunctionParams } from "../controllers/Controller";
import { FunctionType } from "../models/FunctionModel";
import TextareaModel from "../models/TextareaModel";

export type ViewType = {
  _formElement: HTMLFormElement;
  _functionBodyInput: HTMLTextAreaElement;
  _functionsListElement: HTMLElement | null;
  _testButtonElement: HTMLButtonElement | null;

  textarea: TextareaModel;

  bindAddFunction(handler: (params: AddFunctionParams) => void): void;
  renderFunctionElement(
    fn: FunctionType,
    deleteHandler: (functionId: number) => void
  ): void;
  bindBeginTest: (handler: () => void) => void;
};

class View implements ViewType {
  _formElement = document.querySelector("form")!;
  _functionBodyInput = document.querySelector(
    ".function-body"
  ) as HTMLTextAreaElement;
  textarea: any;
  _functionsListElement = document.querySelector(
    ".functions-list"
  ) as HTMLElement;
  _testButtonElement = document.querySelector(".test-btn") as HTMLButtonElement;

  constructor() {
    this.textarea = new TextareaModel(
      this._formElement.querySelector("textarea") as HTMLTextAreaElement,
      "{ \n //Function body \n}"
    );
  }

  bindAddFunction(handler: (params: AddFunctionParams) => void) {
    console.log(this);
    this._formElement.addEventListener("submit", (event) => {
      event.preventDefault(); // Sprječava ponovno učitavanje stranice
      console.log(this);
      const functionBody = this._functionBodyInput.value;

      // Pozivamo handler sa parametrima koje smo uzeli iz inputa
      handler({ name: "Neka funkcija", parameters: [], body: functionBody });
    });
  }

  bindBeginTest(handler: () => void) {
    this._testButtonElement.addEventListener("click", handler);
  }

  renderFunctionElement(
    fn: FunctionType,
    deleteHandler: (functionId: number) => void
  ) {
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
      deleteHandler(fn.id);
      document.getElementById(fn.id.toString())?.remove();
    });

    functionElement.appendChild(titleElement);
    functionElement.appendChild(timeElement);
    functionElement.appendChild(deleteBtnElement);

    this._functionsListElement?.appendChild(functionElement);
  }
}

export default View;
