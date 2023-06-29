function priKliknutiNaBunku(event) {
    // Nadefinuj prazdnou promennou bunkaTabulky
    let bunkaTabulky

    // Vloz do promenne bunkaTabulky prvek <td> z HTML, na ktery se kliklo
    bunkaTabulky = event.target

    // Vloz do vnitrku bunky (tedy <td>SEM</td>) symbol hrace
    bunkaTabulky.textContent = "X"
}
