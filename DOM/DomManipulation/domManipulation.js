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

const a = document.querySelector('section#a a');
a.removeAttribute('href'); //..ini akan menghasilkan, href pada kata Instragram Sandhika Galih akan hilang