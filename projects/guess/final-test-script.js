// Τα ερωτήματα 2 έως 7 θα απαντηθούν στο αρχείο αυτό

const newGuess = document.querySelector("#new-guess");
const message = document.querySelector("#message");
const lowHigh = document.querySelector("#low-high");
const checkButton = document.querySelector("#check");
const restartButton = document.querySelector("#restart");
const root = document.querySelector(":root");

// 2. να ορίσετε τους σχετικούς χειριστές συμβάντων
newGuess.addEventListener("keyup",checkKey);
checkButton.addEventListener("click",checkGuess);
restartButton.addEventListener("click",restart);
let previousGuesses = [];
let theGuess;
window.onload = newRandom();
console.log(theGuess)
newGuess.focus();

/* 3. συνάρτηση που βρίσκει ένα τυχαίο αριθμό μεταξύ 1 και 100 
 και τον εκχωρεί στη μεταβλητή theGuess */
function newRandom(){
		theGuess=Math.floor(Math.random()*100+1);
}

/* 4. συνάρτηση που όταν ο χρήστης πατήσει <<enter>> 
 να καλεί τη συνάρτηση που αποτελεί τον κεντρικό ελεγκτή του παιχνιδιού.
 */
function checkKey(e){
	if (e.code=="Enter"){checkGuess();}}
/* 5. Να ορίσετε συνάρτηση checkGuess η οποία καλείται είτε όταν ο χρήστης πατήσει <<enter>>
στο πεδίο "new-guess" είτε όταν πατήσει το πλήκτρο "check", η οποία είναι ο κεντρικός ελεγκτής,
καλεί τη συνάρτηση processGuess (η οποία αποφαίνεται για την ορθότητα του αριθμού) και κάνει τις
κατάλληλες ενέργειες για εμφάνιση του πλήκτρου 'restart' και την εξαφάνιση του πλήκτρου 'check'
σε περίπτωση ολοκλήρωσης του παιχνιδιού. */
function checkGuess(){
	if (processGuess(newGuess.value)){
		restartButton.style.display="block";
		checkButton.style.display="none";}}
 /* 6.  Να ορίσετε συνάρτηση processGuess(newValue) η οποία καλείται από τη συνάρτηση checkGuess,
 περιέχει τη λογική του παιχνιδιού, ελέγχει αν η τιμή του χρήστη είναι σωστή, ή αν το παιχνίδι έχει
 τελειώσει χωρίς ο χρήστης να έχει βρει τον αριθμό, και επιστρέφει αντίστοιχα την τιμή "win", ή "lost",
 δημιουργεί και εμφανίζει τα κατάλληλα μηνύματα, αλλάζοντας το χρώμα του στοιχείου μηνυμάτων.
 Όλα τα μηνύματα του προγράμματος εμανίζονται από την processGuess().
 Σε περίπτωση που το παιχνίδι δεν έχει ακόμα τελειώσει, η συνάρτηση μπορεί είτε να μην επιστρέφει κάποια ιδιαίτερη τιμή,
 είτε να επιστρέφει κάποια τιμή της επιλογής σας */
function processGuess(newValue){
	if (isNaN(newValue)==true){message.innerHTML="Δώσε αριθμό";
			message.style.background = "crimson";
			message.style.color="floralwhite";}
	else if(newValue>100){message.innerHTML="Δώσε αριθμό μεταξύ 0-100";
			message.style.background = "crimson";
			message.style.color="floralwhite";}
	else if(newValue<0){message.innerHTML="ΣΤΟΠ";
			message.style.background = "crimson";
			message.style.color="floralwhite";}
	else{
		if(newValue>theGuess){
			message.innerHTML="Λάθος, το ξεπέρασες";
			message.style.background = "crimson";
			message.style.color="floralwhite";}
		else if(newValue<theGuess){
			message.innerHTML="Λάθος, είσαι πιο χαμηλά";
			message.style.background = "crimson";
			message.style.color="floralwhite";}
		else{message.innerHTML="Μπράβο το βρήκες!";
			message.style.background = "rgb(0, 128, 32)";
			message.style.color="floralwhite";
		return 1;}
		previousGuesses.push(newValue)}
		lowHigh.innerHTML="Προηγούμενες προσπάθειες: "+previousGuesses;
			if((previousGuesses.length)==10){
				message.innerHTML="Τέλος παιχνιδιού";
				message.style.background = "crimson";
				message.style.color="floralwhite";		
			return 1;}
		}
	

	
function restart(){
	message.innerHTML=" ";
	lowHigh.innerHTML=" ";
	previousGuesses=[];
	newGuess.value=" ";
	checkButton.style.display="inline-block"
	restartButton.style.display="none";
	newRandom();
	
/* 7. Να ορίσετε συνάρτηση restart η οποία καλείται όταν ο χρήστης πατήσει το πλήκτρο 
'restart' και επανεκινεί τη διαδικασία */
}
