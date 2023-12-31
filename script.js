const decreaseButtons = document.querySelectorAll('.decrease');
const increaseButtons = document.querySelectorAll('.increase');
const countElements = document.querySelectorAll('.count');
const priceElements = document.querySelectorAll('.price');
const totalElement = document.getElementById('total');

let counts = [0, 0, 0, 0]; // จำนวนสินค้าของแต่ละรายการ
const prices = [4190, 3090, 1190, 590]; // ราคาสินค้าของแต่ละรายการ
const cartItems = [];
document.addEventListener("DOMContentLoaded", function () {
    
    const products = [
      { name: 'G PRO XS', price: 4190 },
      { name: 'G703 Wireless', price: 3090 },
      { name: 'G304 Wireless', price: 1190 },
      { name: 'G102', price: 590 }
    ];
    
    const buyButton = document.getElementById("buy");
    buyButton.addEventListener("click", () => {
    if (cartItems.some(count => count > 0)) {
      showModal(); // แสดงตัวเลือกการสั่งซื้อ
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'ไม่มีสินค้าในตระกล้าเลยย',
            footer: '<a href="">เพิ่มของแล้วกลับมาใหม่นะคุบ</a>'
          })
      modal2.style.display = "none";
    }
  });
  
    const increaseButtons = document.querySelectorAll(".increase");
    const decreaseButtons = document.querySelectorAll(".decrease");
  
    increaseButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        cartItems[index] = (cartItems[index] || 0) + 1;
        updateCart();
      });
    });
  
    decreaseButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        if (cartItems[index] > 0) {
          cartItems[index] -= 1;
          updateCart();
        }
      });
    });
  
    function updateCart() {
      const cartList = document.getElementById("cart-items");
      cartList.innerHTML = "";
  
      let total = 0;
      let totalDiscounted = 0;
      cartItems.forEach((count, index) => {
        if (count > 0) {
          const listItem = document.createElement("li");
          listItem.textContent = `${products[index].name}: ${products[index].price} บาท x ${count}`;
          cartList.appendChild(listItem);
          total += products[index].price * count;
          totalDiscounted += calculateDiscountedPrice(products[index].price, count); // เพิ่มราคาที่คำนวณแล้วด้วยส่วนลด
        }
      });
      function calculateDiscountedPrice(price, quantity) {
        const subTotal = price * quantity;
        if (subTotal >= 1000) {
          const discount = subTotal * 0.1; // คำนวณส่วนลด 10%
          return subTotal - discount;
        }
        return subTotal;
      }
  
      const totalElement = document.getElementById("total");
totalElement.textContent = `${totalDiscounted.toFixed(2)} บาท`; // แสดงราคาที่คำนวณแล้วด้วยส่วนลด
    }
  });

decreaseButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (counts[index] > 0) {
            counts[index]--;
            countElements[index].textContent = counts[index];
            updateTotal();
        }
    });
});

increaseButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        counts[index]++;
        countElements[index].textContent = counts[index];
        updateTotal();

    });
});



updateTotal();

