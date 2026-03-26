const products = [
  {
    id: 1,
    category: "AGUA MINERAL",
    name: "Agua Asunción Bidón 5L",
    unitPrice: 2400,
    packPrice: 2200
  },
  {
    id: 2,
    category: "AGUA MINERAL",
    name: "Agua Bonaqua 500ml",
    unitPrice: 1399,
    packPrice: 1200
  },
  {
    id: 3,
    category: "ALMACEN",
    name: "Aceite de oliva 500ml",
    unitPrice: 4900,
    packPrice: 4800
  },
  {
    id: 4,
    category: "ALMACEN",
    name: "Oreo rellena",
    unitPrice: 4900,
    packPrice: 4800
  },
  {
    id: 5,
    category: "VODKA",
    name: "Smirnoff Regular 500ml",
    unitPrice: 4900,
    packPrice: 4800
  },
  {
    id: 6,
    category: "VODKA",
    name: "Sky Regular 500ml",
    unitPrice: 4900,
    packPrice: 4800
  },
  {
    id: 7,
    category: "VODKA",
    name: "Sky Saborizado 500ml",
    unitPrice: 4900,
    packPrice: 4800
  },
  // GASEOSAS
  { id: 8, category: "GASEOSAS", name: "Coca Cola Original 2.25L", unitPrice: 2800, packPrice: 2600 },
  { id: 9, category: "GASEOSAS", name: "Sprite Lima Limón 2.25L", unitPrice: 2700, packPrice: 2500 },
  { id: 10, category: "GASEOSAS", name: "Paso de los Toros Pomelo 1.5L", unitPrice: 1900, packPrice: 1750 },
  { id: 11, category: "GASEOSAS", name: "Schweppes Tonic 1.5L", unitPrice: 2100, packPrice: 1950 },

  // CERVEZAS
  { id: 12, category: "CERVEZAS", name: "Cerveza Stella Artois 710ml", unitPrice: 3200, packPrice: 2900 },
  { id: 13, category: "CERVEZAS", name: "Cerveza Corona Extra 330ml", unitPrice: 1800, packPrice: 1600 },
  { id: 14, category: "CERVEZAS", name: "Cerveza Patagonia IPA 473ml", unitPrice: 2500, packPrice: 2300 },
  { id: 15, category: "CERVEZAS", name: "Cerveza Quilmes Clásica 1L", unitPrice: 2200, packPrice: 2000 },
  { id: 16, category: "CERVEZAS", name: "Cerveza Heineken Lata 473ml", unitPrice: 2400, packPrice: 2150 },

  // VINOS
  { id: 17, category: "VINOS", name: "Vino Malbec Alamos 750ml", unitPrice: 7500, packPrice: 7100 },
  { id: 18, category: "VINOS", name: "Vino Cabernet Rutini 750ml", unitPrice: 15400, packPrice: 14800 },
  { id: 19, category: "VINOS", name: "Vino Blanco Chardonnay Santa Julia", unitPrice: 5200, packPrice: 4900 },
  { id: 20, category: "VINOS", name: "Espumante Chandon Extra Brut", unitPrice: 9800, packPrice: 9200 },

  // ENERGIZANTES
  { id: 21, category: "ENERGIZANTES", name: "Red Bull Energy Drink 250ml", unitPrice: 1950, packPrice: 1800 },
  { id: 22, category: "ENERGIZANTES", name: "Monster Energy Green 473ml", unitPrice: 2100, packPrice: 1900 },
  { id: 23, category: "ENERGIZANTES", name: "Speed Unlimited 250ml", unitPrice: 1400, packPrice: 1250 },

  // DESTILADOS (Fernet, Gin, Whisky)
  { id: 24, category: "DESTILADOS", name: "Fernet Branca 750ml", unitPrice: 8900, packPrice: 8500 },
  { id: 25, category: "DESTILADOS", name: "Gin Brighton 700ml", unitPrice: 6500, packPrice: 6100 },
  { id: 26, category: "DESTILADOS", name: "Gin Bombay Sapphire 750ml", unitPrice: 22000, packPrice: 21000 },
  { id: 27, category: "DESTILADOS", name: "Whisky Johnnie Walker Red Label", unitPrice: 18500, packPrice: 17800 },
  { id: 28, category: "DESTILADOS", name: "Aperol 750ml", unitPrice: 5800, packPrice: 5400 },
  { id: 29, category: "DESTILADOS", name: "Campari 750ml", unitPrice: 6200, packPrice: 5800 },

  // JUGOS E ISOTÓNICOS
  { id: 30, category: "BEBIDAS SIN ALCOHOL", name: "Gatorade Blue Bolt 500ml", unitPrice: 1700, packPrice: 1550 },
  { id: 31, category: "BEBIDAS SIN ALCOHOL", name: "Jugo Cepita Naranja 1L", unitPrice: 1850, packPrice: 1700 },
  // LACTEOS
  { id: 32, category: "LACTEOS", name: "Leche La Serenísima Entera 1L", unitPrice: 1600, packPrice: 1450 },
  { id: 33, category: "LACTEOS", name: "Yogur Ser Frutilla 200g", unitPrice: 950, packPrice: 850 },
  { id: 34, category: "LACTEOS", name: "Queso Cremoso 500g", unitPrice: 4200, packPrice: 4000 },

  // PANIFICADOS
  { id: 35, category: "PANIFICADOS", name: "Pan Lactal Bimbo 600g", unitPrice: 2500, packPrice: 2300 },
  { id: 36, category: "PANIFICADOS", name: "Facturas surtidas (6u)", unitPrice: 3200, packPrice: 3000 },

  // SNACKS
  { id: 37, category: "SNACKS", name: "Papas Lays Clásicas 145g", unitPrice: 1800, packPrice: 1650 },
  { id: 38, category: "SNACKS", name: "Doritos Queso 145g", unitPrice: 1900, packPrice: 1700 },
  { id: 39, category: "SNACKS", name: "Maní con sal 200g", unitPrice: 1200, packPrice: 1100 },

  // CARNES Y EMBUTIDOS
  { id: 40, category: "CARNES", name: "Carne Molida 1kg", unitPrice: 6500, packPrice: 6200 },
  { id: 41, category: "CARNES", name: "Pechuga de Pollo 1kg", unitPrice: 5800, packPrice: 5500 },
  { id: 42, category: "EMBUTIDOS", name: "Salchichas Vienísimas 6u", unitPrice: 2100, packPrice: 1950 },
  { id: 43, category: "EMBUTIDOS", name: "Jamón Cocido 200g", unitPrice: 2800, packPrice: 2600 },

  // FRUTAS Y VERDURAS
  { id: 44, category: "FRUTAS", name: "Banana Ecuador 1kg", unitPrice: 2200, packPrice: 2000 },
  { id: 45, category: "FRUTAS", name: "Manzana Roja 1kg", unitPrice: 2500, packPrice: 2300 },
  { id: 46, category: "VERDURAS", name: "Tomate Redondo 1kg", unitPrice: 1800, packPrice: 1650 },
  { id: 47, category: "VERDURAS", name: "Papa Negra 1kg", unitPrice: 1200, packPrice: 1100 },

  // LIMPIEZA
  { id: 48, category: "LIMPIEZA", name: "Detergente Magistral 500ml", unitPrice: 1700, packPrice: 1550 },
  { id: 49, category: "LIMPIEZA", name: "Lavandina Ayudín 1L", unitPrice: 1300, packPrice: 1150 },
  { id: 50, category: "LIMPIEZA", name: "Jabón en polvo Ariel 800g", unitPrice: 3200, packPrice: 3000 },

  // PERFUMERÍA
  { id: 51, category: "PERFUMERÍA", name: "Shampoo Pantene 400ml", unitPrice: 3500, packPrice: 3300 },
  { id: 52, category: "PERFUMERÍA", name: "Desodorante Rexona Men 150ml", unitPrice: 2100, packPrice: 1950 },
  { id: 53, category: "PERFUMERÍA", name: "Pasta Dental Colgate 90g", unitPrice: 1200, packPrice: 1100 },

  // CONGELADOS
  { id: 54, category: "CONGELADOS", name: "Pizza congelada Muzza 500g", unitPrice: 3500, packPrice: 3300 },
  { id: 55, category: "CONGELADOS", name: "Hamburguesas Paty 4u", unitPrice: 2800, packPrice: 2600 },
  { id: 56, category: "CONGELADOS", name: "Helado Grido 1kg", unitPrice: 4200, packPrice: 3900 },

  // CAFÉ Y TÉ
  { id: 57, category: "CAFÉ", name: "Café Cabrales Molido 500g", unitPrice: 5200, packPrice: 4900 },
  { id: 58, category: "CAFÉ", name: "Café Nescafé Instantáneo 170g", unitPrice: 4800, packPrice: 4500 },
  { id: 59, category: "TÉ", name: "Té Taragüi 25 saquitos", unitPrice: 1500, packPrice: 1350 },

  // BEBIDAS VARIAS
  { id: 60, category: "BEBIDAS SIN ALCOHOL", name: "Agua saborizada Levité Pomelo 1.5L", unitPrice: 1900, packPrice: 1750 },
  { id: 61, category: "BEBIDAS SIN ALCOHOL", name: "Cepita Multifruta 1L", unitPrice: 1850, packPrice: 1700 },
  { id: 62, category: "ENERGIZANTES", name: "Rockstar Energy 473ml", unitPrice: 2100, packPrice: 1900 }

];

export default products