const levelSelect = document.getElementById("level");
const quantityInput = document.getElementById("quantity");
const result = document.getElementById("result");
const button = document.getElementById("calculateBtn");

button.addEventListener("click", calculatePrice);

function calculatePrice() {

    const level = levelSelect.value;
    const quantity = Number(quantityInput.value);

    // Cenu objekts
    const prices = {
        basic: 50,
        intermediate: 80,
        advanced: 120
    };

    // Validācija
    if (level === "") {
        result.textContent = "Lūdzu izvēlies kursa līmeni.";
        result.style.color = "red";
        return;
    }

    if (quantity <= 0 || isNaN(quantity)) {
        result.textContent = "Ievadi derīgu dalībnieku skaitu.";
        result.style.color = "red";
        return;
    }

    let total = prices[level] * quantity;

    // Atlaide, ja vairāk par 5 cilvēkiem
    if (quantity >= 5) {
        total *= 0.9; // 10% atlaide
    }

    result.textContent = `Kopējā cena: ${total.toFixed(2)} €`;
    result.style.color = "green";
}
