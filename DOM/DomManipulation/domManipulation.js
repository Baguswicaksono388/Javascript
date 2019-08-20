// // const judul = document.getElementById('judul');
// // judul.innerHTML = '<em>Bagus</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello wordl'; //.. Pada sectionA ini yang kita traget sebenarna ada 3 paragraf dan 1 button, jika ini kita melakukan innerHtml maka 3 paragraf dan 1 button akan hilang dan digantikan Hello word.

//element.style.<property>
// const judul = document.querySelector('h1#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute('name', 'Bagus'); //.. Ini akan menghasilkan jika kita lihat di brower melalui inspect element, maka bagian judul ini akan ada atribut name yang isinya Bagus.

//judul.getAttribute('id'); //..Code ini ketika di console pada browser, maka akan menghasilkan nilai id pada judul.

// const a = document.querySelector('section#a a');
// a.removeAttribute('href'); //..ini akan menghasilkan, href pada kata Instragram Sandhika Galih akan hilang

const p2 = document.querySelector('.p2'); //..ini akan memelih class p2
p2.classList.add('label'); //..ini akan menambahkan kelas label, tepatnya pada paragref 2
p2.classList.remove('label'); //..ini akan menghapus class label yang tadi sudah kita inputkan
p2.classList.toggle('coba'); //..pada toogle ini lebih keren, dimana ini akan mengecek apakah class coba itu ada atau engk, klo ada maka akan hapus, jika tidak ada tambahkan.

const tampilan = document.body.classList.toggle('biru-muda'); //..ini otomatis akan menambahkan class biru-muda pada body. Nah method ini bisa dikasih pada sebuah tombol, jika diklik mengaktifkan dan mematikan dari class biru muda tersebut.
// p2.classList.item(2) //..ini tuliskan pada console pada browser, pada p2 nama class pada urutan 2 namanya apa ?
// p2.classList.contains('coba'); //.. ini mengecek apakah ada class yang nama nya coba pada p2
p2.classList.replace('p2', 'p2Diganti'); //..ini artinya class p2 digantikan class dengan nama p2Diganti