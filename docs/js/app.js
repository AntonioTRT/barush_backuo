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
  
  };

  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const sortFilter = document.getElementById("sortFilter");
  const productGrid = document.getElementById("productGrid");
  const noResults = document.getElementById("noResults");
  const resultsCount = document.getElementById("resultsCount");
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.querySelector(".nav");
  const productModal = document.getElementById("productModal");
  const productModalContent = document.getElementById("productModalContent");
  const productModalClose = document.getElementById("productModalClose");
  const productModalBackdrop = document.getElementById("productModalBackdrop");

  var activeProduct = null;

  function init() {
    populateCategories();
    render();
    searchInput.addEventListener("input", render);
    categoryFilter.addEventListener("change", render);
    sortFilter.addEventListener("change", render);

    productGrid.addEventListener("click", function (event) {
      var card = event.target.closest(".product-card");
      if (!card) return;
      openPublication(parseInt(card.getAttribute("data-product-id"), 10));
    });

    productGrid.addEventListener("keydown", function (event) {
      if (event.key !== "Enter" && event.key !== " ") return;
      var card = event.target.closest(".product-card");
      if (!card) return;
      event.preventDefault();
      openPublication(parseInt(card.getAttribute("data-product-id"), 10));
    });

    if (productModalClose) {
      productModalClose.addEventListener("click", closePublication);
    }

    if (productModalBackdrop) {
      productModalBackdrop.addEventListener("click", closePublication);
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closePublication();
      }
    });

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
    var priceHTML = product.originalPrice
      ? formatPrice(product.price) + '<span class="original-price">' + formatPrice(product.originalPrice) + '</span>'
      : formatPrice(product.price);

    var badgeHTML = product.offer
      ? '<span class="badge-offer">Oferta</span>'
      : "";

    return '<article class="product-card" data-product-id="' + product.id + '" role="button" tabindex="0" aria-label="Ver publicación de ' + product.name + '">' +
      '<div class="product-image"><img src="' + product.image + '" alt="' + product.name + '" style="width:100%;height:100%;object-fit:cover;"></div>' +
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

  function addChatMessage(text, sender) {
    var chatMessages = document.getElementById("chatMessages");
    if (!chatMessages) return;

    var message = document.createElement("div");
    message.className = "chat-message " + sender;
    message.textContent = text;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function sendOrderToWhatsApp() {
    if (!activeProduct) return;
    var orderInput = document.getElementById("orderInput");
    var userText = orderInput && orderInput.value.trim() ? orderInput.value.trim() : "Me interesa este producto.";
    var text = "Hola, quiero pedir este producto:\n" +
      "Producto: " + activeProduct.name + "\n" +
      "Precio: " + formatPrice(activeProduct.price) + "\n" +
      "Mensaje: " + userText;

    window.open("https://api.whatsapp.com/send?text=" + encodeURIComponent(text), "_blank");
  }

  function handleSendChat() {
    var orderInput = document.getElementById("orderInput");
    if (!orderInput) return;
    var text = orderInput.value.trim();
    if (!text) return;

    addChatMessage(text, "user");
    orderInput.value = "";

    setTimeout(function () {
      addChatMessage("Gracias. Te ayudamos con tu pedido. Presiona 'Pedir por WhatsApp' para enviarlo ahora.", "bot");
    }, 450);
  }

  function openPublication(productId) {
    var product = PRODUCTS.find(function (p) { return p.id === productId; });
    if (!product || !productModal || !productModalContent) return;
    activeProduct = product;

    var oldPrice = product.originalPrice
      ? '<span class="old-price">' + formatPrice(product.originalPrice) + '</span>'
      : "";

    productModalContent.innerHTML =
      '<div class="publication-layout">' +
        '<img class="publication-image" src="' + product.image + '" alt="' + product.name + '">' +
        '<div class="publication-info">' +
          '<span class="product-category">' + product.category + '</span>' +
          '<h2 class="publication-title" id="modalProductTitle">' + product.name + '</h2>' +
          '<p class="publication-description">' + product.description + '</p>' +
          '<div class="publication-price">' + formatPrice(product.price) + oldPrice + '</div>' +
          '<div class="chat-box">' +
            '<div class="chat-header">Chat para pedir este producto</div>' +
            '<div class="chat-messages" id="chatMessages"></div>' +
            '<div class="chat-controls">' +
              '<input id="orderInput" type="text" placeholder="Escribe tu mensaje...">' +
              '<button id="sendChatButton" type="button">Enviar</button>' +
            '</div>' +
          '</div>' +
          '<button class="btn whatsapp-order" id="whatsAppOrderButton" type="button">Pedir por WhatsApp</button>' +
        '</div>' +
      '</div>';

    productModal.classList.add("open");
    productModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    addChatMessage("Hola, me interesa " + product.name + ". Cuéntame cuántas piezas quieres y tu ciudad.", "bot");

    var sendChatButton = document.getElementById("sendChatButton");
    var whatsAppOrderButton = document.getElementById("whatsAppOrderButton");
    var orderInput = document.getElementById("orderInput");

    if (sendChatButton) {
      sendChatButton.addEventListener("click", handleSendChat);
    }

    if (orderInput) {
      orderInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          handleSendChat();
        }
      });
      orderInput.focus();
    }

    if (whatsAppOrderButton) {
      whatsAppOrderButton.addEventListener("click", sendOrderToWhatsApp);
    }
  }

  function closePublication() {
    if (!productModal) return;
    productModal.classList.remove("open");
    productModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    activeProduct = null;
  }

  document.addEventListener("DOMContentLoaded", init);
})();
