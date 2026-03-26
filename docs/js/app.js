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

  const CATEGORY_META = {
    "Accesorios": { icon: "\u25C7", accent: "#b66a4b", bg: "#f7ebe4", border: "#e7c8b8" },
    "Belleza": { icon: "\u273F", accent: "#b25f7d", bg: "#f8e9ef", border: "#e7c0d1" },
    "Deportes": { icon: "\u25B2", accent: "#4f7b5f", bg: "#ebf4ec", border: "#c8dccb" },
    "Electr\u00F3nica": { icon: "\u25A3", accent: "#4b6f9f", bg: "#eaf0f8", border: "#c8d7ea" },
    "Hogar": { icon: "\u2302", accent: "#8b6a3f", bg: "#f4eee5", border: "#ddcfbb" },
    "Ropa": { icon: "\u25A0", accent: "#8d4f78", bg: "#f3e9f1", border: "#dbc3d3" },
    "Zapatos": { icon: "\u25C6", accent: "#8a6940", bg: "#f6ede2", border: "#e1d0ba" }
  };

  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const categoryPills = document.getElementById("categoryPills");
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
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const prefersHover = window.matchMedia("(hover: hover)");
  const supportsIntersectionObserver = "IntersectionObserver" in window;
  const sliderObserver = supportsIntersectionObserver
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var slider = entry.target;
          if (entry.isIntersecting) {
            startSliderAuto(slider);
          } else {
            stopSliderAuto(slider);
          }
        });
      }, { threshold: 0.35 })
    : null;

  var activeProduct = null;
  var renderTimer = null;
  var sectionMetrics = [];
  var tickingScroll = false;

  function init() {
    populateCategories();
    fetch("js/allowed_ids.json")
      .then(response => response.json())
      .then(data => {
        let ids = [];
        if (Array.isArray(data.allowed_ids) && data.allowed_ids.length > 0) {
          ids = data.allowed_ids;
        } else if (Array.isArray(data.all_ids) && data.all_ids.length > 0) {
          ids = data.all_ids;
        }
        window.ALLOWED_IDS = ids;
        window.WHATSAPP_NUMBER = data.whatsapp_number;
        render();
      });
    searchInput.addEventListener("input", scheduleRender);
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

    function measureSections() {
      sectionMetrics = Array.prototype.map.call(sections, function (section) {
        return {
          id: section.getAttribute("id"),
          top: section.offsetTop,
          bottom: section.offsetTop + section.offsetHeight
        };
      });
      updateActiveNavLink(navLinks);
    }

    function onScroll() {
      if (tickingScroll) return;
      tickingScroll = true;
      window.requestAnimationFrame(function () {
        updateActiveNavLink(navLinks);
        tickingScroll = false;
      });
    }

    measureSections();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measureSections, { passive: true });
    window.addEventListener("load", measureSections, { passive: true });

    var openComment = document.getElementById("anaOpenCatalog");
    if (openComment) {
      openComment.addEventListener("click", function () {
        openCommentModal();
      });
    }

    var commentClose = document.getElementById("commentModalClose");
    var commentBackdrop = document.getElementById("commentModalBackdrop");
    if (commentClose) commentClose.addEventListener("click", closeCommentModal);
    if (commentBackdrop) commentBackdrop.addEventListener("click", closeCommentModal);
  }

  function scheduleRender() {
    if (renderTimer) {
      window.clearTimeout(renderTimer);
    }

    renderTimer = window.setTimeout(function () {
      renderTimer = null;
      render();
    }, 120);
  }

  function updateActiveNavLink(navLinks) {
    if (!navLinks || sectionMetrics.length === 0) return;

    var scrollPos = window.scrollY + 120;
    var activeId = null;

    sectionMetrics.forEach(function (section) {
      if (scrollPos >= section.top && scrollPos < section.bottom) {
        activeId = section.id;
      }
    });

    navLinks.forEach(function (link) {
      var targetId = (link.getAttribute("href") || "").split("#")[1];
      link.classList.toggle("active", !!activeId && targetId === activeId);
    });
  }

  function openCommentModal() {
    var modal = document.getElementById("commentModal");
    var content = document.getElementById("commentModalContent");
    if (!modal || !content) return;

    content.innerHTML =
      '<h3 id="commentModalTitle">Deja tu comentario para Baruch</h3>' +
      '<p>Escribe tu comentario y este será enviado directamente al correo electrónico baruch.usamx@gmail.com para su atención.</p>' +
      '<label for="commentName">Nombre</label>' +
      '<input id="commentName" type="text" placeholder="Tu nombre" />' +
      '<label for="commentEmail">Email</label>' +
      '<input id="commentEmail" type="email" placeholder="Tu email" />' +
      '<label for="commentText">Comentario</label>' +
      '<textarea id="commentText" rows="5" placeholder="Escribe aquí tu comentario..."></textarea>' +
      '<button id="commentSubmit" class="comment-submit" type="button">Enviar comentario</button>';

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    var submit = document.getElementById("commentSubmit");
    if (submit) {
      submit.addEventListener("click", function () {
        var name = document.getElementById("commentName").value.trim();
        var email = document.getElementById("commentEmail").value.trim();
        var text = document.getElementById("commentText").value.trim();
        if (!text) {
          alert("Por favor escribe tu comentario antes de enviar.");
          return;
        }

        var subject = encodeURIComponent("Comentario desde sitio Barush");
        var body = encodeURIComponent("Nombre: " + (name || "No proporcionado") + "\nEmail: " + (email || "No proporcionado") + "\n\nComentario:\n" + text);
        window.location.href = "mailto:baruch.usamx@gmail.com?subject=" + subject + "&body=" + body;
      });
    }
  }

  function closeCommentModal() {
    var modal = document.getElementById("commentModal");
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function populateCategories() {
    var categories = [...new Set(PRODUCTS.map(function (p) { return p.category; }))].sort();

    createCategoryPill("all", "Todas");

    categories.forEach(function (cat) {
      var opt = document.createElement("option");
      opt.value = cat;
      opt.textContent = cat;
      categoryFilter.appendChild(opt);
      createCategoryPill(cat, cat);
    });

    syncCategoryPills();
  }

  function createCategoryPill(value, label) {
    if (!categoryPills) return;
    var meta = getCategoryMeta(value);

    var button = document.createElement("button");
    button.type = "button";
    button.className = "category-pill";
    button.setAttribute("role", "tab");
    button.setAttribute("data-category", value);
    button.setAttribute("aria-selected", value === categoryFilter.value ? "true" : "false");
    button.setAttribute("style", getCategoryStyle(meta));
    button.innerHTML = '<span class="category-pill-icon" aria-hidden="true">' + meta.icon + '</span><span class="category-pill-label">' + label + '</span>';
    button.addEventListener("click", function () {
      categoryFilter.value = value;
      render();
    });
    categoryPills.appendChild(button);
  }

  function syncCategoryPills() {
    if (!categoryPills) return;

    var activeCategory = categoryFilter.value;
    var buttons = categoryPills.querySelectorAll(".category-pill");

    buttons.forEach(function (button) {
      var isActive = button.getAttribute("data-category") === activeCategory;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", isActive ? "true" : "false");
    });
  }

  function getCategoryMeta(category) {
    if (category === "all") {
      return { icon: "\u25C9", accent: "#c4704f", bg: "#f7ece5", border: "#e8cbbd" };
    }

    return CATEGORY_META[category] || { icon: "\u25CF", accent: "#73553b", bg: "#f4ede6", border: "#decfbe" };
  }

  function getCategoryStyle(meta) {
    return "--category-accent:" + meta.accent + ";--category-bg:" + meta.bg + ";--category-border:" + meta.border + ";";
  }

  function createCategoryBadge(category) {
    var meta = getCategoryMeta(category);
    return '<span class="product-category" style="' + getCategoryStyle(meta) + '">' +
      '<span class="product-category-icon" aria-hidden="true">' + meta.icon + '</span>' +
      '<span class="product-category-label">' + category + '</span>' +
    '</span>';
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
      var matchesAllowed = !window.ALLOWED_IDS || window.ALLOWED_IDS.includes(p.id);
      return matchesSearch && matchesCategory && matchesAllowed;
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

  function getRecommendationText(product) {
    if (product.recommendation && product.recommendation.trim()) {
      return product.recommendation.trim();
    }

    return "Recomendacion Baruch: este producto destaca por su calidad, diseno y excelente relacion calidad-precio. Es una opcion confiable para uso diario, para regalo o para reventa, con acabados que proyectan buena presencia y durabilidad. Si buscas una compra segura y con estilo, esta es una excelente eleccion.";
  }

  function getProductImages(product) {
    if (Array.isArray(product.images) && product.images.length > 0) {
      return product.images.slice(0, 4);
    }
    return [product.image];
  }

  function getProductImageSizeAttributes(product) {
    if (product && product.id >= 12 && product.id <= 20) {
      return ' width="1024" height="1024"';
    }
    return '';
  }

  function buildMediaHTML(images, sliderClass, imageClass, productName, imageSizeAttributes) {
    var sizeAttrs = imageSizeAttributes || '';
    if (images.length > 1) {
      var slides = images.map(function (src, index) {
        var activeClass = index === 0 ? " is-active" : "";
        return '<img class="slide-image ' + imageClass + activeClass + '" src="' + src + '" alt="' + productName + ' imagen ' + (index + 1) + '" loading="lazy" decoding="async"' + sizeAttrs + '>';
      }).join("");

      return '<div class="image-slider ' + sliderClass + '">' +
        '<button type="button" class="slider-arrow slider-arrow-prev" aria-label="Imagen anterior">&#8249;</button>' +
        slides +
        '<button type="button" class="slider-arrow slider-arrow-next" aria-label="Siguiente imagen">&#8250;</button>' +
      '</div>';
    }

    return '<img class="' + imageClass + '" src="' + images[0] + '" alt="' + productName + '" loading="lazy" decoding="async"' + sizeAttrs + '>';
  }

  function updateMediaAspectRatio(target, image) {
    if (!target || !image || !image.naturalWidth || !image.naturalHeight) return;
    target.style.setProperty("--media-aspect-ratio", image.naturalWidth + " / " + image.naturalHeight);
  }

  function bindStandaloneMediaAspectRatio(scope) {
    var root = scope || document;
    var mediaImages = root.querySelectorAll(".product-image > img, img.publication-image");

    mediaImages.forEach(function (image) {
      var target = image.classList.contains("publication-image")
        ? image
        : image.closest(".product-image");

      if (!target) return;

      function syncAspectRatio() {
        updateMediaAspectRatio(target, image);
      }

      if (image.complete) {
        syncAspectRatio();
      } else {
        image.addEventListener("load", syncAspectRatio, { once: true });
      }
    });
  }

  function shouldAutoRotateSlider(slider) {
    if (!slider) return false;
    if (prefersReducedMotion.matches) return false;
    if (!prefersHover.matches) return false;
    return slider.classList.contains("publication-media");
  }

  function stopSliderAuto(slider) {
    if (!slider || !slider._autoRotateTimer) return;
    window.clearInterval(slider._autoRotateTimer);
    slider._autoRotateTimer = null;
  }

  function startSliderAuto(slider) {
    if (!slider || slider._autoRotateTimer || !shouldAutoRotateSlider(slider)) return;
    slider._autoRotateTimer = window.setInterval(function () {
      if (typeof slider._nextSlide === "function") {
        slider._nextSlide();
      }
    }, 4000);
  }

  function initImageSliders(scope) {
    var root = scope || document;
    var sliders = root.querySelectorAll(".image-slider");

    sliders.forEach(function (slider) {
      if (slider.dataset.ready === "true") return;

      var slides = slider.querySelectorAll(".slide-image");
      if (slides.length <= 1) return;

      var prevButton = slider.querySelector(".slider-arrow-prev");
      var nextButton = slider.querySelector(".slider-arrow-next");
      var currentIndex = 0;
      var aspectTarget = slider.closest(".product-image") || slider;

      function syncSliderAspectRatio() {
        updateMediaAspectRatio(aspectTarget, slides[currentIndex]);
      }

      function showSlide(index) {
        currentIndex = (index + slides.length) % slides.length;
        slides.forEach(function (slide, slideIndex) {
          slide.classList.toggle("is-active", slideIndex === currentIndex);
        });
        syncSliderAspectRatio();
      }

      function nextSlide() {
        showSlide(currentIndex + 1);
      }

      function prevSlide() {
        showSlide(currentIndex - 1);
      }

      function onArrowClick(handler) {
        return function (event) {
          event.preventDefault();
          event.stopPropagation();
          handler();
          stopSliderAuto(slider);
          startSliderAuto(slider);
        };
      }

      if (prevButton) {
        prevButton.addEventListener("click", onArrowClick(prevSlide));
      }

      if (nextButton) {
        nextButton.addEventListener("click", onArrowClick(nextSlide));
      }

      slider._nextSlide = nextSlide;

      slides.forEach(function (slide) {
        if (!slide.complete) {
          slide.addEventListener("load", syncSliderAspectRatio);
        }
      });

      slider.addEventListener("mouseenter", function () {
        stopSliderAuto(slider);
      });

      slider.addEventListener("mouseleave", function () {
        startSliderAuto(slider);
      });

      showSlide(0);
      if (sliderObserver && shouldAutoRotateSlider(slider)) {
        sliderObserver.observe(slider);
      } else {
        startSliderAuto(slider);
      }
      slider.dataset.ready = "true";
    });
  }

  function createCard(product) {
    var images = getProductImages(product);
    var priceHTML = product.originalPrice
      ? formatPrice(product.price) + '<span class="original-price">' + formatPrice(product.originalPrice) + '</span>'
      : formatPrice(product.price);

    var badgeHTML = product.offer
      ? '<span class="badge-offer">Oferta</span>'
      : "";

    var imageSizeAttrs = getProductImageSizeAttributes(product);
    var cardImageHTML = '<div class="product-image">' +
      buildMediaHTML(images, "product-media-slider", "product-image-media", product.name, imageSizeAttrs) +
      '</div>';

    return '<article class="product-card" data-product-id="' + product.id + '" role="button" tabindex="0" aria-label="Ver publicación de ' + product.name + '">' +
      cardImageHTML +
      '<div class="product-body">' +
        createCategoryBadge(product.category) +
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
    syncCategoryPills();

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
    bindStandaloneMediaAspectRatio(productGrid);
    initImageSliders(productGrid);
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
    var text = "Hola, te interesa un producto similar a este?:\n puedes darme mas detalles de lo que buscas" +
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
    var images = getProductImages(product);

    var oldPrice = product.originalPrice
      ? '<span class="old-price">' + formatPrice(product.originalPrice) + '</span>'
      : "";

    var publicationImageHTML = buildMediaHTML(images, "publication-media", "publication-image", product.name, getProductImageSizeAttributes(product));
    var recommendationText = getRecommendationText(product);

    productModalContent.innerHTML =
      '<div class="publication-layout">' +
        '<div class="publication-media-column">' +
          publicationImageHTML +
          '<p class="publication-recommendation">' + recommendationText + '</p>' +
        '</div>' +
        '<div class="publication-info">' +
          createCategoryBadge(product.category) +
          '<h2 class="publication-title" id="modalProductTitle">' + product.name + '</h2>' +
          '<p class="publication-description">' + product.description + '</p>' +
          '<div class="publication-price">' + formatPrice(product.price) + oldPrice + '</div>' +
          '<input id="orderInput" type="text" placeholder="Escribe tu mensaje...">' +
          '<button class="btn whatsapp-order" id="whatsAppOrderButton" type="button">Pedir por WhatsApp</button>' +
        '</div>' +
      '</div>';

    productModal.classList.add("open");
    productModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    var whatsAppOrderButton = document.getElementById("whatsAppOrderButton");
    var orderInput = document.getElementById("orderInput");
    if (orderInput) orderInput.focus();
    if (whatsAppOrderButton) {
      whatsAppOrderButton.addEventListener("click", function() {
        var userText = orderInput && orderInput.value.trim() ? orderInput.value.trim() : "Me interesa este producto.";
        var text = "Hola, te interesa este producto?\n" +
          "ID: " + product.id + "\n" +
          "Producto: " + product.name + "\n" +
          "Precio: " + formatPrice(product.price) + "\n" +
          "¿Qué detalles buscas? " + userText;
        var whatsappUrl = "https://api.whatsapp.com/send?text=" + encodeURIComponent(text);
        if (window.WHATSAPP_NUMBER && window.WHATSAPP_NUMBER.length > 0) {
          whatsappUrl = "https://api.whatsapp.com/send?phone=" + window.WHATSAPP_NUMBER + "&text=" + encodeURIComponent(text);
        }
        window.open(whatsappUrl, "_blank");
      });
    }

    bindStandaloneMediaAspectRatio(productModalContent);
    initImageSliders(productModalContent);
  }

  function closePublication() {
    if (!productModal) return;
    productModal.querySelectorAll(".image-slider").forEach(function (slider) {
      if (sliderObserver) {
        sliderObserver.unobserve(slider);
      }
      stopSliderAuto(slider);
    });
    productModal.classList.remove("open");
    productModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    activeProduct = null;
  }

  document.addEventListener("DOMContentLoaded", init);
})();
