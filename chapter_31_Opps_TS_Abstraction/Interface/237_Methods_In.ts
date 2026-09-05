interface Calculator {
    add(a: number, b: number):number;
    subtract(a: number, b: number):number;
}

const calc : Calculator = {
    add: function (a: number, b: number): number {
        return a + b;
    },
    subtract: function (a: number, b: number): number {
        return a > b ? a-b : b-a;  
    }
}
console.log(calc.add(10,20));

interface India {
    standUpNationalAnthem(a:string):string;
}

const vash: India = {
    standUpNationalAnthem: function (a: string): string {
        throw new Error("Function not implemented.");
    }
}