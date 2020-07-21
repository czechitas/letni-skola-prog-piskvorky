"use strict";

var aktualniHrac;

function priKliknutiNaBunku(event) {
    // Nadefinuj prazdnou promennou elementPolicka
    var znackaPolicka;

    // Vloz do znackaPolicka bunku <td> z HTML, na kterou se kliknulo
    znackaPolicka = event.target;

    // Pouze pokud je vnitrni obsah elementPolicka prazdny
    if (znackaPolicka.textContent === "") {
        // Vloz do vnitrku bunky (tedy <td>SEM</td>) text z promenne aktualniHrac
        znackaPolicka.textContent = aktualniHrac;

        // Vymen hodnotu v aktualniHrac
        if (aktualniHrac === "X") {
            aktualniHrac = "O";
        } else {
            aktualniHrac = "X";
        }
    }
}
