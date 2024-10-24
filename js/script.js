// Inicializa o mapa usando a biblioteca Leaflet
var map = L.map('map-container').setView([-23.48868346183903, -46.581396313230535], 16); // Coordenadas de São Paulo, por exemplo

// Adiciona as camadas do mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Mapa do nosso amor 💗'
}).addTo(map);

// Adiciona marcadores para locais especiais


L.marker([-23.478670698312662, -46.610144265305756]).addTo(map)
    .bindPopup('<div style="text-align: center;">Trimais Supermercado<br>Nosso MELHOR rolê 🛍️</div>')
    .openPopup();

L.marker([-23.489428260530946, -46.58876727033773]).addTo(map)
    .bindPopup('Sua casinha, meu segundo lar 🤍')
    .openPopup();

L.marker([-23.48868346183903, -46.581396313230535]).addTo(map)
    .bindPopup('Minha casinha, meu primeiro lar 🤍')
    .openPopup();

L.marker([-23.48136113809919, -46.578706743772486]).addTo(map)
    .bindPopup(
        '<div style="text-align: center;">Paróquia Nossa Senhora Da Livração<br>Nosso primeiro SHURIS ❤️‍🔥✝️</div>')
    .openPopup();

L.marker([-23.48790815981001, -46.58263319431827]).addTo(map)
    .bindPopup(
        '<div style="text-align: center;">Paróquia Nossa Senhora De Loreto<br>Lugar onde nos conheçemos! 💗</div>')
    .openPopup();
