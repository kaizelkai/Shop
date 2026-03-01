var inputMin = document.getElementById("min");
    var inputMax = document.getElementById("max");
    var barre = document.getElementById("barreActive");
    var affMin = document.getElementById("affMin");
    var affMax = document.getElementById("affMax");

    function mettreAJour() {
        var valMin = parseInt(inputMin.value);
        var valMax = parseInt(inputMax.value);

    if (valMin >= valMax) {
        inputMin.value = valMax - parseInt(inputMin.step);
        valMin = parseInt(inputMin.value);
    }

    var total = inputMin.max - inputMin.min;
    var pourcLeft = ((valMin - inputMin.min) / total) * 100;
    var pourcRight = ((valMax - inputMin.min) / total) * 100;

    barre.style.left = pourcLeft + "%";
    barre.style.width = (pourcRight - pourcLeft) + "%";


    affMin.textContent = "$" + valMin.toLocaleString();
    if (valMax >= 10000) {
        affMax.textContent = "$10,000+";
    } else {
        affMax.textContent = "$" + valMax.toLocaleString();
    }
    }
    inputMin.addEventListener("input", function() {
    var valMin = parseInt(inputMin.value);
    var valMax = parseInt(inputMax.value);
    if (valMin >= valMax) {
        inputMin.value = valMax - parseInt(inputMin.step);
    }
    mettreAJour();
    });

    inputMax.addEventListener("input", function() {
    var valMin = parseInt(inputMin.value);
    var valMax = parseInt(inputMax.value);
    if (valMax <= valMin) {
        inputMax.value = valMin + parseInt(inputMax.step);
    }
    mettreAJour();
    });
    mettreAJour();