const product = {
    name : "Samsug Mobile",
    id : "YG789",
    batch: "YYUU7788",
    yearOfMake: "2026",
    getProduct() {
        return `${this.name},${this.yearOfMake}`;
    }
}

//Accessing the product object properties

console.log(product.yearOfMake);
console.log(product.name);
console.log(product.id);

console.log(product.getProduct());
