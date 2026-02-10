(function () {
  const IMAGE_ICONS = {
    headphones: "🎧",
    backpack: "🎒",
    watch: "⌚",
    skincare: "🧴",
    keyboard: "⌨️",
    bottle: "🧊",
    shoes: "👟",
    lamp: "💡",
    camera: "📷",
    organizer: "💄",
    bands: "🏋️",
    powerbank: "🔋",
    chair: "🪑",
    sunscreen: "☀️",
    sportsbag: "🏃",
    hub: "🔌"
  };

  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const sortFilter = document.getElementById("sortFilter");
  const productGrid = document.getElementById("productGrid");
  const noResults = document.getElementById("noResults");
  const resultsCount = document.getElementById("resultsCount");
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.querySelector(".nav");

  function init() {
    populateCategories();
    render();
    searchInput.addEventListener("input", render);
    categoryFilter.addEventListener("change", render);
    sortFilter.addEventListener("change", render);

    // Mobile menu toggle
    if (menuToggle && nav) {
      menuToggle.addEventListener("click", function () {
        nav.classList.toggle("open");
      });

      // Close menu when a nav link is clicked
      nav.querySelectorAll(".nav-link").forEach(function (link) {
        link.addEventListener("click", function () {
          nav.classList.remove("open");
        });
      });
    }

    // Active nav link on scroll
    var sections = document.querySelectorAll("section[id]");
    var navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", function () {
      var scrollPos = window.scrollY + 120;
      sections.forEach(function (section) {
        var top = section.offsetTop;
        var height = section.offsetHeight;
        var id = section.getAttribute("id");

        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(function (link) {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + id) {
              link.classList.add("active");
            }
          });
        }
      });
    });
  }

  function populateCategories() {
    var categories = [...new Set(PRODUCTS.map(function (p) { return p.category; }))].sort();
    categories.forEach(function (cat) {
      var opt = document.createElement("option");
      opt.value = cat;
      opt.textContent = cat;
      categoryFilter.appendChild(opt);
    });
  }

  function getFilteredProducts() {
    var query = searchInput.value.toLowerCase().trim();
    var category = categoryFilter.value;

    var filtered = PRODUCTS.filter(function (p) {
      var matchesSearch = !query ||
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query);
      var matchesCategory = category === "all" || p.category === category;
      return matchesSearch && matchesCategory;
    });

    var sort = sortFilter.value;
    filtered.sort(function (a, b) {
      switch (sort) {
        case "name-asc": return a.name.localeCompare(b.name);
        case "name-desc": return b.name.localeCompare(a.name);
        case "price-asc": return a.price - b.price;
        case "price-desc": return b.price - a.price;
        default: return 0;
      }
    });

    return filtered;
  }

  function formatPrice(price) {
    return "$" + price.toLocaleString("es-MX");
  }

  function createCard(product) {
    var icon = IMAGE_ICONS[product.image] || "📦";

    var priceHTML = product.originalPrice
      ? formatPrice(product.price) + '<span class="original-price">' + formatPrice(product.originalPrice) + '</span>'
      : formatPrice(product.price);

    var badgeHTML = product.offer
      ? '<span class="badge-offer">Oferta</span>'
      : "";

    return '<article class="product-card">' +
      '<div class="product-image">' + icon + '</div>' +
      '<div class="product-body">' +
        '<span class="product-category">' + product.category + '</span>' +
        '<h3 class="product-name">' + product.name + '</h3>' +
        '<p class="product-description">' + product.description + '</p>' +
        '<div class="product-footer">' +
          '<span class="product-price">' + priceHTML + '</span>' +
          badgeHTML +
        '</div>' +
      '</div>' +
    '</article>';
  }

  function render() {
    var products = getFilteredProducts();

    if (products.length === 0) {
      productGrid.innerHTML = "";
      noResults.style.display = "block";
      resultsCount.textContent = "0 productos encontrados";
      return;
    }

    noResults.style.display = "none";
    resultsCount.textContent = products.length === PRODUCTS.length
      ? products.length + " productos"
      : products.length + " de " + PRODUCTS.length + " productos";

    productGrid.innerHTML = products.map(createCard).join("");
  }

  document.addEventListener("DOMContentLoaded", init);
})();
