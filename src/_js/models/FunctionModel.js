class FunctionModel {
    constructor(name, body, parameters) {
        this.name = name;
        this.body = body;
        this.parameters = parameters;
        this.id = Math.random();
    }
    test() {
        try {
            let totalExecutionTime = 0;
            const dynamicFunction = new Function(this.body);
            for (let run = 0; run < 10; run++) {
                const startTime = performance.now();
                dynamicFunction();
                const endTime = performance.now();
                totalExecutionTime += endTime - startTime;
            }
            const averageTime = totalExecutionTime / 10;
            return +averageTime.toFixed(5);
        }
        catch (_a) {
            return Infinity;
        }
    }
}
export default FunctionModel;
