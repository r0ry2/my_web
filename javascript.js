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
  
  // تخزين قيم نموذج الاتصال
  document.getElementById("submitForm").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    console.log("Name:", name, "Email:", email, "Message:", message);
    alert("Form submitted successfully!");
  });
  
  // عداد الزوار
  const visitorCountElement = document.getElementById("visitorCount");
  let visitorCount = localStorage.getItem("visitorCount") || 0;
  visitorCount++;
  localStorage.setItem("visitorCount", visitorCount);
  if (visitorCountElement) {
    visitorCountElement.textContent = visitorCount;
  }

  document.getElementById("searchBtn").addEventListener("click", function() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    if (searchTerm) {
      alert("Searching for: " + searchTerm);
      // يمكنك إضافة منطق البحث الفعلي هنا (مثل تصفية المنتجات أو إجراء بحث على الصفحة)
    } else {
      alert("Please enter a search term!");
    }
  });

  // إضافة الفاعلية لفتح وغلق القائمة
document.getElementById("sidebar-toggle").addEventListener("click", function() {
    document.getElementById("sidebar").classList.toggle("open");
  });
  
  