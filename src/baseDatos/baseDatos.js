const baseDatos = [
    {
        id: 1,
        title: 'Silla de comedor',
        description: 'Silla para comedor con diseño moderno',
        price: '$159.99',
        image: "https://i.ibb.co/41nbjR5/Silla.png",
        category: 'Muebles',
        subcategory: 'Comedor',
        stock: 10
      },
      {
        id: 2,
        title: 'Mesa de centro',
        description: 'Mesa de centro para sala de estar',
        price: '$259.99',
        image: "https://i.ibb.co/Hx0kw4K/alfombra-lana.png" ,
        category: 'Muebles',
        subcategory: 'Sala',
        stock: 5
      },
      {
        id: 3,
        title: 'Lámpara de techo',
        description: 'Lámpara moderna para iluminación de sala',
        price: '$99.99',
        image: "https://i.ibb.co/fS9yMbb/Lampara-techo.png",
        category: 'Iluminación',
        subcategory: 'Techo',
        stock: 15
      },
      {
        id: 4,
        title: 'Jarrón decorativo',
        description: 'Jarrón decorativo para hogar',
        price: '$49.99',
        image: "https://i.ibb.co/sJVNzpb/Jardin.png",
        category: 'Decoración',
        subcategory: 'Hogar',
        stock: 20
      },
      {
        id: 5,
        title: 'Cortina de baño',
        description: 'Cortina de baño con diseño de hojas',
        price: '$29.99',
        image: "https://i.ibb.co/WkC9H26/Cortina-Ba-o.png",
        category: 'Baño',
        subcategory: 'Cortinas',
        stock: 8
      },
      {
        id: 6,
        title: 'Horno eléctrico',
        description: 'Horno eléctrico con capacidad de 30 litros',
        price: '$7.999',
        image: "https://i.ibb.co/sVdfg8Y/Horno-Electrico.png",
        categoria: 'Electrodomésticos',
        subcategoria: 'Cocina',
        stock: 10
      },
      {
        id: 7,
        
        title: 'Aspiradora robot',
        description: 'Aspiradora robot inteligente para la limpieza del hogar',
        price: '$15.499',
        image: "https://i.ibb.co/tMqF9Xq/Aspiradora.png",
        categoria: 'Electrodomésticos',
        subcategoria: 'Hogar',
        stock: 5
      },
      {
        id: 8,
        title: 'Bonsai artificial',
        description: 'Bonsai artificial con maceta incluida para decorar interiores',
        price: '$3.499',
        image: "https://i.ibb.co/7jVy0Wm/bonsai.png",
        categoria: 'Jardín',
        subcategoria: 'Plantas',
        stock: 20
      },
      {
        id: 9,
        title: 'Sofá de tres plazas',
        description: 'Sofá de tres plazas tapizado en tela y con patas de madera',
        price: '$18.999',
        image: "https://i.ibb.co/hRWK12q/Sofa.png",
        categoria: 'Muebles',
        subcategoria: 'Sala',
        stock: 2
      },
      {
        id: 10,
        title: 'Mesa de comedor extensible',
        description: 'Mesa de comedor extensible para 6 personas en madera maciza',
        price: '$24.999',
        image: "https://i.ibb.co/bs78P22/mesa-extensible.png",
        categoria: 'Muebles',
        subcategoria: 'Comedor',
        stock: 1
      },
      {
        id: 11,
        title: 'Mesa de comedor',
        description: 'Mesa de comedor para 6 personas, de madera maciza y estilo moderno.',
        price: '$599.99',
        image: "https://i.ibb.co/GRN9j1j/Mesa.png",
        category: 'Muebles',
        subcategory: 'Mesa',
        stock: 10
      },
      {
        id: 12,
        title: 'Sofá de tres plazas',
        description: 'Sofá de tres plazas tapizado en tela de alta calidad y con patas de madera.',
        price: '$899.99',
        image: "https://i.ibb.co/hRWK12q/Sofa.png",
        category: 'Muebles',
        subcategory: 'Sofá',
        stock: 5
      },
      {
        id: 13,
        title: 'Alfombra de lana',
        description: 'Alfombra de lana tejida a mano con diseño geométrico y colores cálidos.',
        price: '$199.99',
        image: "https://i.ibb.co/Hx0kw4K/alfombra-lana.png",
        category: 'Decoración',
        subcategory: 'Alfombra',
        stock: 15
      },
      {
        id: 14,
        title: 'Lámpara de pie',
        description: 'Lámpara de pie con pantalla de tela blanca y base de metal plateado.',
        price: '$129.99',
        image: "https://i.ibb.co/Bzx1Gzx/lampara-pie.png",
        category: 'Iluminación',
        subcategory: 'Lámpara de pie',
        stock: 8
      },
      {
        id: 15,
        title: 'Juego de sábanas',
        description: 'Juego de sábanas para cama doble, de algodón 100% y con estampado floral.',
        price: '$79.99',
        image: "https://i.ibb.co/TmbGVgZ/sabanas.png",
        category: 'Ropa de cama',
        subcategory: 'Sábanas',
        stock: 20
      },
      {
        id: 16,
        title: 'Plancha de vapor',
        description: 'Plancha de vapor con suela de cerámica y función de apagado automático',
        price: '$59.99',
        image: "https://i.ibb.co/g3Fk4zg/plancha.png",
        category: 'Electrodomésticos',
        subcategory: 'Hogar',
        stock: 7
      },
      {
        id: 17,
        title: 'Juego de tazas',
        description: 'Juego de 6 tazas de porcelana con diseño de lunares en diferentes colores',
        price: '$29.99',
        image: "https://i.ibb.co/QPQtkQP/tazas.png",
        category: 'Hogar',
        subcategory: 'Vajilla',
        stock: 18
      },
      {
        id: 18,
        title: 'Espejo de pared',
        description: 'Espejo de pared con marco de madera de pino en color natural',
        price: '$89.99',
        image: "https://i.ibb.co/zszt5Sg/Espejo.png",
        category: 'Decoración',
        subcategory: 'Espejo',
        stock: 4
      },
      {
        id: 19,
        title: 'Manta de lana',
        description: 'Manta de lana tejida a mano en tonos grises y blancos',
        price: '$149.99',
        image: "https://i.ibb.co/ZNTMX90/Manta.png",
        category: 'Hogar',
        subcategory: 'Textiles',
        stock: 9
      },
      {
        id: 20,
        title: 'Espejo de pared',
        description: 'Espejo de pared con marco de madera',
        price: '$89.99',
        image: "https://i.ibb.co/Kqzz9Wg/espejo-2.png",
        category: 'Decoración',
        subcategory: 'Espejos',
        stock: 12
      },
      {
        id: 21,
        title: 'Mesa de noche',
        description: 'Mesa de noche con un cajón y puerta',
        price: '$79.99',
        image: "https://i.ibb.co/QDJfFXj/mesa-noche.png",
        category: 'Muebles',
        subcategory: 'Dormitorio',
        stock: 5
      },
      {
        id: 22,
        title: 'Aire acondicionado portátil',
        description: 'Aire acondicionado portátil con control remoto',
        price: '$499.99',
        image: "https://i.ibb.co/x8dGm8N/aire-acond.png",
        category: 'Electrodomésticos',
        subcategory: 'Climatización',
        stock: 7
      },
      {
        id: 23,
        title: 'Set de cuchillos de cocina',
        description: 'Set de 5 cuchillos de cocina con bloque de madera',
        price: '$89.99',
        image: "https://i.ibb.co/Pw89z8w/Set-cuchillos.png",
        category: 'Cocina',
        subcategory: 'Cuchillos',
        stock: 8
      },
      {
        id: 24,
        title: 'Set de toallas',
        description: 'Set de 3 toallas de baño en algodón 100%',
        price: '$49.99',
        image: "https://i.ibb.co/LgxXPCW/toallas.png",
        category: 'Baño',
        subcategory: 'Toallas',
        stock: 15
      }
];

      export default baseDatos;


      