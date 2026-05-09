// ==========================================
// BAGIAN 1: DATA KUIS (BANK SOAL)
// ==========================================

const quizData = {
    // Bab 1: Dasar Wirausaha (30 Soal)
    "1": [
        { text: "Apa yang dimaksud dengan wirausaha?", options: { a: "Bekerja di kantor", b: "Orang yang menjalankan usaha sendiri dengan berani mengambil risiko", c: "Mencari pekerjaan di perusahaan besar", d: "Menabung uang di bank", e: "Membeli barang mewah" }, answer: "b" },
        { text: "Karakteristik utama seorang wirausahawan adalah...", options: { a: "Pesimis", b: "Berani mengambil risiko dan inovatif", c: "Mudah menyerah", d: "Bergantung pada orang lain", e: "Takut gagal" }, answer: "b" },
        { text: "Apa tujuan utama dari sebuah bisnis?", options: { a: "Hanya mencari teman", b: "Mendapatkan keuntungan dan memberi nilai tambah", c: "Menghabiskan modal", d: "Mencari pengakuan sosial saja", e: "Mengikuti tren tanpa rencana" }, answer: "b" },
        { text: "Dalam PKWU, inovasi berarti...", options: { a: "Meniru produk orang lain secara total", b: "Menciptakan sesuatu yang baru atau memperbaiki yang sudah ada", c: "Berhenti belajar setelah sukses", d: "Menghindari teknologi", e: "Menurunkan kualitas barang" }, answer: "b" },
        { text: "Salah satu penyebab kegagalan wirausaha adalah...", options: { a: "Manajemen yang baik", b: "Kurangnya perencanaan dan riset pasar", c: "Modal yang terlalu besar", d: "Lokasi yang strategis", e: "Produk yang berkualitas tinggi" }, answer: "b" },
        { text: "Sikap pantang menyerah dalam kewirausahaan disebut...", options: { a: "Ambisius", b: "Persistensi", c: "Arogansi", d: "Pesimisme", e: "Pasif" }, answer: "b" },
        { text: "Wirausaha berasal dari kata wira dan usaha. Wira berarti...", options: { a: "Pejuang atau pahlawan", b: "Dagang", c: "Uang", d: "Kerja", e: "Rencana" }, answer: "a" },
        { text: "Seorang wirausaha harus memiliki kemampuan 'Problem Solving', artinya...", options: { a: "Pandai membuat masalah", b: "Mampu memecahkan masalah dengan solusi kreatif", c: "Menghindari masalah", d: "Menyalahkan orang lain saat ada masalah", e: "Menunggu bantuan orang lain" }, answer: "b" },
        { text: "Faktor internal yang mempengaruhi ide usaha adalah...", options: { a: "Kebutuhan pasar", b: "Pengetahuan dan pengalaman pribadi", c: "Masalah yang dihadapi orang lain", d: "Permintaan konsumen", e: "Persaingan bisnis" }, answer: "b" },
        { text: "Etika bisnis sangat penting karena...", options: { a: "Agar bisa menipu konsumen", b: "Membangun kepercayaan jangka panjang dengan stakeholder", c: "Hanya formalitas saja", d: "Menghambat kreativitas", e: "Menambah biaya operasional" }, answer: "b" },
        { text: "Istilah 'Entrepreneurship' pertama kali diperkenalkan oleh...", options: { a: "Adam Smith", b: "Richard Cantillon", c: "Steve Jobs", d: "Bill Gates", e: "Robert Kiyosaki" }, answer: "b" },
        { text: "Berikut yang bukan merupakan sifat wirausaha adalah...", options: { a: "Disiplin", b: "Jujur", c: "Konsumtif", d: "Mandiri", e: "Realistis" }, answer: "c" },
        { text: "Analisis yang digunakan untuk memetakan kekuatan dan kelemahan usaha disebut...", options: { a: "Analisis Pasar", b: "Analisis SWOT", c: "Analisis Biaya", d: "Analisis Produk", e: "Analisis SDM" }, answer: "b" },
        { text: "Visi dalam bisnis adalah...", options: { a: "Langkah jangka pendek", b: "Tujuan jangka panjang yang ingin dicapai", c: "Cara memproduksi barang", d: "Daftar karyawan", e: "Jumlah modal awal" }, answer: "b" },
        { text: "Misi dalam bisnis adalah...", options: { a: "Cita-cita masa depan", b: "Langkah-langkah nyata untuk mencapai visi", c: "Logo perusahaan", d: "Warna kantor", e: "Harga produk" }, answer: "b" },
        { text: "Mentalitas 'Growth Mindset' artinya...", options: { a: "Percaya kemampuan tidak bisa diubah", b: "Percaya bahwa kemampuan bisa dikembangkan melalui belajar", c: "Selalu merasa paling benar", d: "Takut mencoba hal baru", e: "Hanya fokus pada bakat lahir" }, answer: "b" },
        { text: "Sikap jujur dalam berwirausaha akan berdampak pada...", options: { a: "Kerugian finansial", b: "Reputasi yang baik dan kepercayaan pelanggan", c: "Persaingan yang tidak sehat", d: "Keluarnya karyawan", e: "Naiknya harga bahan baku" }, answer: "b" },
        { text: "Manakah yang merupakan contoh wirausaha di bidang jasa?", options: { a: "Toko roti", b: "Bengkel motor", c: "Pabrik sepatu", d: "Peternakan ayam", e: "Kebun sayur" }, answer: "b" },
        { text: "Kemampuan melihat peluang disebut...", options: { a: "Opportunity Recognition", b: "Risk Management", c: "Financial Planning", d: "Technical Skill", e: "Marketing Strategy" }, answer: "a" },
        { text: "Risiko yang dihadapi wirausaha bisa berupa...", options: { a: "Hanya keuntungan", b: "Kerugian finansial dan kegagalan pasar", c: "Kepastian masa depan", d: "Ketenangan tanpa kerja keras", e: "Hadiah gratis dari pemerintah" }, answer: "b" },
        { text: "Seorang wirausaha yang fokus pada lingkungan disebut...", options: { a: "Social Entrepreneur", b: "Ecopreneur", c: "Technopreneur", d: "Intrapreneur", e: "Creativepreneur" }, answer: "b" },
        { text: "Wirausaha yang menggunakan teknologi digital disebut...", options: { a: "Traditionalpreneur", b: "Technopreneur", c: "Agropreneur", d: "Sociopreneur", e: "Artpreneur" }, answer: "b" },
        { text: "Keberanian mengambil risiko harus disertai dengan...", options: { a: "Keberuntungan semata", b: "Perhitungan dan analisis yang matang", c: "Modal yang dipinjam tanpa batas", d: "Sifat sombong", e: "Ketidaktahuan" }, answer: "b" },
        { text: "Kreativitas adalah kemampuan untuk...", options: { a: "Bekerja sangat keras", b: "Menghasilkan ide-ide baru yang unik", c: "Menghafal teori bisnis", d: "Meminjam uang ke bank", e: "Meniru kompetitor" }, answer: "b" },
        { text: "Dalam wirausaha, kegagalan sebaiknya dianggap sebagai...", options: { a: "Akhir dari segalanya", b: "Pelajaran untuk perbaikan di masa depan", c: "Aib yang harus disembunyikan", d: "Tanda untuk berhenti", e: "Kesalahan orang lain" }, answer: "b" },
        { text: "Fokus pada pelanggan (Customer Focus) berarti...", options: { a: "Mengabaikan keluhan pelanggan", b: "Memahami dan memenuhi kebutuhan pelanggan", c: "Mencari keuntungan sebesar-besarnya tanpa peduli kualitas", d: "Memaksa pelanggan membeli", e: "Menurunkan harga terus menerus" }, answer: "b" },
        { text: "Networking dalam bisnis bermanfaat untuk...", options: { a: "Mencari musuh", b: "Membangun relasi dan kolaborasi", c: "Menambah beban pikiran", d: "Menghabiskan waktu luang", e: "Memamerkan kesuksesan" }, answer: "b" },
        { text: "Disiplin waktu bagi wirausaha sangat penting untuk...", options: { a: "Menakuti karyawan", b: "Meningkatkan produktivitas dan profesionalisme", c: "Menghemat biaya listrik", d: "Terlihat sibuk di depan orang lain", e: "Mendapatkan pujian" }, answer: "b" },
        { text: "Wirausaha mandiri artinya...", options: { a: "Tidak mau dibantu siapapun", b: "Mampu mengambil keputusan dan mengelola usaha sendiri", c: "Selalu menunggu perintah", d: "Bekerja sendirian tanpa tim selamanya", e: "Mengandalkan warisan" }, answer: "b" },
        { text: "Apa peran wirausaha dalam perekonomian negara?", options: { a: "Menambah pengangguran", b: "Menciptakan lapangan kerja dan meningkatkan pendapatan nasional", c: "Mengurangi persaingan", d: "Menghambat ekspor", e: "Menurunkan daya beli" }, answer: "b" }
    ],
    // Bab 2: Peluang Usaha (30 Soal)
    "2": [
        { text: "Apa langkah pertama dalam menentukan peluang usaha?", options: { a: "Membeli peralatan mahal", b: "Melakukan riset pasar dan observasi kebutuhan", c: "Meminjam modal besar", d: "Menyewa ruko", e: "Mencari karyawan" }, answer: "b" },
        { text: "Analisis SWOT terdiri dari...", options: { a: "Strong, Weak, Open, Time", b: "Strengths, Weaknesses, Opportunities, Threats", c: "Simple, Wow, Original, Trust", d: "Style, Work, Object, Target", e: "Smart, Win, Option, Task" }, answer: "b" },
        { text: "Manakah yang termasuk faktor eksternal dalam SWOT?", options: { a: "Kekuatan dan Kelemahan", b: "Peluang dan Ancaman", c: "Keahlian Karyawan", d: "Jumlah Modal", e: "Lokasi Kantor" }, answer: "b" },
        { text: "Apa yang dimaksud dengan 'Blue Ocean Strategy'?", options: { a: "Bersaing di pasar yang sudah sangat padat", b: "Menciptakan ruang pasar baru yang belum ada pesaingnya", c: "Berbisnis di laut", d: "Menurunkan harga serendah-rendahnya", e: "Menggunakan warna biru untuk branding" }, answer: "b" },
        { text: "Peluang usaha bisa muncul dari 'Problem Solving', contohnya...", options: { a: "Membuat produk yang sudah banyak di pasar", b: "Menciptakan solusi untuk masalah kemacetan (seperti ojek online)", c: "Menunggu orang lain membuat ide baru", d: "Menjual barang hobi pribadi saja", e: "Membeli saham perusahaan besar" }, answer: "b" },
        { text: "Studi kelayakan usaha bertujuan untuk...", options: { a: "Mencari kesalahan orang lain", b: "Menilai apakah sebuah ide usaha layak dijalankan secara finansial dan teknis", c: "Menambah waktu perencanaan agar tidak bekerja", d: "Mendapatkan izin dari pemerintah saja", e: "Membuat laporan palsu untuk investor" }, answer: "b" },
        { text: "Segmen pasar adalah...", options: { a: "Tempat berjualan", b: "Kelompok konsumen yang memiliki karakteristik atau kebutuhan serupa", c: "Jumlah total penduduk dunia", d: "Daftar pesaing terberat", e: "Nama merk produk" }, answer: "b" },
        { text: "Target pasar ditentukan berdasarkan...", options: { a: "Keinginan pemilik saja", b: "Demografi, geografi, psikografi, dan perilaku konsumen", c: "Warna favorit pemilik", d: "Abjad nama konsumen", e: "Tanggal lahir pemilik" }, answer: "b" },
        { text: "Unique Selling Proposition (USP) adalah...", options: { a: "Harga yang paling murah", b: "Nilai unik yang membedakan produk kita dari pesaing", c: "Cara membungkus paket", d: "Jumlah karyawan yang banyak", e: "Alamat website perusahaan" }, answer: "b" },
        { text: "Analisis kompetitor dilakukan untuk...", options: { a: "Meniru semua strategi mereka", b: "Memahami kekuatan dan kelemahan pesaing untuk mencari celah", c: "Mengajak berkelahi", d: "Menutup usaha mereka", e: "Memuji keberhasilan mereka saja" }, answer: "b" },
        { text: "Peluang usaha yang bersifat musiman contohnya...", options: { a: "Jual beras", b: "Jual kue kering menjelang Lebaran", c: "Jual pulsa listrik", d: "Jasa potong rambut", e: "Cuci mobil" }, answer: "b" },
        { text: "Resiko usaha yang tidak dapat dihindari tetapi dapat diminimalisir adalah...", options: { a: "Resiko teknis", b: "Perubahan tren pasar secara tiba-tiba", c: "Kesalahan hitung manual", d: "Kelalaian karyawan", e: "Kebakaran karena kabel pendek" }, answer: "b" },
        { text: "Sumber peluang usaha dari diri sendiri adalah...", options: { a: "Berita di televisi", b: "Hobi dan keahlian yang ditekuni", c: "Keluhan teman", d: "Saran dari orang tua", e: "Melihat pameran" }, answer: "b" },
        { text: "Ide usaha yang baik harus memiliki nilai...", options: { a: "Hanya seni", b: "Ekonomis dan kemanfaatan", c: "Mahal harganya", d: "Banyak warnanya", e: "Susah dibuat" }, answer: "b" },
        { text: "Dalam BMC (Business Model Canvas), 'Value Proposition' menjawab pertanyaan...", options: { a: "Siapa pelanggan kita?", b: "Masalah apa yang kita selesaikan dan apa manfaat produk kita?", c: "Lewat mana kita jualan?", d: "Dari mana modalnya?", e: "Siapa partner kita?" }, answer: "b" },
        { text: "Peluang usaha dari perubahan regulasi pemerintah disebut...", options: { a: "Peluang teknis", b: "Peluang politik/legal", c: "Peluang sosial", d: "Peluang alam", e: "Peluang hobi" }, answer: "b" },
        { text: "Metode observasi pasar bisa dilakukan dengan...", options: { a: "Tidur di rumah", b: "Melakukan survei, wawancara, dan pengamatan langsung", c: "Membaca komik", d: "Melihat ramalan bintang", e: "Membayangkan saja" }, answer: "b" },
        { text: "Ciri-ciri peluang usaha yang potensial adalah...", options: { a: "Hanya tren sesaat", b: "Memiliki nilai jual tinggi dan berkelanjutan", c: "Meniru produk lama tanpa perubahan", d: "Membutuhkan modal triliunan sejak awal", e: "Susah dipasarkan" }, answer: "b" },
        { text: "Faktor kegagalan dalam menangkap peluang usaha adalah...", options: { a: "Cepat mengambil keputusan berdasarkan data", b: "Terlalu lama ragu-ragu dan takut mencoba", c: "Memiliki tim yang solid", d: "Melakukan inovasi terus menerus", e: "Memahami keinginan pasar" }, answer: "b" },
        { text: "Peluang usaha di era digital banyak muncul di bidang...", options: { a: "Pertanian tradisional", b: "E-commerce dan jasa konten kreatif", c: "Industri berat", d: "Pertambangan manual", e: "Perburuan liar" }, answer: "b" },
        { text: "Analisis lokasi usaha sangat penting untuk bisnis...", options: { a: "Jasa online murni", b: "Toko fisik atau retail", c: "Software development", d: "Penulisan artikel", e: "Desain grafis freelance" }, answer: "b" },
        { text: "Seorang wirausaha harus adaptif, artinya...", options: { a: "Kaku pada rencana awal", b: "Mampu menyesuaikan diri dengan perubahan pasar", c: "Mudah dipengaruhi orang lain tanpa prinsip", d: "Sering berganti-ganti jenis usaha tanpa fokus", e: "Menolak teknologi baru" }, answer: "b" },
        { text: "Peluang usaha yang muncul dari kemajuan teknologi disebut...", options: { a: "Inovasi inkremental", b: "Technopreneurship opportunity", c: "Social opportunity", d: "Natural opportunity", e: "Personal opportunity" }, answer: "b" },
        { text: "Manakah yang merupakan ancaman (Threat) dalam SWOT?", options: { a: "Modal yang banyak", b: "Munculnya kompetitor baru dengan harga lebih murah", c: "Kualitas produk yang bagus", d: "Pelayanan yang ramah", e: "Tim yang ahli" }, answer: "b" },
        { text: "Kebutuhan manusia yang tidak terbatas menciptakan...", options: { a: "Masalah ekonomi", b: "Peluang usaha yang terus berkembang", c: "Kemiskinan permanen", d: "Berhentinya produksi", e: "Hilangnya kreativitas" }, answer: "b" },
        { text: "Analisis 'Payback Period' digunakan untuk mengetahui...", options: { a: "Berapa lama modal akan kembali", b: "Berapa jumlah karyawan", c: "Nama supplier terbaik", d: "Warna kemasan", e: "Alamat gudang" }, answer: "a" },
        { text: "Peluang usaha di bidang kuliner biasanya fokus pada...", options: { a: "Hanya rasa", b: "Rasa, keunikan, kebersihan, dan kemasan", c: "Harga paling mahal", d: "Lokasi yang tersembunyi", e: "Tanpa promosi" }, answer: "b" },
        { text: "Istilah 'Red Ocean' dalam bisnis berarti...", options: { a: "Pasar baru yang tenang", b: "Pasar yang penuh persaingan ketat/berdarah-darah", c: "Bisnis di bidang perikanan", d: "Warna logo perusahaan", e: "Nama merk minuman" }, answer: "b" },
        { text: "Inspirasi peluang usaha bisa datang dari 'Cross-industry', artinya...", options: { a: "Melihat ide dari industri berbeda dan menerapkannya di industri kita", b: "Bekerja di pabrik", c: "Berhenti berbisnis", d: "Meniru produk sejenis", e: "Mencari kerja di luar negeri" }, answer: "a" },
        { text: "Seorang wirausaha yang baik selalu melihat hambatan sebagai...", options: { a: "Alasan untuk berhenti", b: "Tantangan dan peluang baru", c: "Nasib buruk", d: "Kesalahan pemerintah", e: "Beban hidup" }, answer: "b" }
    ],
    // Bab 3: Desain & Kemasan (30 Soal)
    "3": [
        { text: "Apa fungsi utama dari kemasan produk?", options: { a: "Hanya agar terlihat bagus", b: "Melindungi produk dan menjadi media informasi/promosi", c: "Menambah berat produk agar mahal", d: "Menyulitkan konsumen membuka barang", e: "Menghabiskan biaya produksi" }, answer: "b" },
        { text: "Design Thinking dimulai dengan tahap...", options: { a: "Ideation", b: "Empathize (Memahami pengguna)", c: "Prototype", d: "Testing", e: "Define" }, answer: "b" },
        { text: "Warna merah dalam desain kemasan sering memberikan kesan...", options: { a: "Dingin dan tenang", b: "Energi, semangat, dan nafsu makan", c: "Mewah dan elegan", d: "Alami dan organik", e: "Sedih dan duka" }, answer: "b" },
        { text: "Bahan kemasan yang ramah lingkungan disebut...", options: { a: "Plastik sekali pakai", b: "Biodegradable/Eco-friendly", c: "Styrofoam", d: "Aluminium foil tebal", e: "Plastik PVC" }, answer: "b" },
        { text: "Label pada kemasan harus mencantumkan informasi berikut, kecuali...", options: { a: "Nama produk", b: "Komposisi", c: "Tanggal kedaluwarsa", d: "Alamat rumah seluruh karyawan", e: "Izin edar (P-IRT/BPOM)" }, answer: "d" },
        { text: "Tujuan dari pembuatan prototipe kemasan adalah...", options: { a: "Langsung dijual ke pasar massal", b: "Menguji bentuk, kekuatan, dan tampilan sebelum diproduksi massal", c: "Membuang-buang bahan baku", d: "Formalitas tugas sekolah", e: "Menipu calon pembeli" }, answer: "b" },
        { text: "Typography dalam desain berarti...", options: { a: "Seni memilih dan menata huruf", b: "Cara memotret produk", c: "Memilih bahan plastik", d: "Menentukan harga jual", e: "Menggambar logo dengan tangan" }, answer: "a" },
        { text: "Logo yang hanya terdiri dari teks disebut...", options: { a: "Pictorial Mark", b: "Wordmark (Logotype)", c: "Abstract Mark", d: "Emblem", e: "Mascot" }, answer: "b" },
        { text: "Kemasan sekunder adalah...", options: { a: "Kemasan yang bersentuhan langsung dengan produk", b: "Kemasan yang melindungi kemasan primer", c: "Kemasan untuk pengiriman peti kemas", d: "Kemasan dari bahan bekas", e: "Kemasan tanpa label" }, answer: "b" },
        { text: "Salah satu kriteria desain kemasan yang baik adalah 'Convenience', artinya...", options: { a: "Sangat mahal", b: "Memberikan kemudahan bagi konsumen (mudah dibuka/dibawa)", c: "Warna yang mencolok sekali", d: "Ukuran yang sangat besar", e: "Bentuk yang sangat rumit" }, answer: "b" },
        { text: "Brand Identity adalah...", options: { a: "Nama pemilik perusahaan", b: "Kumpulan elemen visual yang membangun citra sebuah merk", c: "Jumlah cabang toko", d: "Harga barang di diskon", e: "Lokasi pabrik" }, answer: "b" },
        { text: "Dalam desain, 'White Space' berfungsi untuk...", options: { a: "Menghemat tinta printer", b: "Memberi ruang napas agar desain tidak terlihat penuh dan sesak", c: "Menandakan desain belum selesai", d: "Menambah biaya desain", e: "Tempat menaruh iklan tambahan" }, answer: "b" },
        { text: "Kemasan yang digunakan untuk melindungi produk saat pengiriman jarak jauh disebut...", options: { a: "Kemasan primer", b: "Kemasan sekunder", c: "Kemasan tersier/distribusi", d: "Kemasan cantik", e: "Kemasan hias" }, answer: "c" },
        { text: "Material kemasan kaca memiliki kelebihan...", options: { a: "Ringan dan tidak pecah", b: "Transparan, mewah, dan kedap udara", c: "Sangat murah", d: "Mudah dibentuk tanpa pemanasan", e: "Bisa dimakan" }, answer: "b" },
        { text: "Ergonomi dalam desain produk/kemasan berkaitan dengan...", options: { a: "Harga bahan", b: "Kenyamanan dan kecocokan penggunaan bagi manusia", c: "Jumlah warna yang digunakan", d: "Asal negara produk", e: "Kecepatan mesin produksi" }, answer: "b" },
        { text: "Warna hijau dalam branding sering digunakan untuk produk...", options: { a: "Teknologi canggih", b: "Kesehatan, alam, dan organik", c: "Perhiasan mewah", d: "Makanan pedas", e: "Otomotif" }, answer: "b" },
        { text: "Psikologi warna 'Gold/Emas' biasanya melambangkan...", options: { a: "Kesenangan anak-anak", b: "Kemewahan, kualitas tinggi, dan eksklusivitas", c: "Kebersihan", d: "Kepercayaan", e: "Bahaya" }, answer: "b" },
        { text: "Salah satu software populer untuk desain vektor (logo) adalah...", options: { a: "Microsoft Excel", b: "Adobe Illustrator / CorelDRAW", c: "Notepad", d: "Windows Media Player", e: "Calculator" }, answer: "b" },
        { text: "Visual Hierarchy dalam desain bertujuan untuk...", options: { a: "Membuat semua tulisan berukuran sama", b: "Mengarahkan pandangan mata ke informasi yang paling penting dahulu", c: "Menyembunyikan harga produk", d: "Menggunakan semua jenis font", e: "Memperkecil ukuran logo" }, answer: "b" },
        { text: "Prototype kemasan yang dibuat dari kertas disebut...", options: { a: "Metal model", b: "Mockup", c: "Final product", d: "Raw material", e: "Sketch" }, answer: "b" },
        { text: "Informasi nilai gizi (Nutrition Facts) wajib ada di kemasan...", options: { a: "Pakaian", b: "Makanan dan Minuman", c: "Alat elektronik", d: "Furniture", e: "Sepatu" }, answer: "b" },
        { text: "Daya tarik visual (Visual Appeal) penting agar...", options: { a: "Produk cepat rusak", b: "Produk dilirik dan menarik minat beli konsumen di rak toko", c: "Menambah beban pajak", d: "Menghindari pemeriksaan BPOM", e: "Meniru produk luar negeri" }, answer: "b" },
        { text: "Packaging 'Aseptic' biasanya digunakan untuk...", options: { a: "Susu kotak agar tahan lama tanpa pengawet", b: "Keripik singkong", c: "Baju kaos", d: "Sabun batang", e: "Buku tulis" }, answer: "a" },
        { text: "Desain minimalis ditandai dengan...", options: { a: "Banyak ornamen dan warna", b: "Kesederhanaan, fokus pada fungsi, dan sedikit elemen", c: "Harga yang sangat murah", d: "Kualitas yang buruk", e: "Tanpa merk" }, answer: "b" },
        { text: "Fungsi edukasi pada kemasan contohnya...", options: { a: "Gambar artis", b: "Cara penggunaan atau cara memasak produk", c: "Barcode harga", d: "Alamat website", e: "Warna background" }, answer: "b" },
        { text: "Barcode/QR Code pada kemasan berguna untuk...", options: { a: "Hiasan saja", b: "Pelacakan stok (inventory) dan informasi produk digital", c: "Menutupi lubang kemasan", d: "Menambah luas kemasan", e: "Mengganti nama produk" }, answer: "b" },
        { text: "Istilah 'Eco-design' berarti desain yang...", options: { a: "Murah sekali harganya", b: "Memperhatikan dampak lingkungan selama siklus hidup produk", c: "Hanya menggunakan warna hijau", d: "Dibuat oleh orang desa", e: "Tidak laku di pasar" }, answer: "b" },
        { text: "Kemasan yang bisa digunakan kembali disebut...", options: { a: "Disposable", b: "Reusable", c: "Recyclable", d: "Degradable", e: "Toxic" }, answer: "b" },
        { text: "Pentingnya 'Consistency' dalam desain merk adalah agar...", options: { a: "Konsumen bingung", b: "Merk mudah dikenali dan diingat (Brand Awareness)", c: "Desainer tidak lelah", d: "Hemat biaya cetak", e: "Warna selalu berubah tiap hari" }, answer: "b" },
        { text: "Apa itu 'Moodboard' dalam proses desain?", options: { a: "Papan untuk menulis keluhan", b: "Kumpulan gambar, warna, dan tekstur sebagai referensi visual", c: "Daftar harga bahan", d: "Jadwal kerja harian", e: "Laporan keuangan" }, answer: "b" }
    ],
    // Bab 4: HAKI (30 Soal)
    "4": [
        { text: "Apa kepanjangan dari HAKI?", options: { a: "Hak Atas Keamanan Indonesia", b: "Hak Atas Kekayaan Intelektual", c: "Himpunan Anak Kreatif Indonesia", d: "Hak Asasi Keluarga Indonesia", e: "Hukum Adat Kekayaan Indonesia" }, answer: "b" },
        { text: "Berapa lama masa perlindungan Hak Cipta atas buku setelah penciptanya meninggal dunia?", options: { a: "10 Tahun", b: "70 Tahun", c: "20 Tahun", d: "Selamanya", e: "5 Tahun" }, answer: "b" },
        { text: "Merek (Trademark) dilindungi selama...", options: { a: "10 tahun dan dapat diperpanjang", b: "20 tahun saja", c: "Selamanya tanpa syarat", d: "Hanya 2 tahun", e: "Seumur hidup pemilik" }, answer: "a" },
        { text: "Simbol (R) dalam lingkaran pada sebuah merk artinya...", options: { a: "Reject (Ditolak)", b: "Registered (Terdaftar secara resmi)", c: "Rare (Langka)", d: "Repair (Dalam perbaikan)", e: "Recycle (Daur ulang)" }, answer: "b" },
        { text: "Hak eksklusif yang diberikan negara kepada penemu atas hasil penemuannya di bidang teknologi disebut...", options: { a: "Hak Cipta", b: "Paten", c: "Hak Merk", d: "Desain Industri", e: "Rahasia Dagang" }, answer: "b" },
        { text: "Plagiarisme adalah tindakan...", options: { a: "Membeli karya orang lain secara sah", b: "Menjiplak karya orang lain tanpa izin dan mengakui sebagai karya sendiri", c: "Memuji karya orang lain", d: "Berbagi inspirasi secara terbuka", e: "Melindungi karya sendiri" }, answer: "b" },
        { text: "Lembaga di Indonesia yang mengelola pendaftaran HAKI adalah...", options: { a: "KPK", b: "DJKI (Direktorat Jenderal Kekayaan Intelektual)", c: "KPU", b: "POLRI", e: "BNN" }, answer: "b" },
        { text: "Hak Cipta melindungi karya di bidang...", options: { a: "Penemuan mesin baru", b: "Ilmu pengetahuan, seni, dan sastra", c: "Formula resep rahasia", d: "Sistem manajemen perusahaan", e: "Nama brand perusahaan" }, answer: "b" },
        { text: "Rahasia Dagang (Trade Secret) dilindungi selama...", options: { a: "20 tahun", b: "Selama rahasia tersebut tetap terjaga/tidak bocor", c: "10 tahun", d: "70 tahun", e: "Hanya 1 tahun" }, answer: "b" },
        { text: "Contoh pelanggaran HAKI di bidang musik adalah...", options: { a: "Membeli kaset asli", b: "Pembajakan lagu dan mengunduh secara ilegal", c: "Menonton konser resmi", d: "Mendengarkan radio", e: "Bernyanyi di kamar mandi" }, answer: "b" },
        { text: "Desain Industri melindungi...", options: { a: "Isi buku", b: "Bentuk, konfigurasi, atau komposisi garis dan warna yang memberikan kesan estetis pada produk", c: "Cara kerja mesin dalam", d: "Nama toko", e: "Lagu tema iklan" }, answer: "b" },
        { text: "HAKI memberikan 'Economic Right', artinya...", options: { a: "Hak untuk menjadi presiden", b: "Hak untuk mendapatkan keuntungan finansial dari karya tersebut", c: "Hak untuk berhemat", d: "Hak untuk mencetak uang sendiri", e: "Hak untuk tidak membayar pajak" }, answer: "b" },
        { text: "Simbol (C) dalam lingkaran melambangkan...", options: { a: "Company", b: "Copyright (Hak Cipta)", c: "Currency", d: "Control", e: "Creative" }, answer: "b" },
        { text: "Prinsip 'First to File' dalam pendaftaran merk berarti...", options: { a: "Siapa yang pertama memakai dia yang punya", b: "Siapa yang pertama mendaftarkan ke negara dia yang berhak atas hak tersebut", c: "Siapa yang paling kaya dia yang menang", d: "Siapa yang paling terkenal dia yang punya", e: "Semua orang boleh pakai" }, answer: "b" },
        { text: "Paten Sederhana diberikan untuk penemuan yang...", options: { a: "Sangat rumit dan revolusioner", b: "Memiliki pengembangan dari produk yang sudah ada dan lebih praktis", c: "Hanya berupa tulisan", d: "Tidak berguna bagi masyarakat", e: "Berumur 100 tahun" }, answer: "b" },
        { text: "Hak Moral (Moral Right) dalam hak cipta adalah hak untuk...", options: { a: "Menjual karya", b: "Nama pencipta tetap dicantumkan pada karyanya", c: "Membakar karya orang lain", d: "Mengubah isi tanpa izin", e: "Menghapus nama pencipta" }, answer: "b" },
        { text: "Indikasi Geografis melindungi produk berdasarkan...", options: { a: "Nama pemilik", b: "Asal daerah yang memberikan ciri dan kualitas tertentu (contoh: Kopi Gayo, Batik Solo)", c: "Harga barang", d: "Warna produk", e: "Tanggal pembuatan" }, answer: "b" },
        { text: "Mendaftarkan HAKI sangat penting bagi wirausaha untuk...", options: { a: "Menghindari pajak", b: "Melindungi ide/merk dari pencurian/klaim orang lain", c: "Gaya-gayaan saja", d: "Menambah beban administrasi", e: "Menurunkan harga jual" }, answer: "b" },
        { text: "Lisensi adalah...", options: { a: "Tindakan mencuri karya", b: "Izin yang diberikan pemilik HAKI kepada pihak lain untuk menggunakan karyanya dengan syarat tertentu", c: "Sertifikat kelulusan sekolah", d: "Kartu tanda penduduk", e: "Surat izin mengemudi" }, answer: "b" },
        { text: "Royalti adalah...", options: { a: "Gaji tetap bulanan", b: "Imbalan yang dibayarkan atas penggunaan hak kekayaan intelektual", c: "Hadiah ulang tahun", d: "Denda pelanggaran hukum", e: "Pajak bumi dan bangunan" }, answer: "b" },
        { text: "Pelanggaran HAKI dapat dikenakan sanksi berupa...", options: { a: "Hanya teguran lisan", b: "Denda materiil hingga hukuman penjara", c: "Pujian dari masyarakat", d: "Kenaikan pangkat", e: "Hadiah dari negara" }, answer: "b" },
        { text: "Karya yang sudah habis masa perlindungannya disebut...", options: { a: "Karya ilegal", b: "Public Domain (Milik Umum)", c: "Karya rahasia", d: "Karya baru", e: "Karya hilang" }, answer: "b" },
        { text: "Paten dilindungi selama...", options: { a: "10 tahun", b: "20 tahun", c: "50 tahun", d: "70 tahun", e: "100 tahun" }, answer: "b" },
        { text: "Syarat penemuan dapat dipatenkan adalah...", options: { a: "Sudah umum diketahui", b: "Baru, mengandung langkah inventif, dan dapat diterapkan dalam industri", c: "Sangat murah harganya", d: "Bagus tampilannya", e: "Dibuat oleh artis" }, answer: "b" },
        { text: "Tata Letak Sirkuit Terpadu termasuk dalam perlindungan...", options: { a: "Hak Cipta", b: "HAKI", c: "Hak Asasi", d: "Hak Waris", e: "Hak Dagang" }, answer: "b" },
        { text: "Merek Dagang digunakan untuk...", options: { a: "Membedakan barang sejenis yang diproduksi orang/badan hukum berbeda", b: "Menghias kemasan", c: "Menulis alamat", d: "Menghitung laba", e: "Mencatat hutang" }, answer: "a" },
        { text: "Simbol TM (Trademark) biasanya digunakan untuk...", options: { a: "Merk yang sudah resmi terdaftar", b: "Merk yang sedang dalam proses pendaftaran atau belum terdaftar resmi", c: "Merk yang sudah bangkrut", d: "Merk luar negeri", e: "Merk ilegal" }, answer: "b" },
        { text: "HAKI bersifat 'Territorial', artinya...", options: { a: "Berlaku di seluruh alam semesta", b: "Hanya berlaku di negara tempat hak tersebut didaftarkan", c: "Berlaku hanya di satu kota", d: "Berlaku hanya untuk pemilik tanah", e: "Tanpa batasan wilayah" }, answer: "b" },
        { text: "Berikut adalah contoh Rahasia Dagang, kecuali...", options: { a: "Resep bumbu ayam goreng terkenal", b: "Daftar pelanggan rahasia", c: "Metode produksi yang unik dan tertutup", d: "Lirik lagu yang sudah dipublikasikan", e: "Teknologi pengolahan limbah internal perusahaan" }, answer: "d" },
        { text: "WIPO adalah organisasi dunia yang menangani...", options: { a: "Kesehatan", b: "Kekayaan Intelektual (World Intellectual Property Organization)", c: "Perdagangan senjata", d: "Olahraga", e: "Pendidikan anak" }, answer: "b" }
    ],
    // Bab 5: Prototipe Produk (30 Soal)
    "5": [
        { text: "Apa yang dimaksud dengan prototipe produk?", options: { a: "Produk akhir yang siap dijual jutaan unit", b: "Model awal atau contoh produk untuk pengujian konsep", c: "Bahan sisa produksi", d: "Iklan produk di televisi", e: "Laporan keuangan tahunan" }, answer: "b" },
        { text: "Tahap pembuatan prototipe dilakukan setelah...", options: { a: "Penjualan produk", b: "Perancangan desain dan ide", c: "Perusahaan bangkrut", d: "Produk rusak", e: "Karyawan demo" }, answer: "b" },
        { text: "Prototipe yang hanya fokus pada tampilan luar tanpa fungsi disebut...", options: { a: "Functional Prototype", b: "Visual Prototype (Mockup)", c: "Working Model", d: "Final Product", e: "Raw Prototype" }, answer: "b" },
        { text: "Tujuan utama pengujian prototipe adalah...", options: { a: "Mendapatkan pujian teman", b: "Menemukan kelemahan dan kesalahan sebelum produksi massal", c: "Mempercepat waktu tidur desainer", d: "Menambah harga jual setinggi mungkin", e: "Menghabiskan anggaran perusahaan" }, answer: "b" },
        { text: "Apa itu 'Alpha Testing'?", options: { a: "Pengujian oleh pengguna umum secara luas", b: "Pengujian internal oleh tim pengembang sendiri", c: "Pengujian oleh pemerintah", d: "Pengujian setelah produk dijual", e: "Tanpa pengujian" }, answer: "b" },
        { text: "Apa itu 'Beta Testing'?", options: { a: "Pengujian oleh tim kecil pengembang", b: "Pengujian oleh sekelompok pengguna luar sebelum rilis resmi", c: "Pembuatan sketsa tangan", d: "Menghancurkan produk", e: "Membeli produk pesaing" }, answer: "b" },
        { text: "Alat yang sering digunakan untuk membuat prototipe fisik 3D secara cepat adalah...", options: { a: "Mesin ketik", b: "3D Printer", c: "Kamera DSLR", d: "Gunting kertas", e: "Obeng" }, answer: "b" },
        { text: "Dalam pengembangan software, prototipe yang bisa diklik disebut...", options: { a: "Static Design", b: "Interactive Prototype", c: "Paper Sketch", d: "Back-end Code", e: "Database" }, answer: "b" },
        { text: "Iterasi dalam pembuatan prototipe artinya...", options: { a: "Berhenti bekerja", b: "Proses pengulangan untuk perbaikan berdasarkan hasil evaluasi", c: "Menyalahkan orang lain", d: "Meminjam uang lagi", e: "Menutup perusahaan" }, answer: "b" },
        { text: "Prototipe 'Low-fidelity' contohnya adalah...", options: { a: "Produk yang sudah jadi 90%", b: "Sketsa di kertas atau wireframe sederhana", c: "Model 3D yang sangat detail", d: "Aplikasi yang sudah bisa digunakan penuh", e: "Video animasi canggih" }, answer: "b" },
        { text: "Kelebihan prototipe 'High-fidelity' adalah...", options: { a: "Sangat murah dan cepat dibuat", b: "Sangat mirip dengan produk asli sehingga feedback lebih akurat", c: "Tidak perlu komputer", d: "Bisa dibuat oleh siapa saja tanpa skill", e: "Hanya butuh waktu 5 menit" }, answer: "b" },
        { text: "Skalabilitas dalam prototipe berarti...", options: { a: "Warna produk", b: "Kemampuan desain untuk diproduksi dalam skala besar", c: "Berat produk", d: "Nama produk", e: "Asal produk" }, answer: "b" },
        { text: "User Experience (UX) dalam prototipe berfokus pada...", options: { a: "Hanya warna logo", b: "Pengalaman dan kemudahan pengguna saat berinteraksi dengan produk", c: "Harga bahan baku", d: "Keuntungan pemilik", e: "Kecepatan kurir" }, answer: "b" },
        { text: "Minimum Viable Product (MVP) adalah...", options: { a: "Produk paling mahal yang pernah dibuat", b: "Versi produk dengan fitur minimal yang sudah bisa memberikan nilai bagi pengguna", c: "Produk yang gagal total", d: "Hanya berupa gambar", e: "Sampah produksi" }, answer: "b" },
        { text: "Feedback dari pengguna saat testing prototipe berguna untuk...", options: { a: "Mengabaikan masukan mereka", b: "Memperbaiki dan menyempurnakan produk agar sesuai kebutuhan pasar", c: "Mendebat pengguna", d: "Menagih uang kepada pengguna", e: "Menghapus fitur yang mereka sukai" }, answer: "b" },
        { text: "Prototipe membantu investor untuk...", options: { a: "Melihat visualisasi ide secara nyata sebelum menanamkan modal", b: "Mencuri ide kita", c: "Memberikan hutang dengan bunga tinggi", d: "Menjadi direktur utama", e: "Membatalkan janji" }, answer: "a" },
        { text: "Dalam desain otomotif, prototipe sering dibuat dari...", options: { a: "Kertas koran", b: "Clay (tanah liat khusus) atau foam", c: "Kaca tipis", d: "Emas murni", e: "Es batu" }, answer: "b" },
        { text: "Proof of Concept (PoC) bertujuan untuk...", options: { a: "Menjual produk", b: "Membuktikan bahwa sebuah ide atau teori secara teknis dapat dijalankan", c: "Menghias ruangan", d: "Menggaji karyawan", e: "Membeli mesin" }, answer: "b" },
        { text: "Metode 'Agile' dalam pengembangan produk menekankan pada...", options: { a: "Perencanaan kaku bertahun-tahun", b: "Pengembangan bertahap dan respon cepat terhadap perubahan", c: "Bekerja sangat lambat", d: "Tanpa diskusi tim", e: "Hanya fokus pada dokumen" }, answer: "b" },
        { text: "Prototipe fungsional (Working Prototype) adalah...", options: { a: "Hanya patung diam", b: "Prototipe yang sudah memiliki fungsi dasar sesuai rencana produk asli", c: "Gambar di komputer", d: "Kotak kosong", e: "Buku manual" }, answer: "b" },
        { text: "Kendala utama dalam pembuatan prototipe biasanya adalah...", options: { a: "Terlalu banyak ide", b: "Waktu dan biaya pengembangan", c: "Kurangnya kertas", d: "Cuaca yang cerah", e: "Banyaknya dukungan" }, answer: "b" },
        { text: "Prototipe digital untuk aplikasi web/mobile sering dibuat menggunakan tool...", options: { a: "Adobe Premiere", b: "Figma / Adobe XD", c: "Microsoft Word", d: "VLC Player", e: "Calculator" }, answer: "b" },
        { text: "Uji coba daya tahan (Durability Test) dilakukan pada prototipe untuk...", options: { a: "Melihat kecantikannya", b: "Mengetahui seberapa kuat produk menahan beban atau penggunaan ekstrim", c: "Menghitung jumlah baut", d: "Menentukan warna", e: "Mencari nama merk" }, answer: "b" },
        { text: "Rapid Prototyping adalah teknik pembuatan prototipe yang...", options: { a: "Sangat lambat", b: "Sangat cepat menggunakan bantuan komputer dan mesin otomatis", c: "Dilakukan secara manual dengan tangan saja", d: "Hanya untuk produk makanan", e: "Tanpa biaya" }, answer: "b" },
        { text: "Evaluasi prototipe harus dilakukan secara...", options: { a: "Subjektif (menurut perasaan saja)", b: "Objektif (berdasarkan data dan hasil tes)", c: "Asal-asalan", d: "Sekali saja seumur hidup", e: "Tanpa catatan" }, answer: "b" },
        { text: "Dokumentasi dalam pembuatan prototipe penting untuk...", options: { a: "Dibakar", b: "Mengetahui sejarah perubahan dan alasan teknis di baliknya", c: "Menuh-menuhi gudang", d: "Menakuti lawan", e: "Bungkus makanan" }, answer: "b" },
        { text: "Wireframe dalam prototipe aplikasi adalah...", options: { a: "Desain penuh warna dan gambar", b: "Kerangka dasar atau tata letak tanpa elemen visual detail", c: "Kabel-kabel di dalam HP", d: "Nama perusahaan pembuat", e: "Tombol power" }, answer: "b" },
        { text: "Prototipe membantu mengurangi risiko...", options: { a: "Keuntungan", b: "Kegagalan produksi massal yang fatal", c: "Kreativitas", d: "Inovasi", e: "Semangat kerja" }, answer: "b" },
        { text: "Seorang wirausaha harus siap melakukan 'Pivot', artinya...", options: { a: "Berhenti total", b: "Merubah strategi atau arah bisnis berdasarkan hasil testing prototipe/pasar", c: "Bekerja di tempat lain", d: "Menyalahkan pasar", e: "Tetap pada ide yang gagal" }, answer: "b" },
        { text: "Langkah akhir setelah prototipe disempurnakan adalah...", options: { a: "Dibuang", b: "Produksi massal dan peluncuran produk (Launch)", c: "Disimpan di lemari", d: "Diberikan ke tetangga", e: "Diganti ide baru lagi" }, answer: "b" }
    ]
};

// ==========================================
// BAGIAN 2: LOGIKA KUIS
// ==========================================

let currentQuestions = [];
let userAnswers = [];

function mulaiKuis() {
    const bab = document.getElementById('bab-select').value;
    let pool = [];

    if (bab === 'semua') {
        // Gabungkan semua bab
        for (let key in quizData) {
            pool = pool.concat(quizData[key]);
        }
    } else {
        pool = quizData[bab];
    }

    // Acak dan ambil 10 soal
    currentQuestions = [...pool].sort(() => 0.5 - Math.random()).slice(0, 10);
    
    // Reset status
    userAnswers = new Array(currentQuestions.length).fill(null);
    
    tampilkanSoal();
    
    document.getElementById('quiz-setup').style.display = 'none';
    document.getElementById('quiz-active').style.display = 'block';
    
    const subtitle = bab === 'semua' ? 'Semua Bab (Campuran)' : 'Bab ' + bab;
    document.getElementById('quiz-subtitle').innerText = 'Materi: ' + subtitle;
    
    // Animasi masuk
    const activeView = document.getElementById('quiz-active');
    activeView.classList.remove('animate-in');
    void activeView.offsetWidth; // trigger reflow
    activeView.classList.add('animate-in');
}

function tampilkanSoal() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '';

    currentQuestions.forEach((q, index) => {
        const questionCard = document.createElement('div');
        questionCard.className = 'quiz-question-card animate-in';
        questionCard.style.animationDelay = (index * 0.1) + 's';

        let optionsHtml = '';
        for (const [key, value] of Object.entries(q.options)) {
            optionsHtml += `
                <label class="option-label">
                    <input type="radio" name="q${index}" value="${key}" onchange="simpanJawaban(${index}, '${key}')">
                    <span class="custom-radio"></span>
                    <span class="option-text"><strong>${key.toUpperCase()}.</strong> ${value}</span>
                </label>
            `;
        }

        questionCard.innerHTML = `
            <div class="question-text">
                <span>${index + 1}.</span> ${q.text}
            </div>
            <div class="options-group">
                ${optionsHtml}
            </div>
        `;
        container.appendChild(questionCard);
    });
}

function simpanJawaban(index, answer) {
    userAnswers[index] = answer;
}

function hitungSkor() {
    // Validasi apakah sudah dijawab semua
    const belumDijawab = userAnswers.filter(a => a === null).length;
    if (belumDijawab > 0) {
        alert('Mohon jawab semua soal (Tersisa ' + belumDijawab + ' soal lagi)');
        return;
    }

    let benar = 0;
    currentQuestions.forEach((q, index) => {
        if (userAnswers[index] === q.answer) {
            benar++;
        }
    });

    const skor = (benar / currentQuestions.length) * 100;
    tampilkanHasil(skor, benar, currentQuestions.length - benar);
}

function tampilkanHasil(skor, benar, salah) {
    document.getElementById('quiz-active').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';
    
    // Update Ringkasan
    document.getElementById('score-text').innerText = Math.round(skor);
    document.getElementById('stat-correct').innerText = benar;
    document.getElementById('stat-wrong').innerText = salah;

    // Update Pesan Motivasi
    const resultMessage = document.getElementById('result-message');
    if (skor >= 80) {
        resultMessage.innerText = "Luar Biasa! Pertahankan prestasimu!";
    } else if (skor >= 60) {
        resultMessage.innerText = "Bagus! Teruslah belajar dan berlatih.";
    } else {
        resultMessage.innerText = "Jangan menyerah! Coba pelajari materi lagi.";
    }

    // Tampilkan Review
    const reviewContainer = document.getElementById('quiz-review');
    reviewContainer.innerHTML = '';

    currentQuestions.forEach((q, index) => {
        const userChoice = userAnswers[index];
        const isCorrect = userChoice === q.answer;
        
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'wrong'}`;

        let optionsHtml = '';
        for (const [key, value] of Object.entries(q.options)) {
            let statusClass = "";
            let icon = "";
            
            if (key === q.answer) {
                statusClass = "correct-option";
                icon = '<i class="fas fa-check-circle"></i> ';
            } else if (key === userChoice && !isCorrect) {
                statusClass = "wrong-option";
                icon = '<i class="fas fa-times-circle"></i> ';
            }
            
            optionsHtml += `
                <div class="review-option ${statusClass}">
                    ${icon} <strong>${key.toUpperCase()}.</strong> ${value}
                </div>
            `;
        }

        reviewItem.innerHTML = `
            <p class="review-question"><span>${index + 1}.</span> ${q.text}</p>
            <div class="review-options">
                ${optionsHtml}
            </div>
            <p class="review-feedback">
                ${isCorrect ? 
                    '<span class="text-success"><i class="fas fa-check"></i> Jawabanmu benar!</span>' : 
                    `<span class="text-danger"><i class="fas fa-times"></i> Jawabanmu salah. Jawaban yang benar adalah <strong>${q.answer.toUpperCase()}</strong></span>`}
            </p>
        `;
        reviewContainer.appendChild(reviewItem);
    });

    // Animasi warna berdasarkan skor
    const scoreCircle = document.querySelector('.score-circle');
    if (scoreCircle) {
        if (skor >= 80) {
            scoreCircle.style.borderColor = '#4caf50';
            scoreCircle.style.color = '#4caf50';
        } else if (skor >= 60) {
            scoreCircle.style.borderColor = '#ff9800';
            scoreCircle.style.color = '#ff9800';
        } else {
            scoreCircle.style.borderColor = '#f44336';
            scoreCircle.style.color = '#f44336';
        }
    }

    // Scroll otomatis ke atas agar user langsung melihat skornya
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function ulangKuis() {
    document.getElementById("quizForm").reset();
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-review').innerHTML = '';
    
    const setupView = document.getElementById('quiz-setup');
    setupView.style.display = 'block';
    
    setupView.classList.remove('animate-in');
    void setupView.offsetWidth;
    setupView.classList.add('animate-in');
}

function kembaliKeMenu() {
    window.location.href = 'beranda.html';
}

// ==========================================
// BAGIAN 3: INISIALISASI & EVENT LISTENERS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const memberCards = document.querySelectorAll('.member-card');
    memberCards.forEach(card => {
        card.addEventListener('click', () => {
            const name = card.getAttribute('data-name');
            const role = card.getAttribute('data-role');
            const age = card.getAttribute('data-age');
            const school = card.getAttribute('data-school');
            const img = card.getAttribute('data-img');
            const bio = card.getAttribute('data-bio');
            
            if (typeof openMemberModal === 'function') {
                openMemberModal(name, role, age, school, img, bio);
            }
        });
    });
});

// Fungsi Modal Member
function openMemberModal(name, role, age, school, img, bio) {
    const modal = document.getElementById('memberModal');
    if (!modal) return;

    document.getElementById('modalName').innerText = name;
    document.getElementById('modalRole').innerText = role;
    document.getElementById('modalAge').innerText = age;
    document.getElementById('modalSchool').innerText = school;
    document.getElementById('modalImg').src = img;
    document.getElementById('modalBio').innerText = bio;

    modal.classList.add('active');
}

function closeMemberModal() {
    const modal = document.getElementById('memberModal');
    if (modal) modal.classList.remove('active');
}

// Tutup modal jika klik di luar area konten
window.addEventListener('click', (event) => {
    const modal = document.getElementById('memberModal');
    if (event.target == modal) {
        closeMemberModal();
    }
});