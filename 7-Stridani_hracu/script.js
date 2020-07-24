"use strict";

var aktualniHrac;

function priKliknutiNaBunku(event) {
    // Nadefinuj prazdnou promennou bunkaTabulky
    var bunkaTabulky;

    // Vloz do promenne bunkaTabulky prvek <td> z HTML, na ktery se kliklo
    bunkaTabulky = event.target;

    // Vloz do vnitrku bunky (tedy <td>SEM</td>) text z promenne aktualniHrac
    bunkaTabulky.textContent = aktualniHrac;

    // Vymen hodnotu v aktualniHrac
    if (aktualniHrac === "X") {
        aktualniHrac = "O";
    } else {
        aktualniHrac = "X";
    }
}
