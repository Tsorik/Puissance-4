// logique verification couleur
function checkColor(curr_match) {
    return ($(curr_match).css('background-color') !== "rgb(255, 0, 0)" && $(curr_match).css('background-color') !== "rgb(255, 255, 0)")
}

function checkRed(curr_match) {
    return ($(curr_match).css('background-color') == "rgb(255, 0, 0)")
}

function checkYellow(curr_match) {
    return ($(curr_match).css('background-color') == "rgb(255, 255, 0)")
}

(function (window, document) {
    window.onload = init;
 
    function init() {
        $('#grille').puissance4(6, 7, "blue", "red");
    }
    jQuery.fn.puissance4 = function (x, y, couleur1, couleur2) {
        let grille = document.getElementById("grille");
        // Création grille de jeu
        function myIMG() {
            var images = document.createElement("IMG");
            images.setAttribute("src", "./rond.png");
            images.setAttribute("width", "100");
            images.setAttribute("height", "100");
            images.setAttribute("alt", "cell");
            grille.appendChild(images);
        }


        for (let pas = 0; pas < x; pas++) {
            for (let pas = 0; pas < y; pas++) {
                myIMG();
            }
            grille.innerHTML += "<br>";
        }

        joueur = document.getElementById("current_player");
        joueur.innerHTML = "Joueur 1";
        let click = 1;
        
        // récuperation cellule
        var matches = document.querySelectorAll("img");
        console.log(matches)
        for ([index, match] of matches.entries()) {
            let idx = index;
            
            match.addEventListener('click', function () {
                // affichage joueur
                
                if (click % 2 == 0) {
                    joueur.innerHTML = "Joueur 1";
                } else {
                    joueur.innerHTML = "Joueur 2";
                }
                console.log(click)
                click++;
                if (click == x * y + 1) {
                    alert('Egalité !');
                }

                // mise en place jeton
                let idx_jeton = jeton(y, idx, matches, x, click);

                // verif verticale
                verif_verticale(idx_jeton, matches, y);
                // verif horizontal_droite
                verif_horizontal(idx_jeton, matches, y)

                verif_diagonal_droit(idx_jeton, matches, y)

                verif_diagonal_gauche(idx_jeton, matches, y)

            })
        }
        let button = document.getElementById("button");
        button.addEventListener('click', function () {

            let element = document.getElementsByTagName("img")
            for(let i=0; i < element.length; i++){
                
                element[i].style.backgroundColor = "white";

            }
        })
    }

})(window, document)