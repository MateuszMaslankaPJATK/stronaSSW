function aktualizujCene() {
    let suma = 0;
      const wybrane = document.querySelectorAll('input[type="radio"]:checked');
      wybrane.forEach(input => {
        const cena = parseInt(input.dataset.cena || "0");
        suma += cena;
      });
      document.getElementById("kwota").textContent = suma + " zł";
    }

    document.querySelectorAll('input[type="radio"]').forEach(input => {
      input.addEventListener("change", aktualizujCene);
    });

    aktualizujCene();