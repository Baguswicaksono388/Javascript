# DOM (Document Object Model) :

Ini, kita pecah" terlebih dahulu arti dari setiap DOM :
<ol>
  <li>Document, disini diartikan sebuah halaman web kita.</li>
  <li>Object, sebuah nilai atau type data yang ada di Javascript, bisa berupa property dan function.</li>
  <li>Model, ini adalah representasi dari sesuatu.</li>
</ol>  

Jadi, bisa disimpulkan bahwa DOM adalah Representasi element HTML pada dokumen menjadi sebuah object.

Nodelist vs HtmlCollection:
- Keduanya merupakan kumpulan Node
- Struktur datanya mirip array
- NodeList dapat berisi node apapun, sedangkan HtmlCollection harus berisi node elemen HTML.
- HTMLCollection bersifat live sedangkan nodelist tidak

DOM Tree
Struktur dari Hirarki DOM (DOM Tree) :
<ol>
  <li>Root Node
    <ul>
        <li>Node yang menjadi sumber dari semua node lain di dalam DOM</li>
        <li>Document</li>
    </ul>
  </li>
  <li>Parent Node
    <ul>
        <li>Node yang berada 1 tingkat diatas node yang lain</li>
        <li>body adalah parent dari h1, p, div, dan a</li>
    </ul>
  </li>
  <li>Child Node
    <ul>
        <li>Node yang berada 1 tingkat dibawah node yang lain</li>
        <li>h1 adalah child dari body</li>
        <li>Disini tidak mengenal node element atau text</li>
    </ul>
  </li>
</ol>

#DOM SELECTION

DOM SELECTION Method :
<ol type="a">
  <li>getElementById(), yaitu memilih element pada html kita berdasarkan id nya. Perlu di ingat bahwasanya pada 1 halaman html harus mempunyai satu id tertentu. Misal element h1 ada id yang namanya judul, maka element" yang lainya tidak boleh menggunakan id tersebut.</li>
  <li>getElementsByTagName(), jadi ini untuk menugaskan javascript untuk mencarikan element - element nama tag tertentu.</li>
  <li>getElementsByClassName(), kalo kelas boleh dimiliki oleh lebih dari 1 elements.</li>
  <li>querySelector()</li>
  <li>querySelectorAll(), kedua method Selector ini digunakan untuk mencari Selectornya. Selector ini bisa dianggap seperti mencari Selector pada CSS.</li>
</ol>

Hasil dari Selection Method :
<ol type="a">
  <li>getElementById(), -> Element</li>
  <li>getElementsByTagName(), -> Html Collection</li>
  <li>getElementsByClassName(), -> Html Collection</li>
  <li>querySelector(), -> Element</li>
  <li>querySelectorAll(), -> Nodelist</li>
</ol>

Nah, sekarang mana dari method kelima yang ada diatas yang paling cocok digunakan ? Jawabannya adalah tergantung pada kebutuhan kita. Semisal sudah mempunyai id, ya kita mending menggunakan getElementById(), dan seterusnya. Akan tetapi, jika tidak memiliki Id dan Class yang kita gunakan adalah method yang querySelector(). Kemudian untuk performa, mana yang lebih cepat ? Yang lebih cepat dari kelima method tersebut adalah getElementById() dan getElementsByTagName().