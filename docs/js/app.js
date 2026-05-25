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

  const GENERIC_RECOMMENDATIONS = {
    1: "Mensaje de Baruch: Hay momentos en los que una persona solo necesita una senal tranquila para seguir adelante, y este mensaje quiere ser exactamente eso. Que todo lo bueno que estas construyendo encuentre su tiempo, su forma y su lugar, sin prisa pero sin pausa, con la seguridad de que cada paso pequeno tambien cuenta.",
    2: "Mensaje de Baruch: Ojala hoy recuerdes que no tienes que resolver toda tu vida en un solo dia. A veces basta con respirar, ordenar tus ideas y seguir con calma, porque incluso los cambios grandes empiezan con decisiones pequenas que parecen simples, pero terminan transformando todo.",
    3: "Mensaje de Baruch: No todo lo importante hace ruido; muchas veces lo mejor llega en silencio, mientras trabajas, descansas o simplemente decides no rendirte. Que la vida te sorprenda con respuestas serenas, encuentros honestos y motivos suficientes para sonreir con el corazon tranquilo.",
    4: "Mensaje de Baruch: Este espacio tambien puede servir para regalarte una idea bonita: mereces avanzar sin compararte con el ritmo de nadie. Tus tiempos son tuyos, tus batallas tambien, y aun asi sigues aqui, haciendo lo posible con dignidad, con fe y con una constancia que tarde o temprano dara fruto.",
    5: "Mensaje de Baruch: A veces una frase sencilla acompana mas de lo que imaginamos, por eso quiero dejarte esta: sigue confiando en lo que estas sembrando aunque todavia no lo veas florecer. Las etapas lentas no son etapas perdidas; muchas veces son las que preparan lo mejor que viene despues.",
    6: "Mensaje de Baruch: Que nunca se te olvide lo valioso que es cuidar tu mente, tu energia y tu paz. No todo merece una respuesta inmediata ni toda batalla vale tu desgaste; elegir la calma tambien es una forma de fortaleza, y proteger tu bienestar es una decision sabia, no una debilidad.",
    7: "Mensaje de Baruch: Si el camino se ha sentido pesado, toma este mensaje como una pausa amable en medio del dia. Lo que hoy parece confuso puede acomodarse poco a poco, y lo que hoy sientes lejano puede acercarse cuando menos lo esperes, si sigues caminando con esperanza y con el alma firme.",
    8: "Mensaje de Baruch: Hay belleza en volver a empezar sin hacer tanto ruido, con humildad, con ganas y con una fe sencilla en que algo bueno puede pasar. Que esta etapa te encuentre mas fuerte, mas claro y mas dispuesto a recibir lo que si esta alineado con la vida que quieres construir.",
    9: "Mensaje de Baruch: Que esta lectura te deje una sensacion de calma y no de prisa. Todo llega mejor cuando encuentra una mente serena y un corazon dispuesto, asi que no te castigues por ir paso a paso; muchas veces la estabilidad que tanto deseas se construye justamente de esa manera.",
    10: "Mensaje de Baruch: Que este mensaje te acompane como una pequena muestra de confianza en todo lo que puedes lograr. Incluso cuando nadie ve tus esfuerzos completos, cada desvelo, cada intento y cada decision responsable va formando un futuro mas firme, mas digno y mas cercano a lo que anhelas.",
    11: "Mensaje de Baruch: Hay temporadas para acelerar y temporadas para respirar, y ambas son necesarias. Si hoy te toca reorganizarte, descansar o empezar de nuevo, hazlo sin culpa; tambien eso es avanzar, porque una vida bien construida no solo se mide por velocidad, sino por equilibrio y sentido.",
    12: "Mensaje de Baruch: Nunca pienses que es poca cosa elegir un momento para ti, detenerte y leer unas palabras con calma. A veces esa pausa breve recuerda lo esencial: que sigues siendo capaz, que sigues teniendo valor y que todavia puedes abrir nuevas puertas aunque el panorama no este completo.",
    13: "Mensaje de Baruch: Que lo bueno te encuentre preparado, pero sobre todo en paz. No todo depende de controlar cada detalle; muchas cosas mejoran cuando sueltas la ansiedad, haces tu parte con honestidad y permites que el tiempo acomode aquello que ahora mismo parece no tener respuesta.",
    14: "Mensaje de Baruch: Hay dias en los que el corazon pide certeza y solo recibe silencio, pero incluso ese silencio puede estar trabajando a tu favor. Sigue sembrando con paciencia, sigue cuidando lo que amas y sigue creyendo que una etapa mas noble puede abrirse cuando menos lo imagines."
  };

  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const categoryPills = document.getElementById("categoryPills");
  const sortFilter = document.getElementById("sortFilter");
  const productGrid = document.getElementById("productGrid");
  const noResults = document.getElementById("noResults");
  const resultsCount = document.getElementById("resultsCount");
  const activeCategoryState = document.getElementById("activeCategoryState");
  const resetCatalogFilters = document.getElementById("resetCatalogFilters");
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
      var hasCatalogUI = categoryFilter && categoryPills && searchInput && sortFilter && productGrid && resultsCount && activeCategoryState;

      if (hasCatalogUI) {
        populateCategories();
      }

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
          if (hasCatalogUI) {
            render();
          }
        });

      if (hasCatalogUI) {
        searchInput.addEventListener("input", scheduleRender);
        categoryFilter.addEventListener("change", render);
        sortFilter.addEventListener("change", render);

        if (resetCatalogFilters) {
          resetCatalogFilters.addEventListener("click", resetCatalogView);
        }

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
      }
      populateFooterCategories();
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
    populateFooterCategories(categories);
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

  function populateFooterCategories(categories) {
    var list = document.getElementById("footerCategoryList");
    if (!list) return;

    var footerCategories = categories || [...new Set(PRODUCTS.map(function (p) { return p.category; }))].sort();
    list.innerHTML = "";

    footerCategories.forEach(function (category) {
      var meta = getCategoryMeta(category);
      var item = document.createElement("li");
      var link = document.createElement("a");
      link.href = "index.html#catalogo";
      link.innerHTML = '<span class="footer-category-icon" aria-hidden="true">' + meta.icon + '</span>' + category;
      item.appendChild(link);
      list.appendChild(item);
    });
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

  function getActiveCategoryStateLabel() {
    var category = categoryFilter.value;
    return category === "all" ? "Todas las categorías" : "Categoría: " + category;
  }

  function resetCatalogView() {
    searchInput.value = "";
    categoryFilter.value = "all";
    sortFilter.value = "name-asc";
    render();
    searchInput.focus();
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
        default: return 0;
      }
    });

    return filtered;
  }

  function hasProductPrice(product) {
    return !!product && typeof product.price === "number" && !Number.isNaN(product.price);
  }

  function hasActiveOffer(product) {
    return false;
  }

  function getCardPriceHTML(product) {
    return "";
  }

  function getPriceCaption(product) {
    return "Información por mensaje";
  }

  function getPublicationPriceLabel(product) {
    return "Información";
  }

  function getPublicationPriceHTML(product) {
    return "Disponible por mensaje";
  }

  function getPriceNote(product) {
    return "Los detalles de este producto se comparten por mensaje según disponibilidad.";
  }

  function getWhatsAppSupportCopy(product) {
    return "Tu mensaje de WhatsApp saldrá preparado con el nombre e ID del producto para que el seguimiento sea más ágil.";
  }

  function getRecommendationText(product) {
    if (product.recommendation && product.recommendation.trim()) {
      return product.recommendation.trim();
    }

    return GENERIC_RECOMMENDATIONS[product.id] || "Mensaje de Baruch: Gracias por visitar este espacio. Que encuentres aqui no solo algo que te guste, sino tambien un pequeno recordatorio de que las cosas buenas toman tiempo, se construyen con calma y llegan mejor cuando las recibimos con una actitud serena.";
  }

  function getProductImages(product) {
    if (Array.isArray(product.images) && product.images.length > 0) {
      return product.images;
    }
    if (Array.isArray(product.image) && product.image.length > 0) {
      return product.image;
    }
    return [product.image];
  }

  function getProductImageSizeAttributes(product) {
    if (product && product.id >= 11 && product.id <= 14) {
      return ' width="1024" height="1024"';
    }
    return '';
  }

  function getMediaSource(image) {
    return typeof image === "string" ? image : image.src;
  }

  function getMediaSizeAttributes(image, fallbackAttributes) {
    if (image && typeof image === "object" && image.width && image.height) {
      return ' width="' + image.width + '" height="' + image.height + '"';
    }
    return fallbackAttributes || '';
  }

  function buildMediaHTML(images, sliderClass, imageClass, productName, imageSizeAttributes) {
    if (images.length > 1) {
      var slides = images.map(function (image, index) {
        var activeClass = index === 0 ? " is-active" : "";
        var src = getMediaSource(image);
        var sizeAttrs = getMediaSizeAttributes(image, imageSizeAttributes);
        return '<img class="slide-image ' + imageClass + activeClass + '" src="' + src + '" alt="' + productName + ' imagen ' + (index + 1) + '" loading="lazy" decoding="async"' + sizeAttrs + '>';
      }).join("");

      return '<div class="image-slider ' + sliderClass + '">' +
        '<button type="button" class="slider-arrow slider-arrow-prev" aria-label="Imagen anterior">&#8249;</button>' +
        slides +
        '<button type="button" class="slider-arrow slider-arrow-next" aria-label="Siguiente imagen">&#8250;</button>' +
      '</div>';
    }

    var image = images[0];
    return '<img class="' + imageClass + '" src="' + getMediaSource(image) + '" alt="' + productName + '" loading="lazy" decoding="async"' + getMediaSizeAttributes(image, imageSizeAttributes) + '>';
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
    var statusHTML = '<span class="product-flag">Disponible</span>';
    var priceCaption = getPriceCaption(product);

    var imageSizeAttrs = getProductImageSizeAttributes(product);
    var cardImageHTML = '<div class="product-image">' +
      buildMediaHTML(images, "product-media-slider", "product-image-media", product.name, imageSizeAttrs) +
      '</div>';

    return '<article class="product-card" data-product-id="' + product.id + '" role="button" tabindex="0" aria-label="Ver publicación de ' + product.name + '">' +
      cardImageHTML +
      '<div class="product-body">' +
        '<div class="product-card-header">' +
          createCategoryBadge(product.category) +
          statusHTML +
        '</div>' +
        '<h3 class="product-name">' + product.name + '</h3>' +
        '<p class="product-description">' + product.description + '</p>' +
        '<div class="product-footer">' +
          '<div class="product-pricing">' +
            '<span class="product-price-caption">' + priceCaption + '</span>' +
          '</div>' +
          '<span class="product-cta">Ver detalle</span>' +
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
      if (activeCategoryState) {
        activeCategoryState.textContent = getActiveCategoryStateLabel();
      }
      return;
    }

    noResults.style.display = "none";
    resultsCount.textContent = products.length === PRODUCTS.length
      ? products.length + " productos disponibles"
      : products.length + " de " + PRODUCTS.length + " productos";
    if (activeCategoryState) {
      activeCategoryState.textContent = getActiveCategoryStateLabel();
    }

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
    var text = "Hola, te interesa un producto similar a este?:\n puedes darme mas detalles de lo que buscas\n" +
      "Producto: " + activeProduct.name + "\n";

    text += "Mensaje: " + userText;

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

    var publicationImageHTML = buildMediaHTML(images, "publication-media", "publication-image", product.name, getProductImageSizeAttributes(product));
    var recommendationText = getRecommendationText(product);
    var priceNote = getPriceNote(product);
    var publicationStatus = '<span class="publication-tag">Disponible</span>';

    productModalContent.innerHTML =
      '<div class="publication-layout">' +
        '<div class="publication-media-column">' +
          '<div class="publication-gallery-card">' +
            publicationImageHTML +
          '</div>' +
          '<div class="publication-recommendation-card">' +
            '<span class="publication-panel-label">Recomendación Barush</span>' +
            '<p class="publication-recommendation">' + recommendationText + '</p>' +
          '</div>' +
        '</div>' +
        '<div class="publication-info">' +
          '<div class="publication-info-card">' +
            '<div class="publication-meta">' +
              createCategoryBadge(product.category) +
              publicationStatus +
              '<span class="publication-tag publication-tag-muted">ID ' + product.id + '</span>' +
            '</div>' +
            '<h2 class="publication-title" id="modalProductTitle">' + product.name + '</h2>' +
            '<p class="publication-description">' + product.description + '</p>' +
            '<div class="publication-price-card">' +
              '<span class="publication-price-label">' + getPublicationPriceLabel(product) + '</span>' +
              '<div class="publication-price">' + getPublicationPriceHTML(product) + '</div>' +
              '<p class="publication-price-note">' + priceNote + '</p>' +
            '</div>' +
            '<div class="publication-support-grid">' +
              '<div class="publication-support-item">' +
                '<strong>Compra guiada</strong>' +
                '<span>Te ayudamos a revisar dudas como talla, color, cantidad o disponibilidad antes de cerrar tu pedido.</span>' +
              '</div>' +
              '<div class="publication-support-item">' +
                '<strong>Solicitud más rápida</strong>' +
                '<span>' + getWhatsAppSupportCopy(product) + '</span>' +
              '</div>' +
            '</div>' +
            '<label class="order-label" for="orderInput">Cuéntanos qué detalle te interesa</label>' +
            '<textarea id="orderInput" rows="4" placeholder="Ejemplo: talla, color, cantidad o ciudad de entrega"></textarea>' +
            '<div class="publication-actions">' +
              '<button class="btn whatsapp-order" id="whatsAppOrderButton" type="button">Solicitar por WhatsApp</button>' +
              '<p class="publication-action-note">Abriremos un mensaje listo para enviar con los datos del producto.</p>' +
            '</div>' +
          '</div>' +
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
          "Producto: " + product.name + "\n";

        text += "¿Qué detalles buscas? " + userText;
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
