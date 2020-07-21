Letní Škola 2020 - Programování
===============================

Piškvorky
=========

Demo aplikace pro výuku JavaScriptu.

Level 1 - Zadání
----------------
Obhlédni si výchozí projekt. Je zde webova stranka `index.html`, vizualni styl `style.css`
a zatim nepouzivany soubor `hra.js`.



Level 2 - Tabulka
-----------------
Priprav si tabulku pro piskvorky. Musi byt alespon 5x5 (muze mit i vetsi pocet sloupcu a radku).
Tabulka v HTML se zapisuje: 

~~~
<table>
  <tr>
    <td>Z</td>
    <td>Z</td>
    <td>Z</td>
  </tr>
  <tr>
    <td>Z</td>
    <td>Z</td>
    <td>Z</td>
  </tr>
  <!-- opakuj tr kolikrat chces -->
</table>
~~~

Tabulce pridel `id="deska"`, aby se vykreslovala hezky. Na toto `id` je zacilen vizualni styl.

~~~
<table id="deska">
~~~



Level 3 - Pridej JavaScript
---------------------------
Tabulka je zatim jen zobrazena. Pri kliknuti ani jinak se nic nedeje.
Pridej do souboru html odkaz na `hra.js` a vsimni si, ze se tabulka vymaze.
Tento skript navic zajistuje vyhodnoceni pripadneho vitezstvi hrace. Neni ale nutny.
Pokud ho nepridas, tabulka se proste nebude na zacatku vymazavat a v budoucnu se nebude vyhodnocovat vitezstvi. 

~~~
    <table id="deska">
       ...
    </table>

    <script src="hra.js"></script>
</body>
~~~

Dale pridej odkaz na svuj nove zalozeny skript `app.js`, do ktereho budes programovat svou funkcionalitu ty.

~~~
    <table id="deska">
       ...
    </table>

    <script src="hra.js"></script>
    <script src="app.js"></script>
</body>
~~~



Level 4 - Pridej reakci na kliknuti na bunku
--------------------------------------------
Pridej do sveho nove zalozeneho skriptu `app.js` funkci:

~~~
"use strict";

function priKliknutiNaBunku(event) {
    alert("Funguje");
}
~~~

A tuto funkci aktivuj cele tabulce: 

~~~
    <table id="deska" onclick="priKliknutiNaBunku(event)">
       ...
    </table>
~~~



Level 5 - Polozeni symbolu hrace do bunky
-----------------------------------------
Ve skriptu `app.js` ve funkci `priKliknutiNaBunku` nahrad `alert` za nastaveni symbolu `X` do bunky, na kterou se kliklo:

~~~
function priKliknutiNaBunku(event) {
    // Nadefinuj prazdnou promennou bunkaTabulky
    var bunkaTabulky;

    // Vloz do promenne bunkaTabulky prvek <td> z HTML, na ktery se kliklo
    bunkaTabulky = event.target;

    // Vloz do vnitrku bunky (tedy <td>SEM</td>) symbol hrace
    bunkaTabulky.textContent = "X";
}
~~~



Level 6 - Zmena hrace
---------------------
Pridej zmenu hrace z `X` na `O`. Prozatim jen jednorazovou. Bude tedy treba mit aktualniho hrace v promenne,
ktera bude menit svuj obsah.

~~~
var aktualniHrac = "X";

function priKliknutiNaBunku(event) {
    ...
}
~~~

Dale pouzij tyto prikazy. Ne nutne v tomto poradi:
~~~
// Vloz do vnitrku bunky (tedy <td>SEM</td>) text z promenne aktualniHrac
bunkaTabulky.textContent = aktualniHrac;
~~~

~~~
// Vymen symbol hrace
aktualniHrac = "O";
~~~



Level 7 - Pravidelne stridani hracu
-----------------------------------
Pridej moznost pravidelneho stridani hracu pomoci podminky. Muzes pouzit nasledujici prikazy:

~~~
// Vymen hodnotu v aktualniHrac
if (aktualniHrac === "X") {
    aktualniHrac = "O";
} else {
    aktualniHrac = "X";
}
~~~



Level 8 - Neprepisovani bunek
-----------------------------
Program se chova nesikovne v tom, ze kdyz hrac klikne na jiz obsazenou bunku, jeji obsah se i tak prepise.
To by se dit nemelo. Pridej do programu podminku navic, aby se tomu zamezilo.

~~~
if (bunkaTabulky.textContent === "") {
    // Poloz symbol hrace
}
~~~



A je to!