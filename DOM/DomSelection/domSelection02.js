// DOM Selection

// document.querySelector()
const p4 = document.querySelector('#b p'); //..ini dibaca, carikan element p yang mempunyai id b. Yang mana tujuan kita ini ada akan mengedit paragraf 4.
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)'); //.. ini dibaca carikan element section yang memiliki id b dimana didalamnya ada ul yang memiliki li yang berindex 2. Perlu diingat nth-child adalah berupa array dan dimulai indexnya dimulai dari 1.
li2.style.backgroundColor = 'orange';

const p = document.querySelector('p'); //..ini arti nya kita akan melakukan querySelector pada element p. Seharusnya yang memiliki element p ini semuanya akan keedit, akan tetapi yang terkena ada element p yang pertama kali ditemukan, yaitu yang paling atas.
p.innerHTML = 'ini diubah melalui Javascript';