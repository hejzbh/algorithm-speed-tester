import Controller from "./controllers/Controller";
import View from "./views/View";
const controller = new Controller();
const view = new View();
(() => {
    view.bindAddFunction(controller.addFunction);
})();
