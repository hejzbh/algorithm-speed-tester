import FunctionModel, { FunctionType } from "../models/FunctionModel";
import { ViewType } from "../views/View";

export interface AddFunctionParams {
  name: string;
  body: string;
  parameters: string[];
}

class Controller {
  functions: FunctionType[];
  view: ViewType;

  constructor(view: ViewType) {
    this.functions = [];
    this.view = view;

    view.bindAddFunction(this.addFunction.bind(this));
    view.bindBeginTest(this.runTests.bind(this));
  }

  addFunction(params: AddFunctionParams) {
    if (this.isValidData(params)) {
      // kreiraj funkciju
      const newFn = new FunctionModel(
        params.name,
        params.body,
        params.parameters
      );
      alert("added");

      this.functions.push(newFn);

      this.view.renderFunctionElement(newFn, this.deleteFunction.bind(this));
    } else {
      alert("Data is invalid");
    }
  }

  runTests() {
    if (!this.functions.length) return;

    const functionsWithTimes: (FunctionType & { averageTime: number })[] = [];

    for (let i = 0; i < this.functions.length; i++) {
      const averageTime = this.functions[i].test();

      functionsWithTimes.push({
        ...this.functions[i],
        averageTime,
      });
    }
    console.log("end ");
    console.log(
      functionsWithTimes.sort((a, b) => a.averageTime - b.averageTime)
    );
  }

  isValidData(params: AddFunctionParams) {
    try {
      console;
      if (
        params.body.length > 10 &&
        params.name &&
        params.parameters &&
        new Function(params.body)
      )
        return true;

      return false;
    } catch {
      return false;
    }
  }

  deleteFunction(deletedFnId: number) {
    this.functions = this.functions.filter((fn) => fn.id !== deletedFnId);
  }
}

export default Controller;
