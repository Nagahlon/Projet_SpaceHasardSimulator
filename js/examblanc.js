//Fonctions pour la machine ROUGE

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