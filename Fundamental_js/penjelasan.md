Di dalam Javascript ada 6 tipe data :
a. Number
Dalam number ini, perlu diingat bahwasanya didalam javascript tidak ada namanya bilangan bulat, yang ada adalah bilangan floating point atau bilangan pecahan dan ukuran angka yang bisa ditampung adalah 64-bit (2^64). Dan didalam number dapat menyimpan angka :
1. Angka tanpa desimal atau bisa disebut integer
    - ex. 10, 1500, 1234, dll
    - Akurat sampai 15 digit saja. Jika melebihi akan otomastis dibulatkan
2. Angka dengan desimal atau bilangan pecahan
    - ex 3.14
    - Hati" dalam menyimpan bilangan pecahan krn hasil nya tidak akurat. ex. 0.2 + 0.1
3. Bilangan eksponen (Bil.yang sangat besar atau kecil)
    - 123e5 , maka akan dituliskan 12300000
    - 123e-5 , maka akan dituliskan 0,00123
4. Bisa menyimpan Bilangan Negatif
Note : Jangan pernah meniliskan angka diawal dengan 0, dikarenakan hasilnya tidak akurat. Misalnya menuliskan 023 maka javascript akan menangkapnya 18, krn ini dianggap sebagai bilangan oktal. Dan 0x, krn ini bisa dianggap sbgai bilangan hexadesimal, misalnya 0xFF, maka javascript akan menuliskan 255

Didalam number juga bisa menyimpan :
a. Infinity
    ex. 2/0
b. -Infinity
    -2/0
c. NaN
    - 0/0

b. String
Adalah type data yang digunakan untuk merepresentasikan "data tekstual" atau bisa disebut juga dengan plain text. Untuk mempresentasikan pada javascript bisa menggunakan tanda (" ") atau (' '). 
Ada beberapa escape character pada javascript :
- \0 -> Karakter NULL
- \' -> Karakter '
- \" -> Karakter "
- \\ -> Karakter \
- \n -> New Line atau garis baru
- \t -> tab
- \b -> backspace
- \uXXXX -> unicode

Contoh dari Unicode :
- \u00A9 ->
- \u00AE ->
- \u00B1 ->
- \u00B5 ->
- \u2122 ->

Didalam String, juga terdapat .length untuk menghitung jumlah karakter. Ex : "Bagus".length

c. Boolean
Adalah sebuah type data untuk merepresentasikan logika true atau false. Untuk Sejarahnya sendiri Boolean pertama kali ditemukan oleh George Boole, dia ini adalah seorang ahli Matematika dibidang Logika. Untuk dalam pemograman sendiri, Boolean seringkali digunakan pada statement pengkondisian, dalam menentukan aksi yang berbeda dan mengatur alur kendali program. Dan Boolean memiliki 2 buah nilai yaitu true & false.

d. Object
e. Function
f. Undefined

Operator
Operator adalah Sebuah simbol yang digunakan untuk melakukan operasi.

Didalam javascrip ada beberapa operator :
Dapat dibagi kedalam penugasannya
1. Operator Binary
a. Aritmatika
b. Penugasan
Macam - macam jenis operator penugasan :
- =
- +=, (x = x + y) artinya akan menjumlahkan bilangan yang sebelumnya. Misal kita menuliskan x = 5. Kemudian x += 4, maka hasilnya 9
- -=, (x = x - y)
- *=, (x = x * y)
- /=, (x = x / y)
- %=, (x = x % y)

c. Perbandingan
Macam - Macam Operator perbandingan :
- ==, sama dengan
- !=, tidak sama dengan
- ===, strict sama dengan. Ini digunakan untuk membandingkan 2 identitas yang berbeda. Misalnya 10 === "10"
- !==, strict tidak sama dengan
- >, lebih besar
- <, lebih kecil
- >=, lebih besar sama dengan
- <=, lebih kecil sama dengan
Jadi, operator perbandingan ini akan menghasilkan boolean (true / false)

d. Logika
Operator Logical :
- && (AND)
- || (OR)
- ! (NOt)

e. String
Macam Operator String : 
- +, ini bisa dimaksudkan sebgai operator untuk menggabungkan 2 kata pada javascript. Misalnya a = "Apple", b = "pen". a + b Hasilnya adalah "Applepen". Jika mau ada spasi makan a + ""+ b
Operator Binary adalah operator yang membutuhkan 2 operand. Ex 1+2
Modulus dalam Javascript dituliskan %

2. Operator Ternary
Membutuhkan 1 Operand
Kondisional, (Kondisi) ? benar : salah , (x % 2 ==) ? "genap" : "ganjil"
3. Operator Unary
Membutuhkan 3 operand
typeof, untuk mengetahui type data apa yang kita masukkan. Ex : typeof(Operand) ->typeof(10) hasilnya number

Variabel
Adalah Sebuah tempat/wadah yang memiliki nama, yang digunakan untuk menyimpan nilai.
Dalam Variabel ada 3 yang perlu diperhatikan :
a. Deklarasi
Adalah mendaftarkan variabel ke dalam lingkup yang sesuai
b. Inisialisasi
Adalah proses pemesanan untuk menyediakan memori yang digunakan untuk variabel tersebut.
c. Assignment
Adalah menetapkan nilai yang spesifik yang akan disimpan didalam variabel. Dalam mendeklarasikan sebuah variabel dituliskan dengan "var <nama variabel>". Ada beberapa aturan dalam pemberian nama variabel :
a. Tidak boleh menggunakan spasi
b. Tidak boleh nama variabel diawali dengan angka. Ex : 1tidakboleh, Jadi semisal angkanya dibelakang diperbolehkan. Ex : boleh1.
c. Biasanya seorang programer menuliskan nama variabelnya menggunakan Camel Case. Ex : namaVariabelPanjang

Ex : var x; -> Ini artinya ada proses deklarasi & inisialisasi
    x = 20; -> Ini terdapat proses assignment

Ada bebrapa keyword dalam mendeklarasikan sebuah variabel :
- Var
- Let
- Const

Dalam membantu penulisan variabel jika ada banyak variabel. Kita bisa menggunaka metode shorthand. Misalnya :
Var nama = "Bagus";
Var umur = 23;

Dengan Shorthand, maka akan menjadi :
Var nama = "Bagus", umur = 23;




















