currentSlideOrder = 1;
const productPrice = [1499, 149, 59, 2];
productList = [0, 0, 0, 0];
totalPrice = 0;

function changeImg() {
    let carousel = document.getElementById("carousel");
    carousel.src = "img/product_" + currentSlideOrder + ".jpg";
}

function nextImg() {
    if (currentSlideOrder == 4) {
        currentSlideOrder = 1;
    } else if (currentSlideOrder >= 1) {
        currentSlideOrder++;
    }
    changeImg();
}

function prevImg() {
    if (currentSlideOrder == 1) {
        currentSlideOrder = 4;
    } else if (currentSlideOrder <= 4) {
        currentSlideOrder--;
    }
    changeImg();
}

function updateItems() {
    document.getElementById('item-0-counter').innerHTML = productList[0];
    document.getElementById('item-1-counter').innerHTML = productList[1];
    document.getElementById('item-2-counter').innerHTML = productList[2];
    document.getElementById('item-3-counter').innerHTML = productList[3];
    updateTotalPrice();
}

function updateTotalPrice() {
    totalPrice = 0;
    let discount = 0;
    for (let i = 0; i < productPrice.length; i++) {
        totalPrice += productPrice[i] * productList[i];
    }
    if (totalPrice > 1000) {
        discount = (10/100) * totalPrice;
        discount_text = document.getElementById('discount-text');
        discount_text.classList.remove('hidden');
        discount_text.innerHTML = "You save: " + "$" + discount.toLocaleString();
    } else {
        document.getElementById('discount-text').classList.add('hidden');
    }
    totalPrice = totalPrice - discount;
    document.getElementById('total-price').innerHTML = "$" + totalPrice.toLocaleString();
}

function increaseItem(productId) {
    productList[productId] += 1;
    updateItems()
}

function decreaseItem(productId) {
    if (productList[productId] != 0) {
        productList[productId] -= 1;
        updateItems()
    }
}

function closeModal() {
    let modal_panel = document.getElementById('modal-panel');
    modal_panel.classList.add('hidden')
}

function showModal() {
    let modal_panel = document.getElementById('modal-panel');
    modal_panel.classList.remove('hidden')
}