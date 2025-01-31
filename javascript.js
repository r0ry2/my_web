
// عند الضغط على زر "Find your favorite"
document.getElementById("findFavoriteBtn").addEventListener("click", function () {
    document.getElementById("sectionـProduct").scrollIntoView({ behavior: "smooth" });
  });




  
  // زر العودة للأعلى
  const goToTopBtn = document.getElementById("goToTopBtn");

  
  // التحكم في ظهور زر العودة للأعلى بناءً على التمرير
  window.onscroll = function () {
    if (window.scrollY > 100) {
      goToTopBtn.style.display = "block";
    } else {
      goToTopBtn.style.display = "none";
    }
  };
  // عند الضغط على زر العودة للأعلى
  goToTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  


 


  // دالة لفتح أو غلق القائمة الجانبية
function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.right === "0px") {
    sidebar.style.right = "-250px"; // إخفاء القائمة
  } else {
    sidebar.style.right = "0px"; // إظهار القائمة
  }
}

  
//search
  document.getElementById("searchBtn").addEventListener("click", function() {
    let searchTerm = document.getElementById("search").value.toLowerCase();
    let sections = document.querySelectorAll("section"); // البحث في جميع الأقسام

    let found = false;
    sections.forEach(section => {
        if (section.innerText.toLowerCase().includes(searchTerm)) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
            found = true;
        }
    });

    if (!found) {
        alert("No matching section found!");
    }
});


  // إرفاق حدث "click" بكل زر "Order now"
  document.querySelectorAll('.order-now').forEach(button => {
    button.addEventListener('click', function() {
      const target = this.getAttribute('data-target'); // استرجاع الـ data-target
      console.log(`Navigating to: ${target}`);  // تحقق من أن الكود يسترجع الـ data-target بشكل صحيح
      
      const targetElement = document.querySelector(target);
      if (targetElement) {
        // تمرير الصفحة إلى العنصر المستهدف
        targetElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.log(`No element found for ${target}`);
      }
    });
  });



  document.addEventListener("DOMContentLoaded", function () {
    let productPrice = 200; // السعر الأساسي للمنتج
    let deliveryPrice = 10.1; // تكلفة التوصيل
    let quantity = 1; // الكمية الأولية

    const quantityElem = document.getElementById("product-quantity");
    const priceElem = document.getElementById("product-price");
    const totalPriceElem = document.getElementById("total-price");
    const orderPriceElem = document.getElementById("order-price");

    // زيادة الكمية
    document.getElementById("increase-quantity").addEventListener("click", function () {
        quantity++;
        updatePrice();
    });

    // تقليل الكمية
    document.getElementById("decrease-quantity").addEventListener("click", function () {
        if (quantity > 1) {
            quantity--;
            updatePrice();
        }
    });

    // دالة لتحديث السعر الإجمالي
    function updatePrice() {
        quantityElem.textContent = quantity;
        let total = (productPrice * quantity) + deliveryPrice;
        totalPriceElem.textContent = total.toFixed(1) + " TUB"; // تحديث السعر الكلي مع التوصيل
        orderPriceElem.textContent = (productPrice * quantity).toFixed(1) + " TUB"; // تحديث سعر المنتج
    }

    // عند الضغط على "Confirm Order"، نخزن البيانات في localStorage
    document.getElementById("confirm-order").addEventListener("click", function () {
        // حفظ البيانات في localStorage
        localStorage.setItem("product-name", document.getElementById("product-name").textContent);
        localStorage.setItem("product-price", productPrice);
        localStorage.setItem("quantity", quantity);
        localStorage.setItem("total-price", totalPriceElem.textContent);
        localStorage.setItem("product-image", document.getElementById("product-image").src);

        // الانتقال إلى صفحة السلة
        window.location.href = "cart.html"; // تأكد من أن اسم الصفحة صحيح
    });
});








  // تخزين قيم نموذج الاتصال
  document.getElementById("submitForm").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    console.log("Name:", name, "Email:", email, "Message:", message);
    alert("Form submitted successfully!");
  });





// بيانات المنتجات في السلة
const cartItems = [
  { name: "منتج 1", price: 50, quantity: 1 },
  { name: "منتج 2", price: 30, quantity: 2 },
  { name: "منتج 3", price: 70, quantity: 1 },
];

// دالة لحساب الإجمالي
function updateTotal() {
  let total = 0;
  const cartBody = document.getElementById("cart-body");
  cartBody.innerHTML = ""; // تنظيف السلة الحالية

  cartItems.forEach((item, index) => {
      total += item.price * item.quantity;

      // إضافة صف جديد في الجدول
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${item.name}</td>
          <td>${item.price} ريال</td>
          <td>
              <input type="number" value="${item.quantity}" min="1" data-index="${index}" class="quantity-input" />
          </td>
          <td>${item.price * item.quantity} ريال</td>
          <td><button class="remove-btn" data-index="${index}">حذف</button></td>
      `;
      cartBody.appendChild(row);
  });

  document.getElementById("total-price").innerText = total;
}

// دالة لتعديل الكمية
function updateQuantity(index, newQuantity) {
  if (newQuantity < 1) return;
  cartItems[index].quantity = newQuantity;
  updateTotal();
}

// دالة لحذف منتج من السلة
function removeItem(index) {
  cartItems.splice(index, 1);
  updateTotal();
}

// الاستماع للأحداث بعد تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  updateTotal();

  // الاستماع لتغيير الكمية
  document.getElementById("cart-body").addEventListener("input", (event) => {
      if (event.target.classList.contains("quantity-input")) {
          const index = event.target.getAttribute("data-index");
          const newQuantity = parseInt(event.target.value);
          updateQuantity(index, newQuantity);
      }
  });

  // الاستماع لزر الحذف
  document.getElementById("cart-body").addEventListener("click", (event) => {
      if (event.target.classList.contains("remove-btn")) {
          const index = event.target.getAttribute("data-index");
          removeItem(index);
      }
  });

  // إضافة الحدث لزر إتمام الشراء
  document.getElementById("checkout-btn").addEventListener("click", () => {
      alert("إتمام الشراء");
  });
});



document.addEventListener("DOMContentLoaded", function() {
  // استرجاع عدد الزيارات من localStorage
  let visitCount = localStorage.getItem("visitCount");

  // إذا كانت الزيارة الأولى أو غير موجودة في localStorage، ابدأ العد من 1
  if (!visitCount) {
      visitCount = 1;
  } else {
      visitCount = parseInt(visitCount) + 1; // زيادة العدد
  }

  // حفظ العدد المحدث في localStorage
  localStorage.setItem("visitCount", visitCount);

  // عرض العدد في الصفحة
  const visitorCountElem = document.getElementById("visitor-count");
  if (visitorCountElem) {
      visitorCountElem.textContent = `عدد الزوار: ${visitCount}`;
  }
});
