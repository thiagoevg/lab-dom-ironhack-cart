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
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log("The target in remove is:", target);
  document.querySelector("tbody").removeChild(target);
  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  let target = event.currentTarget.parentNode.parentNode;
  let newItemName = target.querySelector("input").value;
  let newItemPrice = target.querySelectorAll("input")[1].value;

  const newItem = `<tr class="product">
          <td class="name">
            <span>${newItemName}</span>
          </td>
          <td class="price">$<span>${newItemPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>`;

  document.querySelector("tbody").insertAdjacentHTML("beforeend", newItem);
  let removeBtnList = document.querySelectorAll(".btn-remove");
  for (let i = 0; i < removeBtnList.length; i++) {
    removeBtnList[i].addEventListener("click", (e) => removeProduct(e));
  }

  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  let removeBtnList = document.querySelectorAll(".btn-remove");
  for (let i = 0; i < removeBtnList.length; i++) {
    removeBtnList[i].addEventListener("click", (e) => removeProduct(e));
  }
  let createProductBtn = document.querySelector("#create");
  createProductBtn.addEventListener("click", (e) => createProduct(e));
});
