/* 
ES 2
?Creare un array di oggetti di studenti.
?Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
?Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto 
studente inserendo nell’ordine: nome, cognome e età.

*/
// initialize vars
let msg = "";
let count = 0;
let currentName = "";
let currentSurname = "";
let currentAge = 0;
let isCorrect = false;
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
const list = document.getElementById("list-students");
//debug inline
console.table(students);
//write students 
writeListsStudent();
// until 3 attepts are executed
do {
    currentName = prompt("inserisci il nome dello studente (" + (count + 1) + " /3): ");
    currentSurname = prompt("inserisci il cognome dello studente (" + (count + 1) + " /3): ");
    currentAge = parseInt(prompt("inserisci l'età dello studente (" + (count + 1) + " /3): "));
    //? validation for inputs  
    if (isValidate(currentName) && isValidate(currentSurname) && isValidateNum(currentAge)) {
        let current = {
            name: currentName,
            surname: currentSurname,
            age: currentAge
        }
        //? Validation for duplicate
        if (!isDuplicate(currentName, currentSurname, currentAge)) {
            students.push(current);
            count++;
        } else {
            alert("I valori inseriti  sono duplicati!");
        }

    } else {
        alert("I valori inseriti non sono validi!");
    }

} while (count < 3);

//write students after insert 3 object
writeListsStudent();



/**
 * 
 * @param {string} strName 
 * @param {string} strSur 
 * @param {number} age 
 * @returns 
 */
function isDuplicate(strName, strSur, age) {
    for (var key in students) {
        if (students[key].name === strName && students[key].surname === strSur && students[key].age === age) {
            return true;
        }
    }
    return false;
}
/**
 * 
 * @param {number} num 
 * @returns  {boolean} 
 */
function isValidateNum(num) {
    if (!num || isNaN(num) || num < 0 || num > 100) {
        return false;
    }
    return true;
}


/**
 * 
 * @param {string} str 
 * @returns  {boolean} 
 */
function isValidate(str) {
    if (!str || !isNaN(str) || str.trim === "") {
        return false;
    }
    return true;
}
/**
 * write array of objects students
 */
function writeListsStudent() {
    for (let i = 0; i < students.length; i++) {
        msg += "<p class=\"lead\"> STUDENTE " + (i + 1) + "</p>\n" + " <li> <strong>Nome: </strong>" +
            students[i].name + "</li><li><strong>Cognome: </strong>" + students[i].surname + "</li> \n";
    }

    list.innerHTML = msg;
    //debug inline
    console.table(students);
}