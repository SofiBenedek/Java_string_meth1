let txt = "oaifai fgagfagjg fafashifahksfasgfgasg"

// console.log(txt.slice(0,6));
// console.log(txt.slice(3,9));
// console.log(txt.slice(5));
// console.log(txt.slice(5,12));
// console.log(txt.toLocaleUpperCase);

let mindenmasodikbetu = "";
for (let i = 0; i < txt.length; i++) {
   
    if (i % 2 == 1) {
        
        mindenmasodikbetu += txt[i].toUpperCase()

    }
    else{
        mindenmasodikbetu += txt[i]
    }
        
}

console.log(mindenmasodikbetu);
console.log(txt.slice(0,6));
console.log(txt.slice(0,6));
