DOM (Document) :

Ini, kita pecah" terlebih dahulu arti dari setiap DOM :
a. Document, disini diartikan sebuah halaman web kita.
b. Object, sebuah nilai atau type data yang ada di Javascript, bisa berupa property dan function.
c. Model, ini adalah representasi dari sesuatu.

Jadi, bisa disimpulkan bahwa DOM adalah Representasi element HTML pada dokumen menjadi sebuah object.

Nodelist vs HtmlCollection:
- Keduanya merupakan kumpulan Node
- Struktur datanya mirip array
- NodeList dapat berisi node apapun, sedangkan HtmlCollection harus berisi node elemen HTML.
- HTMLCollection bersifat live sedangkan nodelist tidak

DOM Tree
Struktur dari Hirarki DOM (DOM Tree) :
a. Root Node
    - Node yang menjadi sumber dari semua node lain di dalam DOM
    - Document
b Parent Node
    - Node yang berada 1 tingkat diatas node yang lain
    - body adalah parent dari h1, p, div, dan a
c. Child Node
    - Node yang berada 1 tingkat dibawah node yang lain
    - h1 adalah child dari body.
    - Disini tidak mengenal node element atau text

<h1>DOM SELECTION</h1>
DOM SELECTION Method :
a. getElementById(), yaitu memilih element pada html kita berdasarkan id nya. Perlu di ingat bahwasanya pada 1 halaman html harus mempunyai satu id tertentu. Misal element h1 ada id yang namanya judul, maka element" yang lainya tidak boleh menggunakan id tersebut.
b. getElementsByTagName(), jadi ini untuk menugaskan javascript untuk mencarikan element - element nama tag tertentu.
c. getElementsByClassName(), kalo kelas boleh dimiliki oleh lebih dari 1 elements.
d. querySelector()
e. querySelectorAll(), kedua method Selector ini digunakan untuk mencari Selectornya. Selector ini bisa dianggap seperti mencari Selector pada CSS.

Hasil dari Selection Method :
a. getElementById(), -> Element
b. getElementsByTagName(), -> Html Collection
c. getElementsByClassName(), -> Html Collection
d. querySelector(), -> Element
e. querySelectorAll(), -> Nodelist

Nah, sekarang mana dari method kelima yang ada diatas yang paling cocok digunakan ? Jawabannya adalah tergantung pada kebutuhan kita. Semisal sudah mempunyai id, ya kita mending menggunakan getElementById(), dan seterusnya. Akan tetapi, jika tidak memiliki Id dan Class yang kita gunakan adalah method yang querySelector(). Kemudian untuk performa, mana yang lebih cepat ? Yang lebih cepat dari kelima method tersebut adalah getElementById() dan getElementsByTagName().