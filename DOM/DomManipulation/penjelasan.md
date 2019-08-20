# DOM (Document Object Model) :

Dalam pembahasan kali ini, kita akan membahas :
<ol type="a"> 
    <li>Manipulasi Element</li>
    <li>Manipulasi Node</li>
</ol>

# Manipulasi Element
Untuk memanipulasi Element, ada beberapa method yang akan kita gunakan :
- element.innerHTML, fungsinya untuk mengubah isi dari sebuah teks yang kita seleksi
- element.style.<property>, ini untuk merubah style atau CSS dari sebuah element yang sudah kita seleksi
- element.setAttribute(), ini untuk memanipulasi atribut pada sebuah element yang melekat pada element yang sudah kita seleksi
- element.classList, secara spesifik ini akan digunakan untuk memanipulasi class dan sebenarnya class ini juga salah satu attribute juga
- etc

Macam - macam Method pada ClasssList :
- element.classList.add(), ini untuk menambah
- element.classList.remove(), ini untuk menghilangkan
- element.classList.toogle(), 
- element.classList.item(), ini untuk mengetahui nama class pada suatu element.
- element.classList.contains(), untuk mengecek nama class yang kita cari pada element yang kita target ada atau engk.
- element.classList.replace()

# Manipulasi Node
Untuk memanipulasi Node memiliki beberapa method, diantaranya adalah :
- document.createElement(), ini akan membuat dulu elementnya
- document.createTextNode(), ini akan menambah teks setelah elemant dibuat
- node.appendChild(), ini menyimpan pada element yang paling akhir
- node.insertBefore()
- parentNode.removeChild()
- parentNode.replaceChild()