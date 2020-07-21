"use strict";

function priKliknutiNaBunku(event) {
    // Nadefinuj prazdnou promennou elementPolicka
    var znackaPolicka;

    // Vloz do znackaPolicka bunku <td> z HTML, na kterou se kliknulo
    znackaPolicka = event.target;

    // Vloz do vnitrku bunky (tedy <td>SEM</td>) symbol hrace
    znackaPolicka.textContent = "X";
}
