/* ES 1
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo (in pagina) attraverso un ciclo for-in tutte le proprietà dell'oggetto.
 */

//initialize by default student obj
let student={
 name:"John",
 surname :"Doe",
 age: 26,
};

const nameEl=document.getElementById("name");
const surnameEl=document.getElementById("surname");
const ageEl=document.getElementById("age");

//write  log student
for(var key in student){
    console.log(key + ": "+ student[key]);
}

nameEl.innerText=student.name;
surnameEl.innerText=student.surname;
ageEl.innerText=student.age;