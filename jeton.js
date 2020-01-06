function jeton(y, idx, matches, x, click) {
    let curr_match;
    // mise en place jeton dans la grille
   
    for (let i = 0; i <= x; i++) {
        curr_match = matches[idx]
        if (checkColor(curr_match) && idx < x * y) {
            idx = idx + y;
        } else {
            
            idx = idx - y;
            curr_match = matches[idx];
            if (checkColor(curr_match)) {
                if (click % 2 == 0) {
                    curr_match.style.backgroundColor = "red";
                } else {
                    curr_match.style.backgroundColor = "yellow";
                }
                break;
            }
            
            if(idx <= x){
                alert("plus de place dans la colonne");
                click--;
            }
        }
    }
    return (idx)
}