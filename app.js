const coin = document.getElementById('coin');
const balanceDisplay = document.getElementById('balance');
const energyBar = document.getElementById('energy-bar');
let balance = 1000; // начальный баланс
let energy = 100; // начальная энергия

coin.addEventListener('click', () => {
    balance += 1; // увеличиваем баланс на 1
    energy -= 10; // уменьшаем энергию на 10 (пример)

    if (energy < 0) {
        energy = 0; // гарантируем, что энергия не станет отрицательной
    }

    updateUI(); // обновляем интерфейс
});

function updateUI() {
    balanceDisplay.textContent = `Balance: ${balance}`; // обновляем отображение баланса
    energyBar.style.width = `${energy}%`; // обновляем шкалу энергии
}
