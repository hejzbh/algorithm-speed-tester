class Controller {
    constructor() { }
    addFunction(params) {
        if (this.isValidData(params)) {
            // kreiraj funkciju
        }
        else {
            alert("Data is invalid");
        }
    }
    isValidData(params) {
        return params.body.length > 10 && params.name && params.parameters;
    }
}
export default Controller;
