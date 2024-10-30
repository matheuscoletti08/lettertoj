// Inicializa o mapa usando a biblioteca Leaflet
var map = L.map('map-container').setView([-23.48868346183903, -46.581396313230535], 16); // Coordenadas de São Paulo, por exemplo

//relogio bostola 😉
const dataInicial = new Date(2024, 5, 13, 23, 3, 32);
function atualizarContador(){
    const agora = new Date();
    const diferenca = agora - dataInicial;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60 )) / 1000);

    document.getElementById("dias").textContent = dias.toString().padStart(2,"0");
    document.getElementById("horas").textContent = horas.toString().padStart(2,"0");
    document.getElementById("minutos").textContent = minutos.toString().padStart(2,"0");
    document.getElementById("segundos").textContent = segundos.toString().padStart(2,"0");
}
setInterval(atualizarContador, 1000);

//essa porra que faz o modal funcionar
document.querySelectorAll('.fotos a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const imgSrc = this.getAttribute('href');
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `<span class="close">&times;</span><img src="${imgSrc}" alt="Foto">`;
        document.body.appendChild(modal);
    
        modal.querySelector('.close').addEventListener('click', () => {
            modal.remove();
        });
    });
});

// add o mapa memo
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Mapa do nosso amor 💗'
}).addTo(map);

// marcadores para os locais 
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
