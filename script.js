function displayRandomPoem() {
    const poems = [
        "In Tabriz, where the mountains rise,\nThe skies kiss the earth with endless surprise.",
        "Ancient streets with stories untold,\nTabriz's spirit is rich and bold.",
        "The Blue Mosque stands with walls so tall,\nA beacon of history, known by all.",
        "Winds of culture through bazaars blow,\nTabriz, where endless wonders grow."
    ];

    const randomPoem = poems[Math.floor(Math.random() * poems.length)];

    const poemElement = document.createElement('p');
    poemElement.innerText = randomPoem;
    poemElement.classList.add('poem');

    document.getElementById('poem-section').appendChild(poemElement);
}

window.onload = displayRandomPoem;
