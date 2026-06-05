const PRODUCTS = [
  {
    id: 1,
    name: "Tenis Adidas",
    description: "Tenis Adidas cómodos para deporte, caminar y uso diario casual.",
    price: null,
    originalPrice: null,
    category: "Zapatos",
    image: "img/catalogo/optimized/catalogo00.jpg",
    offer: false
  },
  {
    id: 2,
    name: "Tenis On Running",
    description: "Tenis On Running ligeros, con amortiguación cómoda y diseño moderno.",
    price: null,
    originalPrice: null,
    category: "Zapatos",
    images: [
      "img/catalogo/optimized/catalago02.jpg",
      "img/catalogo/optimized/catalago03.jpg",
      "img/catalogo/optimized/catalago04.jpg"
    ],
    offer: false
  },
  {
    id: 3,
    name: "Bolsos Michael Kors",
    description: "Bolsos Michael Kors elegantes para diario, eventos y salidas especiales.",
    price: null,
    originalPrice: null,
    category: "Accesorios",
    images: [
      "img/catalogo/optimized/catalago07.jpg",
      "img/catalogo/optimized/catalago08.jpg"
    ],
    offer: false
  },
  {
    id: 4,
    name: "Paquete Michael Kors",
    description: "Set Michael Kors con bolso y accesorios para combinar fácilmente.",
    price: null,
    originalPrice: null,
    category: "Accesorios",
    images: [
      "img/catalogo/optimized/catalago05.jpg",
      "img/catalogo/optimized/catalago06.jpg"
    ],
    offer: false
  },
  {
    id: 5,
    name: "Sudadera Nike con capucha tipo hoodie y bolsa canguro",
    description: "Sudadera Nike con capucha, bolsa frontal y estilo casual cómodo.",
    price: null,
    originalPrice: null,
    category: "Ropa",
    images: [
      "img/catalogo/optimized/catalago09.jpg",
      "img/catalogo/optimized/catalago10.jpg",
      "img/catalogo/optimized/catalago11.jpg",
      "img/catalogo/optimized/catalago12.jpg"
    ],
    offer: false
  },
  {
    id: 6,
    name: "Mochila Lululemon",
    description: "Mochila Lululemon práctica, con compartimentos para trabajo, escuela y viaje.",
    price: null,
    originalPrice: null,
    category: "Accesorios",
    images: [
      "img/catalogo/optimized/catalago13.jpg",
      "img/catalogo/optimized/catalago14.jpg",
      "img/catalogo/optimized/catalago15.jpg",
      { src: "img/catalogo/optimized/catalago100.jpg", width: 1122, height: 1402 }
    ],
    offer: false
  },
  {
    id: 7,
    name: "New Balance 9060",
    description: "New Balance 9060 modernos, cómodos para caminar y combinar outfits.",
    price: null,
    originalPrice: null,
    category: "Zapatos",
    images: [
      "img/catalogo/optimized/catalago16.jpg",
      "img/catalogo/optimized/catalago26.jpg"
    ],
    offer: false
  },
  {
    id: 8,
    name: "Bolso crossbody Steve Madden con llavero",
    description: "Bolso Steve Madden crossbody, compacto para diario y ocasiones especiales.",
    price: null,
    originalPrice: null,
    category: "Accesorios",
    images: [
      "img/catalogo/optimized/catalago17.jpg",
      "img/catalogo/optimized/catalago18.jpg",
      "img/catalogo/optimized/catalago19.jpg",
      "img/catalogo/optimized/catalago20.jpg"
    ],
    offer: false
  },
  {
    id: 9,
    name: "Modelos On Running",
    description: "Modelos On Running versátiles, con siluetas modernas y ajuste cómodo.",
    price: null,
    originalPrice: null,
    category: "Zapatos",
    images: [
      "img/catalogo/optimized/catalago21.jpg",
      "img/catalogo/optimized/catalago22.jpg",
      "img/catalogo/optimized/catalago23.jpg"
    ],
    offer: false
  },
  {
    id: 10,
    name: "Tenis Chunky Retro Urban",
    description: "Tenis chunky retro, con plataforma cómoda y estilo urbano moderno.",
    price: null,
    originalPrice: null,
    category: "Zapatos",
    images: [
      "img/catalogo/optimized/catalago24.jpg",
      "img/catalogo/optimized/catalago25.jpg"
    ],
    offer: false
  },
  {
    id: 11,
    name: "Owala TrioFlow Collection",
    description: "Botellas Owala térmicas, coloridas y prácticas para llevar hidratación diaria.",
    price: null,
    originalPrice: null,
    category: "Hogar",
    images: [
      "img/catalogo/optimized/catalago27.jpg",
      "img/catalogo/optimized/catalago28.jpg",
      "img/catalogo/optimized/catalago29.jpg"
    ],
    offer: false
  },
  {
    id: 12,
    name: "Nike Urban Color Pack",
    description: "Tenis Nike urbanos, resistentes y cómodos para looks casuales diarios.",
    price: null,
    originalPrice: null,
    category: "Zapatos",
    images: [
      "img/catalogo/optimized/catalago30.jpg",
      "img/catalogo/optimized/catalago31.jpg",
      "img/catalogo/optimized/catalago32.jpg",
      "img/catalogo/optimized/catalago33.jpg",
      "img/catalogo/optimized/catalago34.jpg",
      "img/catalogo/optimized/catalago35.jpg",
      "img/catalogo/optimized/catalago36.jpg"
    ],
    offer: false
  },
  {
    id: 13,
    name: "Steve Madden Essentials Wallet Collection",
    description: "Carteras Steve Madden compactas, elegantes para tarjetas, efectivo y documentos.",
    price: null,
    originalPrice: null,
    category: "Accesorios",
    image: "img/catalogo/optimized/catalago37.jpg",
    offer: false
  },
  {
    id: 14,
    name: "Nike & Adidas Premium Socks Pack",
    description: "Calcetas Nike y Adidas suaves, transpirables para entrenamiento y diario.",
    price: null,
    originalPrice: null,
    category: "Ropa",
    image: [
      { src: "img/catalogo/optimized/catalago38.jpg", width: 1024, height: 1536 },
      { src: "img/catalogo/optimized/catalago39.jpg", width: 1024, height: 1536 },
      { src: "img/catalogo/optimized/catalago40.jpg", width: 1024, height: 1536 },
      { src: "img/catalogo/optimized/catalago41.jpg", width: 1024, height: 1536 },
      { src: "img/catalogo/optimized/catalago42.jpg", width: 1024, height: 1536 },
      { src: "img/catalogo/optimized/catalago43.jpg", width: 1024, height: 1536 },
      { src: "img/catalogo/optimized/catalago44.jpg", width: 1536, height: 1024 }
    ],
    offer: false
  },
  {
    id: 15,
    name: "Victoria's Secret",
    description: "Sets Victoria's Secret cómodos, suaves y coloridos para uso diario.",
    price: null,
    originalPrice: null,
    category: "Ropa",
    images: [
      { src: "img/catalogo/optimized/catalago45.jpg", width: 1024, height: 1536 },
      { src: "img/catalogo/optimized/catalago46.jpg", width: 1024, height: 1536 },
      { src: "img/catalogo/optimized/catalago47.jpg", width: 1024, height: 1536 },
      { src: "img/catalogo/optimized/catalago48.jpg", width: 1024, height: 1536 },
      { src: "img/catalogo/optimized/catalago49.jpg", width: 1024, height: 1536 },
      { src: "img/catalogo/optimized/catalago50.jpg", width: 1536, height: 1024 },
      { src: "img/catalogo/optimized/catalago51.jpg", width: 1536, height: 1024 }
    ],
    offer: false
  },
  {
    id: 16,
    name: "Victoria secret body cream & body spray",
    description: "Victoria secret body cream & body spray con cremas corporales y body sprays en aromas frescos, dulces y calidos. Las imagenes muestran sets de cuidado corporal en tonos rosa, azul, naranja y shimmer, con opciones como Aqua Kiss, Midnight Bloom, Bare Vanilla Vacation, Pure Seduction y presentaciones brillantes.",
    price: null,
    originalPrice: null,
    category: "Belleza",
    images: [
      { src: "img/catalogo/optimized/catalago52.jpg", width: 1680, height: 945 },
      { src: "img/catalogo/optimized/catalago53.jpg", width: 1680, height: 945 },
      { src: "img/catalogo/optimized/catalago54.jpg", width: 1226, height: 1225 },
      { src: "img/catalogo/optimized/catalago55.jpg", width: 1290, height: 1229 },
      { src: "img/catalogo/optimized/catalago56.jpg", width: 1666, height: 929 }
    ],
    offer: false
  },
  {
    id: 17,
    name: "Fragancias Exclusivas",
    description: "Fragancias Exclusivas con perfumes de diseno elegante y presencia sofisticada. Las imagenes muestran botellas Valentino en negro y rosa, Gucci Guilty en tono dorado, fragancias Jean Paul Gaultier con siluetas metalicas y Carolina Herrera Good Girl en presentaciones azul intenso, ideales para quienes buscan aromas distintivos para ocasiones especiales o uso diario.",
    price: null,
    originalPrice: null,
    category: "Belleza",
    images: [
      { src: "img/catalogo/optimized/catalago57.jpg", width: 1154, height: 1363 },
      { src: "img/catalogo/optimized/catalago58.jpg", width: 1162, height: 1354 },
      { src: "img/catalogo/optimized/catalago59.jpg", width: 1051, height: 1496 },
      { src: "img/catalogo/optimized/catalago60.jpg", width: 1448, height: 1086 },
      { src: "img/catalogo/optimized/catalago61.jpg", width: 964, height: 1632 },
      { src: "img/catalogo/optimized/catalago62.jpg", width: 986, height: 1594 }
    ],
    offer: false
  },
  {
    id: 18,
    name: "Fragancias Rabanne | Colección Phantom & Fame",
    description: "Fragancias Rabanne | Coleccion Phantom & Fame con disenos futuristas y llamativos. Las imagenes muestran Phantom en acabado plateado con detalles negro y rojo, junto a Fame en presentaciones doradas con detalles rojos y blancos, una coleccion pensada para destacar con aromas modernos, elegantes y con mucha personalidad.",
    price: null,
    originalPrice: null,
    category: "Belleza",
    images: [
      { src: "img/catalogo/optimized/catalago63.jpg", width: 1143, height: 1376 },
      { src: "img/catalogo/optimized/catalago64.jpg", width: 1114, height: 1411 },
      { src: "img/catalogo/optimized/catalago65.jpg", width: 1056, height: 1490 },
      { src: "img/catalogo/optimized/catalago66.jpg", width: 1023, height: 1537 }
    ],
    offer: false
  },
  {
    id: 19,
    name: "Bolsa Tote Premium Valentino Negra",
    description: "Bolsa Tote Premium Valentino Negra con silueta amplia, acabado brillante y estilo elegante para uso diario o salidas especiales. La imagen muestra una tote negra con asas largas, logo V frontal en relieve y detalle de borlas laterales, pensada para combinar practicidad, presencia y un look sofisticado.",
    price: null,
    originalPrice: null,
    category: "Accesorios",
    images: [
      { src: "img/catalogo/optimized/catalago67.jpg", width: 1321, height: 1191 }
    ],
    offer: false
  },
  {
    id: 20,
    name: "Modelos para Niña y Niño | Personajes y Moda",
    description: "Modelos para Niña y Niño | Personajes y Moda con opciones coloridas, comodas y divertidas para uso diario. Las imagenes muestran tenis con personajes como Minecraft, Hello Kitty, Paw Patrol, Bluey y Sonic, ademas de modelos casuales tipo New Balance, Converse y Adidas, sandalias, zapatos con brillo, flats con flores y clogs estilo crocs para combinar juego, escuela y moda infantil.",
    price: null,
    originalPrice: null,
    category: "Zapatos",
    images: [
      { src: "img/catalogo/optimized/catalago68.jpg", width: 1508, height: 1043 },
      { src: "img/catalogo/optimized/catalago69.jpg", width: 1455, height: 1081 },
      { src: "img/catalogo/optimized/catalago70.jpg", width: 1276, height: 1233 },
      { src: "img/catalogo/optimized/catalago71.jpg", width: 1374, height: 1145 },
      { src: "img/catalogo/optimized/catalago72.jpg", width: 1436, height: 1096 },
      { src: "img/catalogo/optimized/catalago73.jpg", width: 1448, height: 1086 },
      { src: "img/catalogo/optimized/catalago74.jpg", width: 1475, height: 1066 },
      { src: "img/catalogo/optimized/catalago75.jpg", width: 1536, height: 1024 },
      { src: "img/catalogo/optimized/catalago76.jpg", width: 1536, height: 1024 },
      { src: "img/catalogo/optimized/catalago77.jpg", width: 1478, height: 1064 },
      { src: "img/catalogo/optimized/catalago78.jpg", width: 1536, height: 1024 },
      { src: "img/catalogo/optimized/catalago79.jpg", width: 1536, height: 1024 },
      { src: "img/catalogo/optimized/catalago80.jpg", width: 1536, height: 1024 },
      { src: "img/catalogo/optimized/catalago81.jpg", width: 1536, height: 1024 },
      { src: "img/catalogo/optimized/catalago82.jpg", width: 1536, height: 1024 },
      { src: "img/catalogo/optimized/catalago83.jpg", width: 1536, height: 1024 },
      { src: "img/catalogo/optimized/catalago84.jpg", width: 1536, height: 1024 },
      { src: "img/catalogo/optimized/catalago85.jpg", width: 1536, height: 1024 }
    ],
    offer: false
  },
  {
    id: 21,
    name: "Chanclas Slide Premium Lululemon",
    description: "Chanclas Slide Premium Lululemon con diseno minimalista, moderno y comodo para uso diario. La imagen muestra un par en tono beige neutro, con banda ancha de acabado tejido, plantilla moldeada y silueta ligera, ideal para descansar, viajar, ir a la alberca o completar un look casual.",
    price: null,
    originalPrice: null,
    category: "Zapatos",
    images: [
      { src: "img/catalogo/optimized/catalago86.jpg", width: 1190, height: 1322 }
    ],
    offer: false
  },
  {
    id: 22,
    name: "Colección Premium de Calcetas Lululemon",
    description: "Coleccion Premium de Calcetas Lululemon con opciones comodas y versatiles para uso diario, entrenamiento y yoga. Las imagenes muestran modelos blancos, negros, rosas y combinados, en largos crew y quarter, paquetes de varios pares y calcetas antiderrapantes con puntos de agarre, todas con un estilo deportivo limpio y moderno.",
    price: null,
    originalPrice: null,
    category: "Ropa",
    images: [
      { src: "img/catalogo/optimized/catalago87.jpg", width: 1023, height: 1537 },
      { src: "img/catalogo/optimized/catalago88.jpg", width: 1023, height: 1537 },
      { src: "img/catalogo/optimized/catalago89.jpg", width: 1023, height: 1537 },
      { src: "img/catalogo/optimized/catalago90.jpg", width: 1122, height: 1402 }
    ],
    offer: false
  },
  {
    id: 23,
    name: "Leggings y Conjuntos Premium Lululemon",
    description: "Leggings y Conjuntos Premium Lululemon con ajuste comodo, estilo deportivo y siluetas versatiles para entrenamiento o uso casual. Las imagenes muestran leggings de cintura alta en tonos rojo, verde y negro, ademas de un conjunto azul coordinado con top deportivo de tirantes cruzados y leggings, ideal para yoga, gimnasio y actividades diarias.",
    price: null,
    originalPrice: null,
    category: "Ropa",
    images: [
      { src: "img/catalogo/optimized/catalago91.jpg", width: 1426, height: 1103 },
      { src: "img/catalogo/optimized/catalago92.jpg", width: 799, height: 1969 },
      { src: "img/catalogo/optimized/catalago93.jpg", width: 1086, height: 1448 }
    ],
    offer: false
  },
  {
    id: 24,
    name: "Colección InvisiWear para Mujer Lululemon",
    description: "Coleccion InvisiWear para Mujer Lululemon con ropa interior suave, ligera y disenada para brindar un acabado discreto bajo la ropa. Las imagenes muestran un paquete de tres bikinis de tiro medio en tonos vino, rosa y negro, con corte limpio y ajuste comodo para uso diario, entrenamiento o looks ajustados.",
    price: null,
    originalPrice: null,
    category: "Ropa",
    images: [
      { src: "img/catalogo/optimized/catalago94.jpg", width: 1023, height: 1537 },
      { src: "img/catalogo/optimized/catalago95.jpg", width: 400, height: 480 }
    ],
    offer: false
  },
  {
    id: 26,
    name: "Botellas de Hidratación Premium Lululemon",
    description: "Botellas de Hidratacion Premium Lululemon con gran capacidad, estilo moderno y diseno practico para mantener tus bebidas a la mano. La imagen muestra una botella rosa de cuerpo alto, tapa deportiva, asa lateral y correa con logotipo, ideal para gimnasio, trabajo, viajes y actividades diarias.",
    price: null,
    originalPrice: null,
    category: "Hogar",
    images: [
      { src: "img/catalogo/optimized/catalago99.jpg", width: 881, height: 1785 }
    ],
    offer: false
  }
];
