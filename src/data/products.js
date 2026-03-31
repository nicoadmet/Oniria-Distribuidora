const products = [
  { id: 1, category: "AGUA MINERAL", name: "Agua Asunción Bidón 5L", unitPrice: 2400, packPrice: 2200, unitsPerPack: 4 },
  { id: 2, category: "AGUA MINERAL", name: "Agua Bonaqua 500ml", unitPrice: 1399, packPrice: 1200, unitsPerPack: 12 },
  { id: 3, category: "ALMACEN", name: "Aceite de oliva 500ml", unitPrice: 4900, packPrice: 4800, unitsPerPack: 6 },
  { id: 4, category: "ALMACEN", name: "Oreo rellena", unitPrice: 4900, packPrice: 4800, unitsPerPack: 36 },
  { id: 5, category: "VODKA", name: "Smirnoff Regular 500ml", unitPrice: 4900, packPrice: 4800, unitsPerPack: 6 },
  { id: 6, category: "VODKA", name: "Sky Regular 500ml", unitPrice: 4900, packPrice: 4800, unitsPerPack: 6 },
  { id: 7, category: "VODKA", name: "Sky Saborizado 500ml", unitPrice: 4900, packPrice: 4800, unitsPerPack: 6 },
  
  // GASEOSAS
  { id: 8, category: "GASEOSAS", name: "Coca Cola Original 2.25L", unitPrice: 2800, packPrice: 2600, unitsPerPack: 6 },
  { id: 9, category: "GASEOSAS", name: "Sprite Lima Limón 2.25L", unitPrice: 2700, packPrice: 2500, unitsPerPack: 6 },
  { id: 10, category: "GASEOSAS", name: "Paso de los Toros Pomelo 1.5L", unitPrice: 1900, packPrice: 1750, unitsPerPack: 6 },
  { id: 11, category: "GASEOSAS", name: "Schweppes Tonic 1.5L", unitPrice: 2100, packPrice: 1950, unitsPerPack: 6 },

  // CERVEZAS
  { id: 12, category: "CERVEZAS", name: "Cerveza Stella Artois 710ml", unitPrice: 3200, packPrice: 2900, unitsPerPack: 6 },
  { id: 13, category: "CERVEZAS", name: "Cerveza Corona Extra 330ml", unitPrice: 1800, packPrice: 1600, unitsPerPack: 24 },
  { id: 14, category: "CERVEZAS", name: "Cerveza Patagonia IPA 473ml", unitPrice: 2500, packPrice: 2300, unitsPerPack: 24 },
  { id: 15, category: "CERVEZAS", name: "Cerveza Quilmes Clásica 1L", unitPrice: 2200, packPrice: 2000, unitsPerPack: 6 },
  { id: 16, category: "CERVEZAS", name: "Cerveza Heineken Lata 473ml", unitPrice: 2400, packPrice: 2150, unitsPerPack: 24 },

  // VINOS
  { id: 17, category: "VINOS", name: "Vino Malbec Alamos 750ml", unitPrice: 7500, packPrice: 7100, unitsPerPack: 6 },
  { id: 18, category: "VINOS", name: "Vino Cabernet Rutini 750ml", unitPrice: 15400, packPrice: 14800, unitsPerPack: 6 },
  { id: 19, category: "VINOS", name: "Vino Blanco Chardonnay Santa Julia", unitPrice: 5200, packPrice: 4900, unitsPerPack: 6 },
  { id: 20, category: "VINOS", name: "Espumante Chandon Extra Brut", unitPrice: 9800, packPrice: 9200, unitsPerPack: 6 },

  // ENERGIZANTES
  { id: 21, category: "ENERGIZANTES", name: "Red Bull Energy Drink 250ml", unitPrice: 1950, packPrice: 1800, unitsPerPack: 24 },
  { id: 22, category: "ENERGIZANTES", name: "Monster Energy Green 473ml", unitPrice: 2100, packPrice: 1900, unitsPerPack: 12 },
  { id: 23, category: "ENERGIZANTES", name: "Speed Unlimited 250ml", unitPrice: 1400, packPrice: 1250, unitsPerPack: 24 },

  // DESTILADOS
  { id: 24, category: "DESTILADOS", name: "Fernet Branca 750ml", unitPrice: 8900, packPrice: 8500, unitsPerPack: 6 },
  { id: 25, category: "DESTILADOS", name: "Gin Brighton 700ml", unitPrice: 6500, packPrice: 6100, unitsPerPack: 6 },
  { id: 26, category: "DESTILADOS", name: "Gin Bombay Sapphire 750ml", unitPrice: 22000, packPrice: 21000, unitsPerPack: 6 },
  { id: 27, category: "DESTILADOS", name: "Whisky Johnnie Walker Red Label", unitPrice: 18500, packPrice: 17800, unitsPerPack: 6 },
  { id: 28, category: "DESTILADOS", name: "Aperol 750ml", unitPrice: 5800, packPrice: 5400, unitsPerPack: 6 },
  { id: 29, category: "DESTILADOS", name: "Campari 750ml", unitPrice: 6200, packPrice: 5800, unitsPerPack: 6 },

  // BEBIDAS SIN ALCOHOL
  { id: 30, category: "BEBIDAS SIN ALCOHOL", name: "Gatorade Blue Bolt 500ml", unitPrice: 1700, packPrice: 1550, unitsPerPack: 6 },
  { id: 31, category: "BEBIDAS SIN ALCOHOL", name: "Jugo Cepita Naranja 1L", unitPrice: 1850, packPrice: 1700, unitsPerPack: 8 },
  
  // LACTEOS
  { id: 32, category: "LACTEOS", name: "Leche La Serenísima Entera 1L", unitPrice: 1600, packPrice: 1450, unitsPerPack: 10 },
  { id: 33, category: "LACTEOS", name: "Yogur Ser Frutilla 200g", unitPrice: 950, packPrice: 850, unitsPerPack: 12 },
  { id: 34, category: "LACTEOS", name: "Queso Cremoso 500g", unitPrice: 4200, packPrice: 4000, unitsPerPack: 2 },

  // PANIFICADOS
  { id: 35, category: "PANIFICADOS", name: "Pan Lactal Bimbo 600g", unitPrice: 2500, packPrice: 2300, unitsPerPack: 5 },
  { id: 36, category: "PANIFICADOS", name: "Facturas surtidas (6u)", unitPrice: 3200, packPrice: 3000, unitsPerPack: 1 },

  // SNACKS
  { id: 37, category: "SNACKS", name: "Papas Lays Clásicas 145g", unitPrice: 1800, packPrice: 1650, unitsPerPack: 12 },
  { id: 38, category: "SNACKS", name: "Doritos Queso 145g", unitPrice: 1900, packPrice: 1700, unitsPerPack: 12 },
  { id: 39, category: "SNACKS", name: "Maní con sal 200g", unitPrice: 1200, packPrice: 1100, unitsPerPack: 10 },

  // CARNES Y EMBUTIDOS
  { id: 40, category: "CARNES", name: "Carne Molida 1kg", unitPrice: 6500, packPrice: 6200, unitsPerPack: 1 },
  { id: 41, category: "CARNES", name: "Pechuga de Pollo 1kg", unitPrice: 5800, packPrice: 5500, unitsPerPack: 1 },
  { id: 42, category: "EMBUTIDOS", name: "Salchichas Vienísimas 6u", unitPrice: 2100, packPrice: 1950, unitsPerPack: 12 },
  { id: 43, category: "EMBUTIDOS", name: "Jamón Cocido 200g", unitPrice: 2800, packPrice: 2600, unitsPerPack: 5 },

  // FRUTAS Y VERDURAS
  { id: 44, category: "FRUTAS", name: "Banana Ecuador 1kg", unitPrice: 2200, packPrice: 2000, unitsPerPack: 18 },
  { id: 45, category: "FRUTAS", name: "Manzana Roja 1kg", unitPrice: 2500, packPrice: 2300, unitsPerPack: 15 },
  { id: 46, category: "VERDURAS", name: "Tomate Redondo 1kg", unitPrice: 1800, packPrice: 1650, unitsPerPack: 15 },
  { id: 47, category: "VERDURAS", name: "Papa Negra 1kg", unitPrice: 1200, packPrice: 1100, unitsPerPack: 20 },

  // LIMPIEZA
  { id: 48, category: "LIMPIEZA", name: "Detergente Magistral 500ml", unitPrice: 1700, packPrice: 1550, unitsPerPack: 12 },
  { id: 49, category: "LIMPIEZA", name: "Lavandina Ayudín 1L", unitPrice: 1300, packPrice: 1150, unitsPerPack: 12 },
  { id: 50, category: "LIMPIEZA", name: "Jabón en polvo Ariel 800g", unitPrice: 3200, packPrice: 3000, unitsPerPack: 10 },

  // PERFUMERÍA
  { id: 51, category: "PERFUMERÍA", name: "Shampoo Pantene 400ml", unitPrice: 3500, packPrice: 3300, unitsPerPack: 6 },
  { id: 52, category: "PERFUMERÍA", name: "Desodorante Rexona Men 150ml", unitPrice: 2100, packPrice: 1950, unitsPerPack: 12 },
  { id: 53, category: "PERFUMERÍA", name: "Pasta Dental Colgate 90g", unitPrice: 1200, packPrice: 1100, unitsPerPack: 12 },

  // CONGELADOS
  { id: 54, category: "CONGELADOS", name: "Pizza congelada Muzza 500g", unitPrice: 3500, packPrice: 3300, unitsPerPack: 10 },
  { id: 55, category: "CONGELADOS", name: "Hamburguesas Paty 4u", unitPrice: 2800, packPrice: 2600, unitsPerPack: 12 },
  { id: 56, category: "CONGELADOS", name: "Helado Grido 1kg", unitPrice: 4200, packPrice: 3900, unitsPerPack: 1 },

  // CAFÉ Y TÉ
  { id: 57, category: "CAFÉ", name: "Café Cabrales Molido 500g", unitPrice: 5200, packPrice: 4900, unitsPerPack: 10 },
  { id: 58, category: "CAFÉ", name: "Café Nescafé Instantáneo 170g", unitPrice: 4800, packPrice: 4500, unitsPerPack: 12 },
  { id: 59, category: "TÉ", name: "Té Taragüi 25 saquitos", unitPrice: 1500, packPrice: 1350, unitsPerPack: 10 },

  // BEBIDAS VARIAS
  { id: 60, category: "BEBIDAS SIN ALCOHOL", name: "Agua saborizada Levité Pomelo 1.5L", unitPrice: 1900, packPrice: 1750, unitsPerPack: 6 },
  { id: 61, category: "BEBIDAS SIN ALCOHOL", name: "Cepita Multifruta 1L", unitPrice: 1850, packPrice: 1700, unitsPerPack: 8 },
  { id: 62, category: "ENERGIZANTES", name: "Rockstar Energy 473ml", unitPrice: 2100, packPrice: 1900, unitsPerPack: 12 }
];

export default products;