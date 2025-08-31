document.addEventListener("DOMContentLoaded", () => {

    const mapContainer = document.getElementById("map");
    if (!mapContainer._leaflet_id) {

        const map = L.map("map").setView([20, 0], 2);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: "© OpenStreetMap contributors"
        }).addTo(map);

        fetch("/assets/data/points.json")
            .then(res => res.json())
            .then(points => {
                points.forEach(p => {
                    if (typeof p.lat === 'number' && typeof p.lng === 'number') {
                        const iconUrl = p.type === "city"
                            ? "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png"
                            : "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png";

                        L.marker([p.lat, p.lng], {
                            icon: L.icon({
                                iconUrl,
                                shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
                                iconSize: [25, 41],
                                iconAnchor: [12, 41],
                                popupAnchor: [1, -34],
                                shadowSize: [41, 41]
                            })
                        }).addTo(map)
                            .bindPopup(`<b>${p.name}</b>`);
                    } else {
                        console.warn(`Пропущен объект с некорректными координатами: ${p.name}`);
                    }
                });
            })
            .catch(err => console.error("Cannot load JSON:", err));
    }

});

