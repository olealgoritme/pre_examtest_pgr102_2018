// Oppgave 1.1
// Svar: CSS
// 
// 
// Oppgave 1.2
// Svar: For å skille mellom datatyper, funksjoner/metoder, argumenter/parametere og return-statements
// Det blir enklere å lese hva som er hva i kildekoden. Hadde alt bare hatt èn farge - som når man f.eks åpner kildekoden i notepad.exe, så er det veldig uoversiktlig.
// 
// 
// Oppgave 1.3
// Svar: boolean, string, undefined, null, number
// 
// 
// Oppgave 2.1
// Svar: Fordi +-symbolet concacter i stedet for å addere. *-symbolet der i mot, er en av de matematiske operatørene (mathematical operator).
// For å kunne få bruke +-symbolet som en matematisk operatør, så må alt man adderer vært gjort om til et Number() eller en integer - parseInt()
// 
//  
// Oppgave 2.2
// Svar: console-logger("1" fordi 1*1 = 1) og console-logger("2" fordi 2*1 = 2)


// Oppgave 2.3
// Svar:
var alanTouringObject = { 
	name: "Alan Turing",
	age: "42",
	profession: "informatiker",
	invention: "Turing-maskinen",
	printInformation: function() {
		return console.log(this.name + " ble " + this.age + " år, han jobbet som " + this.profession + " og er kjent for å ha utviklet " + this.invention);
	}
};
alanTouringObject.printInformation();


// Oppgave 2.4
// Svar:
var myArray = ["Up & Going", "Scopes & Closures", "Types & Grammar"];
console.table(myArray);


// Oppgave 2.5
// Svar:
var element = document.getElementById("introText");
var newString = "Takk for at du besøker min side!";
var result = element.innerHTML = newString;
if (!result) element.textContent = newString;