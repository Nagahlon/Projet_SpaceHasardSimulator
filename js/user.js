function assignMonUser(){

user = document.getElementById("utilisateur").value; 

//Tableau d'utilisateur 
var TabUt = [[user,""],
            ["Monnaie réelle", vmoney],
            ["Monnaie en Pièce", money1]
        ];
console.table(TabUt);
//Le mettre sur la page
    document.write('<table>');
    document.write('<tr><td>',user,'</td></tr>');

    for (let i = 1; i < TabUt.length; i++) {

        document.write('<tr><td>',TabUt[i]);

        for (let j = 0; j < (TabUt[i].length- 2); j++) {
          document.write(TabUt[j],'</td></tr>');
        } 
    }
  
document.write('</table><br></br>');

}