// ITERATION 1

function updateSubtotal(product) {
  let price = parseFloat(product.querySelector(".price span").innerText);
  let quantity = parseInt(product.querySelector(".quantity input").value);

  let subtotalPrice = price * quantity;

  let spanSubtotalPrice = product.querySelector(".subtotal span");
  spanSubtotalPrice.innerText = subtotalPrice;

  return subtotalPrice;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let mainList = document.querySelector("tbody");
  let nodeList = mainList.children;
  let totalPrice = 0;

  for (let i = 0; i < nodeList.length; i++) {
    totalPrice += updateSubtotal(nodeList[i]);
  }

  document.querySelector("#total-value span").innerText = totalPrice;

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
