document.addEventListener("DOMContentLoaded", () => {
  // Prędkość Voyagera w km/h
  const speedKmH = 61500;

  // Prędkość w km/s
  const speedKmS = speedKmH / 3600; // ≈ 17.08 km/s

  // Zapamiętujemy czas startu
  const startTime = Date.now();

  // Szukamy elementu do wyświetlania
  const distanceElement = document.getElementById("distance");

  // Sprawdzenie czy element istnieje
  if (!distanceElement) {
    console.error("Nie znaleziono elementu #distance");
    return;
  }

  // Funkcja aktualizująca licznik
  function updateDistance() {
    const elapsedSeconds = (Date.now() - startTime) / 1000;
    const distance = speedKmS * elapsedSeconds;
    distanceElement.textContent = distance.toFixed(2);
  }

  // Aktualizacja co 100 ms
  setInterval(updateDistance, 1);
});
