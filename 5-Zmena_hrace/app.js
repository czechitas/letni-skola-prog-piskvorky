"use strict";

var aktualniHrac = "X";

function priKliknutiNaBunku(event) {
    // Nadefinuj prazdnou promennou elementPolicka
    var znackaPolicka;

    // Vloz do znackaPolicka bunku <td> z HTML, na kterou se kliknulo
    znackaPolicka = event.target;

    // Vloz do vnitrku bunky (tedy <td>SEM</td>) text z promenne aktualniHrac
    znackaPolicka.textContent = aktualniHrac;

    // Vymen symbol hrace
    aktualniHrac = "O";
}
