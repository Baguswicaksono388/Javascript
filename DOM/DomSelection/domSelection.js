// DOM Selection

const judul = document.getElementById('judul'); //.. variabel dan judul tidak harus sama. Kemudian jika kita sdh menangkap id tersebut maka kita akan bebas mengubahnya, misal stylenya pada id judul tersebut.
//Manipulasi id judul yang tadi dibuat
judul.style.color = 'red'; //.. Untuk mengubah Warna Color pada element dengan id Judul
judul.style.backgroundColor = 'grey'; //.. Untuk mengubah Warna Background pada element dengan id Judul
judul.innerHTML = 'Bagus';

//document.getElementsByTagName()
const p = document.getElementsByTagName('p'); //.. variabel ini disiapkan untuk dapat mengubah tag p yang ada pada Html. Yang mana jika di console dengan mengetikkan p, akan ada 4 p.
p[2].style.backgroundColor = 'lightblue'; //.. kenama pada p dikasih index, krn hasil dari document.getElementsByTagName menghasilkan HTMLCollections, yang mana ini adalah berupa array krn lebih dari satu. Jika tanpa index, maka hasilnya akan error.

// Jika kita akan membuat p keedit semua dan editnya sama, maka lakukan looping.
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}
const h1 = document.getElementsByTagName('h1');
h1[0].style.fontSize = '50px'; //..h1 sebenarnya dari html ini hanya ada 1. Tpi, knpa ini harus dikasih index ? Dikarenakan HtmlCollection ada berupa array, jadi harus diberi index.