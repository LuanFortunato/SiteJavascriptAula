var cadeiras = [];
var cadeirasDisponiveis = 35;
var cadeirasReservadas = 0;

document.addEventListener("DOMContentLoaded", function () {
    criarcadeiras(cadeirasDisponiveis);
});


function criarcadeiras(numCadeiras) {
    var cadeirasElemento = document.getElementById("cadeiras");

    for (var i = 0; i < numCadeiras; i++) {
        var cadeiraElemento1 = document.createElement("div");
        cadeiraElemento1.classList.add("acento");
        cadeiraElemento1.setAttribute("id", "cadeira" + i);
        cadeiraElemento1.style.backgroundColor = "green";

        cadeiraElemento1.addEventListener("click", function () {
            var cadeiraId = this.getAttribute("id");
            var cadeiraIndex = parseInt(cadeiraId.replace("cadeira", ""));

            if (cadeiras[cadeiraIndex]) {
                this.style.backgroundColor = "green";
                cadeiras[cadeiraIndex] = false;
                cadeirasReservadas--;
                cadeirasDisponiveis++;
            } else {
                this.style.backgroundColor = "red";
                cadeiras[cadeiraIndex] = true;
                cadeirasReservadas++;
                cadeirasDisponiveis--;
            }

            document.getElementById("cadeira-disponivel").textContent = cadeirasDisponiveis;
            document.getElementById("cadeira-reservada").textContent = cadeirasReservadas;
        });

        cadeirasElemento.appendChild(cadeiraElemento1);
        cadeiras[i] = false;
        cadeirasDisponiveis++;
    }


    document.getElementById("cadeira-disponivel").textContent = cadeirasDisponiveis;
    document.getElementById("cadeira-reservada").textContent = cadeirasReservadas;
}

