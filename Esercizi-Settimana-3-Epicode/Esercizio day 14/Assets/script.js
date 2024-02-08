const pesca = document.getElementById('pesca');
const btnPesca = document.getElementById('pesca');
const estratti = [];

function open() {
    generaGriglia()
}

window.addEventListener('load', generaGriglia);

function generaGriglia() {
    var gridContainer = document.getElementById("tabella");
    for (var i = 1; i <= 100; i++) {
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";
        gridItem.classList.add('caselle');
        gridItem.textContent = i;
        gridContainer.appendChild(gridItem);
    }
}

btnPesca.addEventListener('click', function() {
    estrai();
});

function estrai() {
    let estratto = Math.floor((Math.random() * 100) + 1);
    if (estratti.includes(estratto)) {
        estrai();
    } else {
        document.getElementById('estratto').innerText = `Numero estratto: ${estratto}`;
        estratti.push(estratto);
        colora(estratto);
    }
}

function colora(estratto) {
    const tabellone = document.querySelectorAll('.caselle');
    for (let i = 0; i < tabellone.length; i++) {
        if (parseInt(tabellone[i].innerText) === estratto) {
            tabellone[i].classList.add('estratto');
        }
    }
}