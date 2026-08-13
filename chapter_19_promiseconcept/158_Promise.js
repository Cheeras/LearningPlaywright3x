const order = new Promise((resolve, reject) => {
  const foodReady = false;

  if (foodReady) {
    resolve("Pizza is delivered");
  } else {
    reject(new Error("Order cancelled"));
  }
});

console.log(order);
// order
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.error(error.message);
//   });