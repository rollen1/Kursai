// Prisiskiriu visus galimus variantus kintamiesiems kad butu lengviau skaityti saslygas
const rock = 1;
const paper = 2;
const scissors = 3;

// Generuoja atsitikni skaiciu tarp 1 ir 3 ir patikrina pagal salygas kas laimejo
function play(playerChoice) {
    // Generuoja skaiciu nuo 1 iki 3
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    // Patikrina ar pasirinkimai yra vienodi ir skelbia lygiasias
    if (playerChoice == computerChoice) {
        console.log('Lygiosios')
        // Patikrinimai kaip laimi kompiuteris
    } else if (playerChoice == rock && computerChoice == paper || playerChoice == scissors && computerChoice == rock || playerChoice == paper && computerChoice == scissors) {
        // printina zaidejo pasirinkima 
        printChoice(true, playerChoice)
        // printina kompiuterio pasirinkima 
        printChoice(false, computerChoice)
        // Kvieciu console log kur isprintinu kompiuteri laimetoja ir abieju pasirinkimus
        whoWon(false);
        // Visi like atvejai (Kai laimi zaidejas)
    } else {
        // printina zaidejo pasirinkima 
        printChoice(true, playerChoice)
        // printina kompiuterio pasirinkima 
        printChoice(false, computerChoice)
        // Kvieciu console log kur isprintinu zaideja kaip laimetoja ir abieju pasirinkimus
        whoWon(true);
    }
}

// Prinitinimo funkcija kad pamatyti rezultata
function whoWon(playerWins) {
    // Tikrina parametra ar zaidejas laimejo
    if (playerWins) {
        console.log('Zaidejas laimejo');
        // Kitaip laimejo kompiuteris
    } else {
        console.log('Kompiuteris laimejo');
    }
}

// Printina kieno ir koks pasirinkimas
function printChoice(who, choice) {
    // jei who ateina true, tai zaidejas
    if (who) {
        console.log('Zaidejas: ')
        // jei who ateina false, tai kompiuteris
    } else {
        console.log('Kompiuteris: ')
    }

    // Jei pasirinkmas akmuo
    if (choice == 1) {
        console.log('Rock')
        // Jei pasirinkmas popierius
    } else if (choice == 2) {
        console.log('Paper')
        // Jei pasirinkmas zirkles
    } else {
        console.log('Scissors')
    }
}
