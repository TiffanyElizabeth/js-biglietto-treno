// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// 1. chiede all'utente il numero di chilometri
const userKm = Number(prompt("Quanti chilometri percorre il viaggo?"));
// 2. calcola il prezzo base (intero) (.21 € al km)
const priceKm = 0.21;
let ticketPrice = userKm * priceKm;
// 3. chiede all'utente l'età
const userAge = Number(prompt("Inserisci la tua età"));
// 4. calcola i prezzi scontati 
//  - eta meno di 18 anni = ticketPrice * .8 (20% discount)
//  - eta piu di 64 anni = ticketPrice * .6 (40% discount)
if(userAge < 18) {
    ticketPrice = ticketPrice * 0.8;
} else if(userAge > 64) {
    ticketPrice = ticketPrice * 0.6;
}
// 5. mostra il prezzo finale con massimo due decimali
let finalTicketPrice = ticketPrice.toFixed(2);

console.log(finalTicketPrice);