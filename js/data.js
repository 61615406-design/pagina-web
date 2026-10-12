const DESTINOS = [
  { id: "cusco", nombre: "Cusco", region: "Sierra", lugar: "Cusco", rating: 4.9, precio: 450, duracion: "3-4", imagen: "img/cusco.jpg", desc: "Capital histórica del Imperio Inca, con plazas coloniales, templos andinos y acceso al Valle Sagrado." },
  { id: "arequipa", nombre: "Arequipa", region: "Sierra", lugar: "Arequipa", rating: 4.8, precio: 320, duracion: "3-4", imagen: "img/iglesia.jpg", desc: "La Ciudad Blanca, al pie del Misti, famosa por su sillar, gastronomía y casonas virreinales." },
  { id: "puno", nombre: "Puno", region: "Sierra", lugar: "Lago Titicaca", rating: 4.7, precio: 280, duracion: "3-4", imagen: "img/puno.jpg", desc: "Puerta al Titicaca y a las islas flotantes de los Uros, con cultura viva aimara y quechua." },
  { id: "iquitos", nombre: "Iquitos", region: "Selva", lugar: "Loreto", rating: 4.6, precio: 520, duracion: "3-4", imagen: "img/rio.jpg", desc: "La ciudad más grande de la Amazonía peruana, punto de partida para lodges y cruises fluviales." },
  { id: "machu-picchu", nombre: "Machu Picchu", region: "Sierra", lugar: "Cusco", rating: 5.0, precio: 690, duracion: "3-4", imagen: "img/machu.jpg", desc: "Ciudadela inca entre nubes, una de las maravillas del mundo y el ícono del turismo peruano." },
  { id: "colca", nombre: "Valle del Colca", region: "Sierra", lugar: "Arequipa", rating: 4.8, precio: 410, duracion: "3-4", imagen: "img/colca.jpg", desc: "Cañón profundo, andenes preincaicos y el vuelo del cóndor andino al amanecer." },
  { id: "tarapoto", nombre: "Tarapoto", region: "Selva", lugar: "San Martin", rating: 4.6, precio: 340, duracion: "3-4", imagen: "img/tarapoto.jpg", desc: "Cataratas, cacao y un clima cálido en la selva alta de San Martín." },
  { id: "huaraz", nombre: "Huaraz", region: "Sierra", lugar: "Ancash", rating: 4.7, precio: 360, duracion: "3-4", imagen: "img/huaraz.jpg", desc: "Capital del trekking peruano, con lagunas turquesa y la Cordillera Blanca." },
  { id: "manu", nombre: "Manu", region: "Selva", lugar: "Madre de Dios", rating: 4.9, precio: 780, duracion: "3-4", imagen: "img/manu.jpg", desc: "Una de las reservas de biosfera más biodiversas del planeta, entre Andes y Amazonía." },
  { id: "valle-sagrado", nombre: "Valle Sagrado", region: "Sierra", lugar: "Cusco", rating: 4.8, precio: 390, duracion: "3-4", imagen: "img/valle.jpg", desc: "Pisac, Ollantaytambo y pueblos agrícolas junto al río Urubamba." },
  { id: "ollantaytambo", nombre: "Ollantaytambo", region: "Sierra", lugar: "Cusco", rating: 4.7, precio: 310, duracion: "3-4", imagen: "img/machu.jpg", desc: "Fortaleza inca y pueblo vivo, estación clave rumbo a Machu Picchu." },
  { id: "chachapoyas", nombre: "Chachapoyas", region: "Sierra", lugar: "Amazonas", rating: 4.6, precio: 430, duracion: "3-4", imagen: "img/andes.jpg", desc: "Gocta, Kuelap y la cultura de las nubes en el norte andino-amazónico." },
  { id: "puerto-maldonado", nombre: "Puerto Maldonado", region: "Selva", lugar: "Madre de Dios", rating: 4.7, precio: 560, duracion: "3-4", imagen: "img/amazonas.jpg", desc: "Selva sur con lodges, colpas de guacamayos y el lago Sandoval." },
  { id: "oxapampa", nombre: "Oxapampa", region: "Selva", lugar: "Pasco", rating: 4.5, precio: 290, duracion: "3-4", imagen: "img/selva.jpg", desc: "Selva central de herencia austro-alemana, café, orquídeas y bosques de neblina." },
  { id: "cajamarca", nombre: "Cajamarca", region: "Sierra", lugar: "Cajamarca", rating: 4.6, precio: 270, duracion: "3-4", imagen: "img/andes.jpg", desc: "Baños del Inca, campos verdes y el escenario de la captura de Atahualpa." },
  { id: "ayacucho", nombre: "Ayacucho", region: "Sierra", lugar: "Ayacucho", rating: 4.5, precio: 250, duracion: "3-4", imagen: "img/iglesia.jpg", desc: "Iglesias coloniales, artesanía y Semana Santa, en el corazón de los Andes." },
  { id: "huancayo", nombre: "Huancayo", region: "Sierra", lugar: "Junín", rating: 4.4, precio: 230, duracion: "3-4", imagen: "img/valle.jpg", desc: "Valle del Mantaro, ferias dominicales y tren hacia los Andes centrales." },
  { id: "pucallpa", nombre: "Pucallpa", region: "Selva", lugar: "Ucayali", rating: 4.5, precio: 380, duracion: "3-4", imagen: "img/rio.jpg", desc: "Puerto amazónico sobre el Ucayali, arte shipibo y lagunas cercanas." },
  { id: "moyobamba", nombre: "Moyobamba", region: "Selva", lugar: "San Martin", rating: 4.6, precio: 300, duracion: "3-4", imagen: "img/selva.jpg", desc: "Ciudad de las orquídeas, aguajales y un ritmo relajado de selva alta." },
  { id: "tingo-maria", nombre: "Tingo María", region: "Selva", lugar: "Huánuco", rating: 4.5, precio: 275, duracion: "3-4", imagen: "img/iquitos.jpg", desc: "La Bella Durmiente, cueva de las lechuzas y selva de transición." },
  { id: "maras", nombre: "Maras y Moray", region: "Sierra", lugar: "Cusco", rating: 4.7, precio: 265, duracion: "3-4", imagen: "img/colca.jpg", desc: "Salineras ancestrales y laboratorios agrícolas incas en terrazas circulares." },
  { id: "ausangate", nombre: "Ausangate", region: "Sierra", lugar: "Cusco", rating: 4.9, precio: 620, duracion: "3-4", imagen: "img/huaraz.jpg", desc: "Nevado sagrado, lagunas y la Montaña de Siete Colores." },
  { id: "kuelap", nombre: "Kuelap", region: "Sierra", lugar: "Amazonas", rating: 4.8, precio: 470, duracion: "3-4", imagen: "img/valle.jpg", desc: "Fortaleza de los Chachapoyas sobre un espolón de montaña, accesible en teleférico." },
  { id: "tambopata", nombre: "Tambopata", region: "Selva", lugar: "Madre de Dios", rating: 4.8, precio: 640, duracion: "3-4", imagen: "img/manu.jpg", desc: "Refugio de nutria gigante, caimanes y una de las mayores biodiversidades del Perú." },
  { id: "lima", nombre: "Lima", region: "Costa", lugar: "Lima", rating: 4.6, precio: 210, duracion: "1-2", imagen: "img/plaza.jpg", desc: "Capital gastronómica de América, con malecón, museos y barrios coloniales." },
  { id: "paracas", nombre: "Paracas", region: "Costa", lugar: "Ica", rating: 4.7, precio: 240, duracion: "1-2", imagen: "img/costa.jpg", desc: "Reserva marina, Islas Ballestas y desierto frente al Pacífico." },
  { id: "mancora", nombre: "Máncora", region: "Costa", lugar: "Piura", rating: 4.5, precio: 390, duracion: "5-7", imagen: "img/costa.jpg", desc: "Sol, surf y vida nocturna en el norte peruano." },
  { id: "trujillo", nombre: "Trujillo", region: "Costa", lugar: "La Libertad", rating: 4.6, precio: 260, duracion: "3-4", imagen: "img/arequipa.jpg", desc: "Chan Chan, Huacas del Sol y de la Luna y caballos de paso." },
  { id: "nazca", nombre: "Nazca", region: "Costa", lugar: "Ica", rating: 4.5, precio: 310, duracion: "1-2", imagen: "img/plaza.jpg", desc: "Líneas milenarias visibles desde el aire en el desierto de Ica." },
  { id: "huacachina", nombre: "Huacachina", region: "Costa", lugar: "Ica", rating: 4.7, precio: 220, duracion: "1-2", imagen: "img/costa.jpg", desc: "Oasis entre dunas, tubulares y atardeceres en el desierto." },
  { id: "salkantay", nombre: "Salkantay", region: "Sierra", lugar: "Cusco", rating: 4.9, precio: 850, duracion: "5-7", imagen: "img/colca.jpg", desc: "Trekking de varios días hacia Machu Picchu por nevados y selva de ceja." },
  { id: "inca-trail", nombre: "Camino Inca", region: "Sierra", lugar: "Cusco", rating: 5.0, precio: 1200, duracion: "5-7", imagen: "img/machu.jpg", desc: "La ruta clásica de cuatro días hasta la Puerta del Sol." }
];

const PAQUETES = [
  { id: "andes-clasico", nombre: "Andes clásico", noches: 6, precio: 1890, incluye: ["Cusco", "Valle Sagrado", "Machu Picchu"], img: "img/machu.jpg" },
  { id: "sur-andino", nombre: "Sur andino", noches: 8, precio: 2140, incluye: ["Arequipa", "Colca", "Puno", "Cusco"], img: "img/colca.jpg" },
  { id: "amazonia", nombre: "Inmersión amazónica", noches: 5, precio: 1650, incluye: ["Iquitos o Tambopata", "Lodge", "Guía naturalista"], img: "img/manu.jpg" },
  { id: "costa-norte", nombre: "Sol del norte", noches: 7, precio: 1420, incluye: ["Trujillo", "Máncora", "Playas"], img: "img/costa.jpg" },
  { id: "aventura-blanca", nombre: "Cordillera Blanca", noches: 4, precio: 980, incluye: ["Huaraz", "Laguna 69", "Trekking"], img: "img/andes.jpg" },
  { id: "luna-de-miel", nombre: "Luna de miel andina", noches: 7, precio: 2590, incluye: ["Cusco", "Lodge de lujo", "Tren Vistadome"], img: "img/cusco.jpg" }
];

const BLOG = [
  { titulo: "Cuándo viajar a Machu Picchu", fecha: "12 mar 2026", extra: "Clima, tickets y temporada alta.", img: "img/machu.jpg" },
  { titulo: "Guía breve del Titicaca", fecha: "28 feb 2026", extra: "Uros, Taquile y cómo llegar desde Puno.", img: "img/puno.jpg" },
  { titulo: "Selva con responsabilidad", fecha: "04 feb 2026", extra: "Lodges, permisos y avistamiento ético.", img: "img/manu.jpg" }
];
