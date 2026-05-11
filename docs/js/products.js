const PRODUCTS = [
  {
    id: 1,
    name: "Tenis Adidas ",
    description: "Tenis de alta calidad de la marca Adidas, ideales para deportes y uso diario.",
    price: null,
    originalPrice: null,
    category: "Zapatos",
    image: "img/catalogo/catalogo00.png",
    offer: false
  },
  {
    id: 2,
    name: "Tenis On Running",
    description: "Tenis On Running con distintos modelos disponibles, amortiguación avanzada y diseño moderno.",
    price: null,
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
    name: "Bolsos Michael Kors",
    description: "Modelos de bolsos Michael Kors disponibles en esta galería. Solicita color, tamaño e información por mensaje.",
    price: null,
    originalPrice: null,
    category: "Accesorios",
    images: [
      "img/catalogo/catalago07.png",
      "img/catalogo/catalago08.png"
    ],
    offer: false
  },
  {
    id: 4,
    name: "Paquete Michael Kors",
    description: "Paquete de productos Michael Kors, incluyendo bolso y accesorios, ideal para uso diario y ocasiones especiales.",
    price: null,
    originalPrice: null,
    category: "Accesorios",
    images: [
      "img/catalogo/catalago05.png",
      "img/catalogo/catalago06.png"
    ],
    offer: false
  },
  {
    id: 5,
    name: "Sudadera Nike con capucha tipo hoodie y bolsa canguro",
    description: "Sudadera Nike con capucha tipo hoodie y bolsa canguro, ideal para uso diario y ocasiones especiales.",
    price: null,
    originalPrice: null,
    category: "Ropa",
    images: [
      "img/catalogo/catalago09.png",
      "img/catalogo/catalago10.png",
      "img/catalogo/catalago11.png",
      "img/catalogo/catalago12.png"
    ],
    offer: false
  },
  {
    id: 6,
    name: "Mochila Lululemon",
    description: "Mochila Lululemon con múltiples compartimentos y diseño ergonómico, ideal para uso diario y actividades deportivas.",
    price: null,
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
    id: 7,
    name: "New Balance 9060",
    description: "Modelos New Balance 9060 disponibles en esta galería. Solicita talla, color e información por mensaje.",
    price: null,
    originalPrice: null,
    category: "Zapatos",
    images: [
      "img/catalogo/catalago16.png",
      "img/catalogo/catalago26.png"
    ],
    offer: false
  },
  {
    id: 8,
    name: "Bolso crossbody Steve Madden con llavero",
    description: "Bolso crossbody Steve Madden con llavero, ideal para uso diario y ocasiones especiales.",
    price: null,
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
    id: 9,
    name: "Modelos On Running",
    description: "Modelos On Cloudnova y On Cloud 5 disponibles en esta galería. Solicita talla, color e información por mensaje.",
    price: null,
    originalPrice: null,
    category: "Zapatos",
    images: [
      "img/catalogo/catalago21.png",
      "img/catalogo/catalago22.png",
      "img/catalogo/catalago23.png"
    ],
    offer: false
  },
  {
    id: 10,
    name: "Tenis Chunky Retro Urban",
    description: "Tenis estilo chunky con diseño retro y estética urbana. Su suela de plataforma brinda mayor comodidad y estabilidad en cada paso, mientras que sus materiales ligeros y transpirables ofrecen un ajuste confortable durante todo el día. Ideales para complementar un look moderno y versátil, perfectos para uso diario o para salir con amigos.",
    price: null,
    originalPrice: null,
    category: "Zapatos",
    images: [
      "img/catalogo/catalago24.png",
      "img/catalogo/catalago25.png"
    ],
    offer: false
  },
  {
    id: 11,
    name: "Owala “TrioFlow Collection”",
    description: "Una colección de botellas térmicas que combina estilo, funcionalidad y personalidad en tres diseños únicos: tonos cálidos, elegantes y pastel. Cada botella está diseñada para adaptarse a tu ritmo de vida, ya sea en la escuela, el gimnasio o el día a día.",
    price: null,
    originalPrice: null,
    category: "Hogar",
    images: [
      "img/catalogo/catalago27.png",
      "img/catalogo/catalago28.png",
      "img/catalogo/catalago29.png"
    ],
    offer: false
  },
  {
    id: 12,
    name: "Nike Urban Color Pack",
    description: "Diseñados para el uso diario, estos tenis ofrecen una silueta clásica que nunca pasa de moda, con materiales resistentes y una suela cómoda que brinda estabilidad y confort en cada paso. Perfectos para outfits casuales, streetwear o incluso algo más limpio y minimalista.",
    price: null,
    originalPrice: null,
    category: "Zapatos",
    images: [
      "img/catalogo/catalago30.png",
      "img/catalogo/catalago31.png",
      "img/catalogo/catalago32.png",
      "img/catalogo/catalago33.png",
      "img/catalogo/catalago34.png",
      "img/catalogo/catalago35.png",
      "img/catalogo/catalago36.png"
    ],
    offer: false
  },
  {
    id: 13,
    name: "Steve Madden Essentials Wallet Collection",
    description: "Fabricadas con materiales de calidad, estas piezas ofrecen múltiples compartimentos para tarjetas, efectivo y documentos, combinando practicidad con un diseño moderno y sofisticado. Perfectas para uso diario o como complemento de moda.",
    price: null,
    originalPrice: null,
    category: "Accesorios",
    image: "img/catalogo/catalago37.png",
    offer: false
  },
  {
    id: 14,
    name: "Nike & Adidas Premium Socks Pack",
    description: "Fabricadas con materiales de alta calidad, estas calcetas brindan ajuste perfecto, transpirabilidad y soporte durante todo el día. Ideales para uso casual, entrenamiento o complementar tus outfits deportivos.",
    price: null,
    originalPrice: null,
    category: "Ropa",
    image: [
      { src: "img/catalogo/catalago38.png", width: 1024, height: 1536 },
      { src: "img/catalogo/catalago39.png", width: 1024, height: 1536 },
      { src: "img/catalogo/catalago40.png", width: 1024, height: 1536 },
      { src: "img/catalogo/catalago41.png", width: 1024, height: 1536 },
      { src: "img/catalogo/catalago42.png", width: 1024, height: 1536 },
      { src: "img/catalogo/catalago43.png", width: 1024, height: 1536 },
      { src: "img/catalogo/catalago44.png", width: 1536, height: 1024 }
    ],
    offer: false
  },
  {
    id: 15,
    name: "Victoria’s Secret",
    description: "Diseñados para brindar ajuste perfecto y máxima comodidad durante todo el día, estos sets son ideales tanto para uso diario como para ocasiones especiales. Fabricados con materiales suaves, elásticos y de alta calidad que se adaptan al cuerpo.",
    price: null,
    originalPrice: null,
    category: "Ropa",
    images: [
      { src: "img/catalogo/catalago45.png", width: 1024, height: 1536 },
      { src: "img/catalogo/catalago46.png", width: 1024, height: 1536 },
      { src: "img/catalogo/catalago47.png", width: 1024, height: 1536 },
      { src: "img/catalogo/catalago48.png", width: 1024, height: 1536 },
      { src: "img/catalogo/catalago49.png", width: 1024, height: 1536 },
      { src: "img/catalogo/catalago50.png", width: 1536, height: 1024 },
      { src: "img/catalogo/catalago51.png", width: 1536, height: 1024 }
    ],
    offer: false
  }
];
