
// عند الضغط على زر "Find your favorite"
document.getElementById("findFavoriteBtn").addEventListener("click", function () {
    document.getElementById("sectionـProduct").scrollIntoView({ behavior: "smooth" });
  });



  // زر العودة للأعلى
  const goToTopBtn = document.getElementById("goToTopBtn");

  
  // التحكم في ظهور زر العودة للأعلى بناءً على التمرير
  window.onscroll = function () {
    if (window.scrollY > 100) {// إذا تجاوز المستخدم 100 بكسل للأسفل، يتم إظهار الزر.

      goToTopBtn.style.display = "block";// يظهر الزر عندما يتم التمرير لأسفل.
    } else {
      goToTopBtn.style.display = "none";
    }
  };
  // عند الضغط على زر العودة للأعلى
  goToTopBtn.onclick = function () {//When the button is clicked, the code is executed.
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














  document.querySelectorAll('.product-section').forEach(section => {
      const priceElement = section.querySelector("#product-price");
      const quantityElement = section.querySelector("#product-quantity");
      const totalElement = section.querySelector("#total-price");
      const deliveryPrice = 10.1;

      let basePrice = parseFloat(section.getAttribute("data-price"));
      let quantity = 1;

      section.querySelector("#increase-quantity").addEventListener("click", function () {
          quantity++;
          updateTotal();
      });

      section.querySelector("#decrease-quantity").addEventListener("click", function () {
          if (quantity > 1) {
              quantity--;
              updateTotal();
          }
      });

      function updateTotal() {
          quantityElement.textContent = quantity;
          let totalPrice = (basePrice * quantity) + deliveryPrice;
          totalElement.textContent = totalPrice.toFixed(2) + " TUB";
      }
  });
















  // تخزين قيم نموذج الاتصال
  document.getElementById("submitForm").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    console.log("Name:", name, "Email:", email, "Message:", message);
    alert("Form submitted successfully!");
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













let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.querySelectorAll('.product-section').forEach(section => {
    const priceElement = section.querySelector("#product-price");
    const quantityElement = section.querySelector("#product-quantity");
    const totalElement = section.querySelector("#total-price");
    const deliveryPrice = 10.1;

    const updateTotalPrice = () => {
        const productPrice = parseFloat(priceElement.textContent);
        const quantity = parseInt(quantityElement.textContent);
        const totalPrice = (productPrice * quantity) + deliveryPrice;
        totalElement.textContent = totalPrice.toFixed(1) + ' TUB';
    };

    section.querySelector("#increase-quantity").addEventListener('click', () => {
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        updateTotalPrice();
    });

    section.querySelector("#decrease-quantity").addEventListener('click', () => {
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        }
    });

    section.querySelector(".add-to-cart").addEventListener('click', () => {
        const name = section.dataset.name;
        const quantity = parseInt(quantityElement.textContent);
        const price = parseFloat(totalElement.textContent.split(' ')[0]); // الحصول على السعر الإجمالي
        const item = { name, quantity, price }; // إضافة الكمية إلى العنصر
        cart.push(item); // إضافة العنصر إلى السلة
        localStorage.setItem('cart', JSON.stringify(cart)); // تحديث localStorage
        alert(`Added ${quantity} of ${name} to cart at ${price.toFixed(1)} TUB`);
    });

    updateTotalPrice();
});