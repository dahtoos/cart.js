let quantity = [1, 1, 1];
let lover = [false, false, false];
let prices = [40, 22, 10];
function minus(item) {
  let elem = document.getElementById(`qty${item}`);
  let btn = document.getElementById(`sbtn${item}`);

  if (quantity[item - 1] > 2) {
    quantity[item - 1]--;
    elem.innerHTML = quantity[item - 1];
  } else {
    quantity[item - 1]--;
    elem.innerHTML = quantity[item - 1];
    btn.setAttribute("disabled", "true");
  }
  updateTotalPrice();
}
function plus(item) {
  let btn = document.getElementById(`sbtn${item}`);
  let elem = document.getElementById(`qty${item}`);
  quantity[item - 1]++;
  elem.innerHTML = quantity[item - 1];
  btn.removeAttribute("disabled");
  updateTotalPrice();
}
function love(item) {
  let elem = document.getElementById(`like${item}`);
  if (lover[item - 1]) {
    lover[item - 1] = false;
    elem.style.color = "black";
  } else {
    lover[item - 1] = true;
    elem.style.color = "red";
  }
}
function updateTotalPrice() {
  let totalPrice = 0;
  for (let i = 0; i < quantity.length; i++) {
    totalPrice += quantity[i] * prices[i];
  }
  document.getElementById("total").innerHTML = totalPrice;
}

function deleteItem(item) {
  const delItem = document.getElementById(`item${item}`); //
  console.log(delItem);
  delItem.remove();
  quantity.splice(item - 1, 1); //the splice here is to remove it from the array
  prices.splice(item - 1, 1);
  likes.splice(item - 1, 1);
  updateTotalPrice();
}

updateTotalPrice();
