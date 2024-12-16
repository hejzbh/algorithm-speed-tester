export interface AddFunctionParams {
  name: string;
  body: string;
  parameters: string[];
}

class Controller {
  constructor() {}

  addFunction(params: AddFunctionParams) {
    if (this.isValidData(params)) {
      // kreiraj funkciju
    } else {
      alert("Data is invalid");
    }
  }

  isValidData(params: AddFunctionParams) {
    return params.body.length > 10 && params.name && params.parameters;
  }
}

export default Controller;
