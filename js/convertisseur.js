var monnaiegacha = 0;
var gain = 0;
//var reste = 0;

//Fonction servant à convertir la monnaie   
function ConvMoney() {
    var numbr = parseInt(document.getElementById("montant").value);
    var slct = parseInt(document.getElementById("typo").value);

    console.log(numbr);

    // Un IF pour chaque mini-jeu vmoney= monnaie réelle && money1=monnaie virtuel/pièces
    if (slct == 0) {
        console.log("la valeur de cette somme est une somme d'argent réel");

        monnaiegacha = monnaiegacha;
            console.log("Valeur entrée :")
            console.log(numbr);
            console.log("Gacha :")
            console.log(monnaiegacha);
        alert("Selectionnez le jeu dans lequel vous avez obtenu ces pièces")
    }

    if (slct == 1) {
        if (numbr>100) {
            console.log("la valeur de cette somme est une somme d'argent secondaire valant ")

            gain =parseInt(numbr/100);
            //reste = numbr%100;
            monnaiegacha = parseInt(monnaiegacha+gain);
            console.log("Valeur entrée :")
            console.log(numbr);
            console.log("Gacha :")
            console.log(monnaiegacha);
            alert("Vous avez gagné "+gain+" jeton(s) gacha !")
        }
        else{
            alert("Montant insuffisant")
        }
    }

    if (slct == 2 || slct==3) {
        if (numbr>0){
            console.log("la valeur de cette somme est une somme d'argent réel");

            gain=parseInt(numbr);
            monnaiegacha = parseInt(monnaiegacha+gain);
            console.log("Valeur entrée :")
            console.log(numbr);
            console.log("Gacha :")
            console.log(monnaiegacha);
            alert("Vous avez gagné "+gain+" jeton(s) gacha !")
        }
        else{
            alert("Montant insuffisant")
        }
    }

    document.getElementById("monnaiegacha").textContent = monnaiegacha;
    return monnaiegacha, gain;
}

function tournerouge(){
    document.getElementById("gacharouge").src="../contenu_media/Animation/RedMachine/RedTurnOnce.gif";
    setTimeout(() => {document.getElementById("capsule").src="../contenu_media/Images/Capsule.png";}, 1000)
    monnaiegacha = monnaiegacha - 10;
    }

function rewardred(){
    document.getElementById("gacharouge").src="../contenu_media/Animation/RedMachine/FrameRed1.png";
    alert("Vous avez gagné une récompense")
    document.getElementById("capsule").src="";
}

//Fonctions pour la machine BLEUE

function tournebleu(){
    document.getElementById("gachableu").src="../contenu_media/Animation/BlueMachine/BlueTurnOnce.gif";
    setTimeout(() => {document.getElementById("capsule").src="../contenu_media/Images/Capsule.png";}, 1000)
    monnaiegacha = monnaiegacha - 10;
    }

function rewardblue(){
    document.getElementById("gachableu").src="../contenu_media/Animation/BlueMachine/FrameBlue1.png";
    alert("Vous avez gagné une récompense")
    document.getElementById("capsule").src="";
}

//Fonctions pour la machine VERTE

function tournevert(){
    document.getElementById("gachavert").src="../contenu_media/Animation/GreenMachine/GreenTurnOnce.gif";
    setTimeout(() => {document.getElementById("capsule").src="../contenu_media/Images/Capsule.png";}, 1000)
    monnaiegacha = monnaiegacha - 10;
    }

function rewardgreen(){
    document.getElementById("gachavert").src="../contenu_media/Animation/GreenMachine/FrameGreen1.png";
    alert("Vous avez gagné une récompense")
    document.getElementById("capsule").src="";
}
