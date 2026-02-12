const PRODUCTS = [
  {
    id: 1,
    name: "Audífonos Inalámbricos Pro",
    description: "Audífonos Bluetooth con cancelación de ruido activa y hasta 30 horas de batería.",
    price: 1299,
    originalPrice: 1799,
    category: "Electrónica",
    image: "img/catalogo/catalogo01.png",
    offer: true
  },
  {
    id: 2,
    name: "Mochila Urbana Resistente",
    description: "Mochila con compartimento acolchado para laptop de hasta 15.6\", resistente al agua.",
    price: 649,
    originalPrice: null,
    category: "Accesorios",
    image: "img/catalogo/catalogo01.png",
    offer: false
  },
  {
    id: 3,
    name: "Smartwatch Deportivo",
    description: "Reloj inteligente con monitor cardíaco, GPS integrado y resistencia al agua IP68.",
    price: 2499,
    originalPrice: 3200,
    category: "Electrónica",
    image: "img/catalogo/catalogo01.png",
    offer: true
  },
  {
    id: 4,
    name: "Set de Skincare Hidratante",
    description: "Kit completo de cuidado facial: limpiador, tónico, sérum y crema hidratante.",
    price: 899,
    originalPrice: null,
    category: "Belleza",
    image: "img/catalogo/catalogo01.png",
    offer: false
  },
  {
    id: 5,
    name: "Teclado Mecánico RGB",
    description: "Teclado mecánico con switches intercambiables, retroiluminación RGB personalizable.",
    price: 1599,
    originalPrice: 2100,
    category: "Electrónica",
    image: "img/catalogo/catalogo01.png",
    offer: true
  },
  {
    id: 6,
    name: "Botella Térmica 750ml",
    description: "Botella de acero inoxidable que mantiene bebidas frías 24h y calientes 12h.",
    price: 349,
    originalPrice: null,
    category: "Hogar",
    image: "img/catalogo/catalogo01.png",
    offer: false
  },
  {
    id: 7,
    name: "Zapatillas Running Ultra",
    description: "Zapatillas ligeras con amortiguación de espuma reactiva para corredores exigentes.",
    price: 1899,
    originalPrice: 2400,
    category: "Deportes",
    image: "img/catalogo/catalogo01.png",
    offer: true
  },
  {
    id: 8,
    name: "Lámpara de Escritorio LED",
    description: "Lámpara ajustable con 5 niveles de brillo, temperatura de color y puerto USB.",
    price: 499,
    originalPrice: null,
    category: "Hogar",
    image: "img/catalogo/catalogo01.png",
    offer: false
  },
  {
    id: 9,
    name: "Cámara Instantánea Retro",
    description: "Cámara de fotografía instantánea con flash automático y modo selfie integrado.",
    price: 1399,
    originalPrice: null,
    category: "Electrónica",
    image: "img/catalogo/catalogo01.png",
    offer: false
  },
  {
    id: 10,
    name: "Organizador de Maquillaje",
    description: "Organizador acrílico giratorio con múltiples compartimentos y cajones.",
    price: 459,
    originalPrice: 599,
    category: "Belleza",
    image: "img/catalogo/catalogo01.png",
    offer: true
  },
  {
    id: 11,
    name: "Banda de Resistencia Set",
    description: "Set de 5 bandas elásticas con diferentes niveles de resistencia y accesorios.",
    price: 299,
    originalPrice: null,
    category: "Deportes",
    image: "img/catalogo/catalogo01.png",
    offer: false
  },
  {
    id: 12,
    name: "Cargador Portátil 20000mAh",
    description: "Power bank de alta capacidad con carga rápida y dos puertos USB-C.",
    price: 599,
    originalPrice: 799,
    category: "Electrónica",
    image: "img/catalogo/catalogo01.png",
    offer: true
  },
  {
    id: 13,
    name: "Silla Ergonómica de Oficina",
    description: "Silla con soporte lumbar ajustable, reposabrazos 3D y malla transpirable.",
    price: 4599,
    originalPrice: 5800,
    category: "Hogar",
    image: "img/catalogo/catalogo01.png",
    offer: true
  },
  {
    id: 14,
    name: "Protector Solar FPS 50+",
    description: "Protector solar de amplio espectro, ligero, no graso y resistente al sudor.",
    price: 279,
    originalPrice: null,
    category: "Belleza",
    image: "img/catalogo/catalogo01.png",
    offer: false
  },
  {
    id: 15,
    name: "Bolsa Deportiva Multiuso",
    description: "Bolsa con compartimento para calzado, bolsillo impermeable y correa ajustable.",
    price: 549,
    originalPrice: null,
    category: "Deportes",
    image: "img/catalogo/catalogo01.png",
    offer: false
  },
  {
    id: 16,
    name: "Hub USB-C 7 en 1",
    description: "Adaptador multipuerto con HDMI 4K, lector SD, USB 3.0 y carga pass-through.",
    price: 749,
    originalPrice: 999,
    category: "Electrónica",
    image: "img/catalogo/catalogo01.png",
    offer: true
  }
];
