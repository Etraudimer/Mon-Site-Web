document.addEventListener("DOMContentLoaded", function() {
    // Initialiser la carte interactive
    var mapElement = document.getElementById('map');
    if (mapElement) {
        var map = L.map(mapElement).setView([43.6411, 5.0966], 17); // Exemple de coordonnées pour Paris

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        var marker = L.marker([43.6411, 5.0966]).addTo(map)
            .bindPopup('Notre Salon de Thé & Institut de Beauté')
            .openPopup();
    }
});