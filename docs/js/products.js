const PRODUCTS = [
  {
    id: 1,
    name: "Tenis Adidas ",
    description: "Tenis de alta calidad de la marca Adidas, ideales para deportes y uso diario. ¡Descuento: 2x $3920!",
    price: 3920,
    originalPrice: 4000,
    category: "Zapatos",
    image: "img/catalogo/catalogo00.png",
    offer: true
  },
  {
    id: 2,
    name: "Tenis On Running",
    description: "Tenis On Running con distintos modelos disponibles, amortiguación avanzada y diseño moderno.",
    price: 3300,
    originalPrice: null,
    category: "Zapatos",
    images: [
      "img/catalogo/catalago02.png",
      "img/catalogo/catalago03.png",
      "img/catalogo/catalago04.png"
    ],
    offer: false
  },
  {
    id: 3,
    name: "Bolso Bandolera Michael Kors Jet Set Travel Medium Dome",
    description: "Bolso elegante y funcional de la marca Michael Kors, ideal para uso diario y ocasiones especiales.",
    price: 2800,
    originalPrice: 3200,
    category: "Accesorios",
    image: "img/catalogo/catalago07.png",
    offer: true
  },
  {
    id: 4,
    name: "Bolso Michael Kors",
    description: "Bolso Michael Kors original con acabado premium y diseño elegante, ideal para uso diario. Precio especial: $2,800; combo con cartera a juego: $3,800.",
    price: 2800,
    originalPrice: null,
    category: "Accesorios",
    image: "img/catalogo/catalago08.png",
    offer: true
  },
  {
    id: 5,
    name: "Paquete Michael Kors",
    description: "Paquete de productos Michael Kors, incluyendo bolso y accesorios, ideal para uso diario y ocasiones especiales.",
    price: 2100,
    originalPrice: 2500,
    category: "Accesorios",
    images: [
      "img/catalogo/catalago05.png",
      "img/catalogo/catalago06.png"
    ],
    offer: true
  },
  {
    id: 6,
    name: "Sudadera Nike con capucha tipo hoodie y bolsa canguro",
    description: "Sudadera Nike con capucha tipo hoodie y bolsa canguro, ideal para uso diario y ocasiones especiales.",
    price: 1650,
    originalPrice: 2000,
    category: "Ropa",
    images: [
      "img/catalogo/catalago09.png",
      "img/catalogo/catalago10.png",
      "img/catalogo/catalago11.png",
      "img/catalogo/catalago12.png"
    ],
    offer: true
  },
  {
    id: 7,
    name: "Mochila Lululemon",
    description: "Mochila Lululemon con múltiples compartimentos y diseño ergonómico, ideal para uso diario y actividades deportivas.",
    price: 2744,
    originalPrice: null,
    category: "Accesorios",
    images: [
      "img/catalogo/catalago13.png",
      "img/catalogo/catalago14.png",
      "img/catalogo/catalago15.png"
    ],
    offer: false
  },
  {
    id: 8,
    name: "New Balance 9060 en color Pink Granite Washed Burgundy. ",
    description: "Tenis New Balance 9060 en color Pink Granite Washed Burgundy, con diseño moderno y comodidad excepcional.",
    price: 1590,
    originalPrice: 1650,
    category: "Zapatos",
    image: "img/catalogo/catalago16.png",
    offer: true
  },
  {
    id: 9,
    name: "Bolso crossbody Steve Madden con llavero",
    description: "Bolso crossbody Steve Madden con llavero, ideal para uso diario y ocasiones especiales.",
    price: 840,
    originalPrice: null,
    category: "Accesorios",
    images: [
      "img/catalogo/catalago17.png",
      "img/catalogo/catalago18.png",
      "img/catalogo/catalago19.png",
      "img/catalogo/catalago20.png"
    ],
    offer: false
  },
  {
    id: 10,
    name: "On Cloudnova (White)",
    description: "Tenis On Cloudnova en color blanco, con diseño moderno y comodidad excepcional.",
    price: 2600,
    originalPrice: null,
    category: "Zapatos",
    image: "img/catalogo/catalago21.png",
    offer: false
  },
  {
    id: 11,
    name: "On Cloud 5",
    description: "Tenis On Cloud 5 en color negro, con un diseño moderno y gran comodidad. Incorporan tecnología de amortiguación que brinda una pisada suave y ligera, ideales para el uso diario o actividades ligeras. Su material transpirable y ajuste cómodo los hacen una opción práctica y versátil.",
    price: 3640,
    originalPrice: null,
    category: "Zapatos",
    image: "img/catalogo/catalago22.png",
    offer: false
  },
  {
    id: 12,
    name: "On Cloudnova",
    description: "Tenis On Cloudnova en color blanco, con un diseño moderno y estilo urbano. Su suela con tecnología de amortiguación brinda una pisada suave y cómoda, ideal para el uso diario. Fabricados con materiales ligeros y transpirables, ofrecen un ajuste cómodo y un look versátil que combina fácilmente con cualquier outfit.",
    price: 2800,
    originalPrice: null,
    category: "Zapatos",
    image: "img/catalogo/catalago23.png",
    offer: false
  },
  {
    id: 13,
    name: "Tenis Chunky Retro Urban",
    description: "Tenis estilo chunky con diseño retro y estética urbana. Su suela de plataforma brinda mayor comodidad y estabilidad en cada paso, mientras que sus materiales ligeros y transpirables ofrecen un ajuste confortable durante todo el día. Ideales para complementar un look moderno y versátil, perfectos para uso diario o para salir con amigos.",
    price: 1064,
    originalPrice: null,
    category: "Zapatos",
    images: [
      "img/catalogo/catalago24.png",
      "img/catalogo/catalago25.png"
    ],
    offer: false
  },
  {
    id: 14,
    name: "New Balance 9060",
    description: "un diseño retro-futurista que combina estilo urbano y comodidad. Incorporan una suela robusta con tecnología de amortiguación que brinda una pisada suave y estable, ideal para el uso diario. Su confección en materiales como malla y gamuza ofrece transpirabilidad y durabilidad, mientras que su estética moderna los convierte en una opción versátil para complementar cualquier outfit urbano o casual. Perfectos para quienes buscan un calzado que combine estilo y funcionalidad en su día a día.",
    price: 1560,
    originalPrice: 5808.70,
    category: "Zapatos",
    image: "img/catalogo/catalago26.png",
    offer: true
  },
  {
    id: 15,
    name: "Audífonos Inalámbricos Bluetooth",
    description: "Audífonos tipo over-ear con cancelación de ruido, micrófono integrado y hasta 30 horas de batería.",
    price: 1299,
    originalPrice: 1499,
    category: "Electrónica",
    image: "img/catalogo/catalogo01.png",
    offer: true
  },
  {
    id: 16,
    name: "Reloj Deportivo Smart",
    description: "Reloj inteligente con monitor de ritmo cardíaco, GPS y notificaciones de mensajes.",
    price: 1999,
    originalPrice: null,
    category: "Accesorios",
    image: "img/catalogo/catalogo01.png",
    offer: false
  },
  {
    id: 17,
    name: "Set de Maletas Reforzadas",
    description: "Set de 3 maletas rígidas con ruedas dobles 360° y cerradura TSA.",
    price: 3299,
    originalPrice: 3999,
    category: "Viajes",
    image: "img/catalogo/catalogo01.png",
    offer: true
  },
  {
    id: 18,
    name: "Cámara de Seguridad WiFi",
    description: "Cámara de seguridad con visión nocturna, detección de movimiento y audio bidireccional.",
    price: 1099,
    originalPrice: 1299,
    category: "Hogar",
    image: "img/catalogo/catalogo01.png",
    offer: true
  }
];
