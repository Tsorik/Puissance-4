function verif_verticale(idx_jeton, matches, y) {
    let test_red_vertical = 0
    let test_yellow_verticale = 0
    let curr_match;
    for (let i = 0; i <= 3; i++) {
        curr_match = matches[idx_jeton]
        if (checkRed(curr_match)) {
            test_red_vertical++;
        }
        if (checkYellow(curr_match)) {
            test_yellow_verticale++;
        }
        idx_jeton = idx_jeton + y;

    }
    if (test_red_vertical >= 4) {
        alert('Joueur 1 win');
    }
    if (test_yellow_verticale >= 4) {
        alert('Joueur 2 win');
    }
}

function verif_horizontal(idx_jeton, matches, y) {
    let idx_verif_horizontal_d = idx_jeton;
    let idx_verif_horizontal_g = idx_jeton;
    let test_red_horizontal = 0
    let test_yellow_horizontal = 0

    for (let i = 0; i <= 3; i++) {
        curr_match = matches[idx_verif_horizontal_d]

        if (checkRed(curr_match)) {
            test_red_horizontal++;
        }
        if (checkYellow(curr_match)) {
            test_yellow_horizontal++;
        }
        idx_verif_horizontal_d = idx_verif_horizontal_d + 1;
        if (idx_verif_horizontal_d % y === 0)
            break
    }
    if (test_red_horizontal >= 4) {
        alert('Joueur 1 win HORIZONTALE d');    
        return;
    }
    if (test_yellow_horizontal >= 4) {
        alert('Joueur 2 win HORIZONTALE d');
        return;
    }
    test_red_horizontal--;
    test_yellow_horizontal--;

    for (let i = 0; i <= 3  && idx_verif_horizontal_g % y >= 0; i++) {
        curr_match = matches[idx_verif_horizontal_g]

        if (checkRed(curr_match)) {
            test_red_horizontal++;
        }
        if (checkYellow(curr_match)) {
            test_yellow_horizontal++;
        }
        if (idx_verif_horizontal_g % y === 0)
            break
        idx_verif_horizontal_g = idx_verif_horizontal_g - 1;
    }
    if (test_red_horizontal >= 4) {
        alert('Joueur 1 win');
    }
    if (test_yellow_horizontal >= 4) {
        alert('Joueur 2 win');
    }
    test_red_horizontal = 0
    test_yellow_horizontal = 0
}




function verif_diagonal_droit(idx_jeton, matches, y) {
    let idx_verif_diagnonal_d = idx_jeton;
    let idx_verif_diagnonal_g = idx_jeton;
    let test_red_diagnonal = 0
    let test_yellow_diagnonal = 0
    for (let i = 0; i <= 3; i++) {
        curr_match = matches[idx_verif_diagnonal_d]
     
        if (checkRed(curr_match)) {
            test_red_diagnonal++;
        }
        if (checkYellow(curr_match)) {
            test_yellow_diagnonal++;
        }
        idx_verif_diagnonal_d = idx_verif_diagnonal_d + 1 - y;
        if (idx_verif_diagnonal_d % y === 0)
            break
    }
    if (test_red_diagnonal >= 4) {
        alert('Joueur 1 win');
        return;
    }
    if (test_yellow_diagnonal >= 4) {
        alert('Joueur 2 win');
        return;
    }
    test_red_diagnonal--;
    test_yellow_diagnonal--;
    // verif diagnonal_gauche

    for (let i = 0; i <= 3; i++) {
        curr_match = matches[idx_verif_diagnonal_g]

        if (checkRed(curr_match)) {
            test_red_diagnonal++;
        }
        if (checkYellow(curr_match)) {
            test_yellow_diagnonal++;
        }
        if (idx_verif_diagnonal_g % y === 0)
            break
        idx_verif_diagnonal_g = idx_verif_diagnonal_g - 1 + y;
    }
    if (test_red_diagnonal >= 4) {
        alert('Joueur 1 win');
    }
    if (test_yellow_diagnonal >= 4) {
        alert('Joueur 2 win');
    }
    test_red_diagnonal = 0
    test_yellow_diagnonal = 0
}

function verif_diagonal_gauche(idx_jeton, matches, y) {
    let idx_verif_diagnonal_d = idx_jeton;
    let idx_verif_diagnonal_g = idx_jeton;
    let test_red_diagnonal = 0
    let test_yellow_diagnonal = 0

    for (let i = 0; i <= 3; i++) {
        curr_match = matches[idx_verif_diagnonal_d]

        if (checkRed(curr_match)) {
            test_red_diagnonal++;
        }
        if (checkYellow(curr_match)) {
            test_yellow_diagnonal++;
        }
        if (idx_verif_diagnonal_d % y === 0)
            break
        idx_verif_diagnonal_d = idx_verif_diagnonal_d - 1 - y;
    }
    if (test_red_diagnonal >= 4) {
        alert('Joueur 1 win');
        return;
    }
    if (test_yellow_diagnonal >= 4) {
        alert('Joueur 2 win');
        return;
    }
    test_red_diagnonal--;
    test_yellow_diagnonal--;
    // verif diagnonal_gauche
    

    for (let i = 0; i <= 3; i++) {
        curr_match = matches[idx_verif_diagnonal_g]

            if (checkRed(curr_match)) {
            test_red_diagnonal++;
        }
        if (checkYellow(curr_match)) {
            test_yellow_diagnonal++;
        }
        idx_verif_diagnonal_g = idx_verif_diagnonal_g + 1 + y;
        if (idx_verif_diagnonal_g % y === 0)
        break;
    }

    if (test_red_diagnonal >= 4) {
        alert('Joueur 1 win');
    }
    if (test_yellow_diagnonal >= 4) {
        alert('Joueur 2 win');
    }
    test_red_diagnonal = 0
    test_yellow_diagnonal = 0

}