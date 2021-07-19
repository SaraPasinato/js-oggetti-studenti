/* 
ES 2
?Creare un array di oggetti di studenti.
?Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
?Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto 
studente inserendo nell’ordine: nome, cognome e età.

*/
// initialize vars
let msg = "";

// initialize array of object students
let students = [
    {
        name: "Giuseppe",
        surname: "Rossi",
        age: 30,
    },
    {
        name: "Maria",
        surname: "Verdi",
        age: 50,
    },
    {
        name: "Andrea",
        surname: "Neri",
        age: 10,
    },
    {
        name: "Marco",
        surname: "Bianchi",
        age: 40,
    }
]
// element html
const list=document.getElementById("list-students");
//debug inline
console.table(students);
//write students 
for (let i = 0; i < students.length; i++) {
    console.log("--------- STUDENTE " + (i + 1) + " -----------");
    console.log("Nome: " + students[i].name + "  Cognome: " + students[i].surname);
    msg += "<p class=\"lead\"> STUDENTE " + (i + 1) + "</p>\n" + " <li> <strong>Nome: </strong>" +
     students[i].name + "</li><li><strong>Cognome: </strong>" + students[i].surname +"</li> \n";
} 

list.innerHTML=msg;
console.log(msg);