//Node Root, yang mana ini akan lebih spesifik lagi ketika akan menargetkan element apa yang akan kita tuju.
const sectionB = document.querySelector('section#b'); //.. ini juga bisa menggunakan id b, document.getElementById().
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange';