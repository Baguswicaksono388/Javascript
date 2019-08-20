// MANIPULASI NODE

//Menambahkah paragraf baru setelah paragraf 3
const pBaru = document.createElement('p'); //..kita buat element p, yang mana ini akan disimpan di memory sementara
const teksPBaru = document.createTextNode('Paragraf Baru'); //..kita membuat teks yang masih disimpan dimemory, yang mana pBaru & teksPBaru belum terkait atau masih terpisah

//simpan tulisan kedalam paragraf
pBaru.appendChild(teksPBaru); //..ini belum bisa tampil

// simpan pBaru di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru); //Baru ini akan menampilkan pada akhir section


const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');

liBaru.appendChild(teksLiBaru); //Dalam aturannya kita memanggil wadahnya dulu yaitu liBaru, baru kemudian appendChild isinya yaitu teksLiBaru

//Ketahui parent atau element yang mau kita sisipkan, disini kita akan menyipkan Item baru sebelum item 2
const ul = document.querySelector('section#b ul'); //..ini artinya cari section dengan id b, dan carikan ul yang ada didalamnya
const li2 = document.querySelector('section#b ul li:nth-child(2)'); //..atau untuk memperkecil syntaxnya bisa juga ul.querySelector('li:nth-child(2)')

ul.insertBefore(liBaru, li2);

//Meghapus element a pada html kita
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

//Mengganti Paragraf 4
const sectionB = document.querySelector('section#b'); //..kita menagkap dulu sectionnya
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru');

h2Baru.appendChild(teksH2Baru); //..ini kita gabungkan terlebih dahulu

sectionB.replaceChild(h2Baru, p4); //..ini artinya h2Baru akan mereplace p4

//Skrip ini untuk memberikan warna pada element yang sudah kita edit tadi
pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';