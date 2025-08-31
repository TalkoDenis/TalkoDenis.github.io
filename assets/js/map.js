document.addEventListener("DOMContentLoaded", () => {
    // Создаём карту
    const map = L.map("map").setView([20, 0], 2); // старт: центр Земли, зум 2

    // Добавляем слой карты (OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap contributors"
    }).addTo(map);

    // Загружаем JSON с точками
    fetch("TalkoDenis.github.io/assets/data/points.json")
        .then(response => response.json())
        .then(points => {
            points.forEach(point => {
                const color = point.type === "city" ? "blue" : "green";

                // Кастомная иконка
                const markerIcon = L.icon({
                    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
                    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41]
                });

                L.marker([point.lat, point.lng], { icon: markerIcon })
                    .addTo(map)
                    .bindPopup(`<b>${point.name}</b>`);
            });
        })
        .catch(err => console.error("Ошибка загрузки JSON:", err));
});
