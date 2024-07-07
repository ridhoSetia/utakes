const waktuMundur = new Audio("sfx/countdown.mp3");
waktuMundur.volume = 0.5;

function playCountDownTimeSfx() {
  waktuMundur.play();
  waktuMundur.loop = true;
}
function stopCountDownTimeSfx() {
  waktuMundur.pause();
  waktuMundur.currentTime = 0;
}

function isTrue() {
  const isTrue = new Audio("sfx/yeay.mp3");
  isTrue.play();
  isTrue.volume = 0.6;
}

function isFalse() {
  const isFalse = new Audio("sfx/ohno.mp3");
  isFalse.play();
}

function lambat() {
  const lambat = new Audio("sfx/lambat.mp3");
  lambat.play();
}

function waterDrop() {
  const drop = new Audio("sfx/water-drop.mp3");
  drop.play();
}

// Array pertanyaan dan jawaban
let pertanyaan = [];

const editQuestion = document.querySelector(".edit-question");
const createButton = document.querySelector("#create");

let videoMateri = document.querySelector(".video-explain video");

function direct() {
  // Array pertanyaan dan jawaban
  pertanyaan = [
    // 1
    {
      soal: "Mengapa rendahnya akses terhadap makanan bergizi tinggi dan menu makanan yang tidak seimbang dapat meningkatkan risiko stunting pada anak?",
      jawaban: [
        "a) karena kurangnya asupan gizi dapat mengganggu pertumbuhan anak",
        "b) Karena faktor genetika anak",
        "c) Karena ibu tidak memiliki cukup uang untuk membeli makanan",
        "d) Karena anak kurang suka makanan bergizi tinggi",
      ],
      jawabanBenar:
        "a) karena kurangnya asupan gizi dapat mengganggu pertumbuhan anak",
    },
    // 2
    {
      soal: "Mengapa ibu perlu memahami konsep gizi sebelum, saat, dan sesudah melahirkan?",
      jawaban: [
        "a) Agar anak memiliki hobi makan makanan sehat",
        "b) Agar ibu bisa memberikan nutrisi yang diperlukan anak",
        "c) Agar ibu tahu cara memberi pelayanan yang baik pada anak",
        "d) Agar anak tidak terkena stunting",
      ],
      jawabanBenar: "b) Agar ibu bisa memberikan nutrisi yang diperlukan anak",
    },
    // 3
    {
      soal: 'Apa yang dimaksud dengan "tidak melakukan perawatan pasca melahirkan" sebagai faktor penyebab stunting?',
      jawaban: [
        "a) Ibu tidak memberi ASI pada bayinya",
        "b) Ibu tidak memberi gizi yang cukup untuk anak",
        "c) Ibu tidak mendukung perkembangan anak secara psikologis",
        "d) Ibu dan bayi tidak mendapatkan perawatan yang di butuh kan setelah persalinan",
      ],
      jawabanBenar:
        "d) Ibu dan bayi tidak mendapatkan perawatan yang di butuh kan setelah persalinan",
    },
    // 4
    {
      soal: "Mengapa gangguan mental dan hipertensi pada ibu dapat berkontribusi terhadap stunting pada anak?",
      jawaban: [
        "a) Gangguan mental membuat anak lebih pendiam",
        "b) Hipertensi membuat anak lebih aktif secara fisik",
        "c) Gangguan mental dan hipertensi dapat memengaruhi nutrisi yang diterima janin",
        "d) Gangguan mental dan hipertensi hanya memengaruhi pertumbuhan fisik anak",
      ],
      jawabanBenar:
        "c) Gangguan mental dan hipertensi dapat memengaruhi nutrisi yang diterima janin",
    },
    // 5
    {
      soal: 'Apa yang dimaksud dengan "sakit infeksi yang berulang" sebagai faktor penyebab stunting?',
      jawaban: [
        "a) Anak sering terluka saat bermain",
        "b) Anak sering sakit karena makan makanan yang tidak higienis",
        "c) Anak sering sakit akibat gigitan serangga",
        "d) Anak sering mengalami gangguan kesehatan",
      ],
      jawabanBenar: "d) Anak sering mengalami gangguan kesehatan",
    },
    // 6
    {
      soal: "Mengapa faktor sanitasi memainkan peran penting dalam meningkatkan risiko stunting?",
      jawaban: [
        "a) Karena sanitasi yang buruk dapat menyebabkan infeksi pada anak",
        "b) Karena sanitasi dapat mengubah faktor genetika anak",
        "c) Karena sanitasi tidak memiliki hubungan dengan kesehatan anak",
        "d) Karena sanitasi hanya memengaruhi anak setelah usia lima tahun",
      ],
      jawabanBenar:
        "a) Karena sanitasi yang buruk dapat menyebabkan infeksi pada anak",
    },
    // 7
    {
      soal: "Yang bisa dilakukan untuk mencegah stunting? kecuali...",
      jawaban: [
        "a) Memahami konsep gizi",
        "b) Melakukan diet ketat untuk mencapai berat badan ideal",
        "c) Mengamati pola makan dengan cermat dan memperhatikan kebutuhan nutrisi",
        "b) Mengikuti program pemeriksaan kesehatan bayi",
      ],
      jawabanBenar: "b) Melakukan diet ketat untuk mencapai berat badan ideal",
    },
    // 8
    {
      soal: "Apa dampak jangka panjang dari stunting terhadap anak?",
      jawaban: [
        "a) Peningkatan potensi kecerdasan emosional",
        "b) Penurunan kapasitas daya ingat",
        "c) Peningkatan resistensi terhadap penyakit autoimun",
        "d) Penurunan minat dalam seni dan kreativitas",
      ],
      jawabanBenar: "b) Penurunan kapasitas daya ingat",
    },
    // 9
    {
      soal: "Di Provinsi Kalimantan Timur, daerah yang memiliki angka stunting tertinggi adalah .......... dengan rata rata 27,1% ",
      jawaban: [
        "a) Kutai Timur",
        "b) Kutai Kartanegara",
        "c) Kutai Barat",
        "d) Paser",
      ],
      jawabanBenar: "b) Kutai Kartanegara",
    },
    // 10
    {
      soal: "Manakah langkah yang dapat diambil dalam rangka mitigasi stunting?",
      jawaban: [
        "a) Pelaksanaan program makanan tinggi lemak",
        "b) Pengurangan ketersediaan air bersih",
        "c) Penekanan pada penggunaan susu",
        "d) Pendidikan gizi untuk ibu hamil dan menyusui",
      ],
      jawabanBenar: "d) Pendidikan gizi untuk ibu hamil dan menyusui",
    },
    // 11
    {
      soal: "Mengapa pendidikan gizi sangat penting untuk para remaja?",
      jawaban: [
        "a) Agar potensi kegemukan dapat diminimalisir",
        "b) Agar mereka memiliki hobi memasak makanan sehat",
        "c) Agar terbentuk kesadaran tentang nutrisi",
        "d) Agar kebutuhan protein dalam tubuh bisa terabaikan demi mencegah dampak buruk pada pertumbuhan di masa mendatang",
      ],
      jawabanBenar: "c) Agar terbentuk kesadaran tentang nutrisi",
    },
    // 12
    {
      soal: 'Apa yang dimaksud dengan "promosi menyusui eksklusif" dalam upaya pencegahan stunting?',
      jawaban: [
        "a) Mendorong ibu untuk tidak memberikan ASI pada bayi mereka",
        "b) Mendorong ibu untuk memberikan air putih pada bayi mereka",
        "c) Mendorong ibu untuk memberikan ASI saja pada bayi mereka",
        "d) Mendorong ibu untuk memberikan formula susu pada bayi mereka",
      ],
      jawabanBenar:
        "c) Mendorong ibu untuk memberikan ASI saja pada bayi mereka",
    },
    // 13
    {
      soal: "Faktor apa yang berkaitan dengan pola asuh yang kurang efektif sebagai penyebab stunting?",
      jawaban: [
        "a) pemberian makan tidak sesuai yang berakibat pada pola pertumbuhan",
        "b) Penyelarasan tidur anak yang berlebihan",
        "c) Intensitas aktivitas fisik anak yang melampaui batas",
        "d) Interaksi yang minim dengan anak",
      ],
      jawabanBenar:
        "a) pemberian makan tidak sesuai yang berakibat pada pola pertumbuhan",
    },
    // 14
    {
      soal: "Mengapa sanitasi yang buruk dapat meningkatkan risiko stunting pada anak?",
      jawaban: [
        "a) Karena sanitasi buruk memiliki efek langsung pada pertambahan berat badan anak",
        "b) Karena sanitasi buruk dapat menyebabkan infeksi dan gangguan kesehatan",
        "c) Karena anak cenderung memiliki metabolisme yang lebih rendah dalam lingkungan sanitasi yang buruk",
        "d) Karena sanitasi buruk dapat memicu aktivasi genetik yang mengarah pada stunting",
      ],
      jawabanBenar:
        "b) Karena sanitasi buruk dapat menyebabkan infeksi dan gangguan kesehatan pada anak",
    },
    // 15
    {
      soal: "Apa yang bisa dilakukan ibu hamil untuk mencegah stunting pada anak yang dikandungnya?",
      jawaban: [
        "a) Membaca buku tentang gizi",
        "b) menghindari jenis makanan yang mengandung gula, dan rutin berolahraga",
        "c) Mengonsumsi secukupnya makanan berkalori tinggi",
        "d) Membatasi asupan protein demi menghindari risiko alergi pada janin",
      ],
      jawabanBenar:
        "b) menghindari jenis makanan yang mengandung gula, dan rutin berolahraga",
    },
    // 16
    {
      soal: "Bagaimana sanitasi yang buruk dapat berkontribusi terhadap stunting pada anak?",
      jawaban: [
        "a) Sanitasi buruk hanya memengaruhi anak setelah usia lima tahun",
        "b) Sanitasi buruk hanya memengaruhi anak yang belum lahir",
        "c) Sanitasi buruk dapat menyebabkan infeksi dan gangguan kesehatan",
        "d) sanitasi buruk dapat mempengaruhi pertumbuhan anak",
      ],
      jawabanBenar:
        "c) Sanitasi buruk dapat menyebabkan infeksi dan gangguan kesehatan",
    },
    // 17
    {
      soal: "Hipertensi adalah istilah medis ketika kondisi tekanan darah pada tubuh melebihi batas normal. Mengapa gangguan mental dan hipertensi pada ibu dapat menjadi faktor penyebab stunting?",
      jawaban: [
        "a) Karena ibu yang memiliki gangguan mental dan hipertensi cenderung memiliki anak dengan faktor genetika yang buruk",
        "b) Karena gangguan mental dan hipertensi pada ibu hanya mempengaruhi pertumbuhan fisik anak",
        "c) Karena gangguan mental dan hipertensi pada ibu dapat memengaruhi asupan gizi dan nutrisi yang diterima janin",
        "d) Karena gangguan mental dan hipertensi pada ibu hanya mempengaruhi anak setelah usia lima tahun",
      ],
      jawabanBenar:
        "c) Karena gangguan mental dan hipertensi pada ibu dapat memengaruhi asupan gizi dan nutrisi yang diterima janin",
    },
    // 18
    {
      soal: "Apa dampak jangka panjang dari stunting terhadap kemampuan anak?",
      jawaban: [
        "a) menurunnya kemampuan atletik pada anak",
        "b) Tidak ada dampak terhadap kemampuan belajar anak",
        "c) Tidak ada hubungan antara stunting dan kemampuan belajar anak",
        "d) Menurunnya kemampuan belajar dan risiko gangguan perkembangan otak",
      ],
      jawabanBenar:
        "d) Menurunnya kemampuan belajar dan risiko gangguan perkembangan otak",
    },
    // 19
    {
      soal: "Apa dampak stunting terhadap kemampuan fisik anak?",
      jawaban: [
        "a) Menurunnya kemampuan atletik anak",
        "b) Tidak ada dampak terhadap kemampuan fisik anak",
        "c) Meningkatnya kemampuan fisik anak",
        "d) Memengaruhi pertumbuhan berat badan anak",
      ],
      jawabanBenar: "a) Menurunnya kemampuan atletik anak",
    },
    // 20
    {
      soal: "Mengapa tingkat stunting di Indonesia melampaui batas yang ditetapkan oleh WHO?",
      jawaban: [
        "a) Karena anak-anak di Indonesia lebih suka makan makanan ringan",
        "b) Karena faktor rendahnya pengetahuan, akses gizi dan sanitasi yang buruk",
        "c) karena anak-anak di Indonesia kurang minum air",
        "d) Karena anak-anak di Indonesia hanya makan makanan yang tidak sehat",
      ],
      jawabanBenar:
        "b) Karena faktor rendahnya pengetahuan, akses gizi dan sanitasi yang buruk",
    },
    // 21
    {
      soal: "Mengapa pendidikan tentang pola makan yang sehat penting dalam pencegahan stunting?",
      jawaban: [
        "a) Karena pola makan yang sehat memengaruhi anak setelah usia lima tahun",
        "b) Karena pola makan yang sehat dapat memengaruhi berat badan anak",
        "c) Karena pola makan yang sehat dapat memberikan anak cukup energi untuk bermain",
        "d) Karena pola makan yang sehat dapat memengaruhi pertumbuhan dan perkembangan anak",
      ],
      jawabanBenar:
        "d) Karena pola makan yang sehat dapat memengaruhi pertumbuhan dan perkembangan anak",
    },
    // 22
    {
      soal: "Berdasarkan data dari Badan Kesehatan Dunia (WHO), apa yang bisa disimpulkan tentang prevalensi stunting di Indonesia?",
      jawaban: [
        "a) Semua anak di bawah usia lima tahun mengalami stunting",
        "b) Lebih dari setengah anak di bawah usia lima tahun mengalami stunting",
        "c) Sekitar seperempat anak di bawah usia lima tahun mengalami stunting",
        "d) Tidak ada anak di Indonesia yang mengalami stunting",
      ],
      jawabanBenar:
        "c) Sekitar seperempat anak di bawah usia lima tahun mengalami stunting",
    },
    // 23
    {
      soal: "Apa yang dimaksud dengan stunting?",
      jawaban: [
        "a) Keadaan psikologis anak yang buruk",
        "b) Keadaan anak yang memiliki tinggi badan sangat tinggi",
        "c) Keadaan anak yang memiliki tinggi badan lebih tinggi dari yang seharusnya karena asupan gizi berlebih",
        "d) Keadaan anak yang memiliki tinggi badan lebih pendek dari yang seharusnya karena kurangnya asupan gizi",
      ],
      jawabanBenar:
        "d) Keadaan anak yang memiliki tinggi badan lebih pendek dari yang seharusnya karena kurangnya asupan gizi",
    },
    // 24
    {
      soal: "Mengapa stunting dapat memengaruhi perkembangan otak anak?",
      jawaban: [
        "a) Karena stunting memengaruhi pertumbuhan fisik",
        "b) Karena otak anak tidak mempengaruhi pertumbuhan fisik",
        "c) Karena anak dengan stunting memiliki otak yang lebih kecil dari anak lainnya",
        "d) Karena nutrisi yang kurang dapat mempengaruhi perkembangan otak yang optimal",
      ],
      jawabanBenar:
        "d) Karena nutrisi yang kurang dapat mempengaruhi perkembangan otak yang optimal",
    },
    // 25
    {
      soal: 'Apa yang dimaksud dengan "faktor genetika" dalam konteks stunting?',
      jawaban: [
        "a) Faktor yang memengaruhi anak setelah usia lima tahun",
        "b) Faktor yang memengaruhi anak yang sudah dewasa",
        "c) Faktor yang berasal dari keturunan orang tua dan memengaruhi pertumbuhan anak",
        "d) Faktor yang memengaruhi anak yang lahir dengan berat badan rendah",
      ],
      jawabanBenar:
        "c) Faktor yang berasal dari keturunan orang tua dan memengaruhi pertumbuhan anak",
    },
    // 26
    {
      soal: "Mengapa penting untuk mengatasi stunting?",
      jawaban: [
        "a) Karena dampak stunting hanya terlihat pada penampilan fisik anak",
        "b) Karena stunting dapat berdampak pada pertumbuhan fisik, perkembangan otak, dan kesehatan secara keseluruhan",
        "c) Karena stunting berhubungan dengan aspek pertumbuhan fisik, perkembangan otak, tidak dengan kesejahteraan keseluruhan",
        "d) Karena stunting memiliki pengaruh sementara pada anak-anak, dan tidak memiliki implikasi pada usia dewasa",
      ],
      jawabanBenar:
        "b) Karena stunting dapat berdampak pada pertumbuhan fisik, perkembangan otak, dan kesehatan secara keseluruhan",
    },
    // 27
    {
      soal: "Sebagai remaja, mulai dari sekarang kita bisa mencegah terjadinya stunting dikemudian hari, salah satu caranya adalah?",
      jawaban: [
        "a) Mengintegrasikan beragam sumber nutrisi dalam pola makan sehari-hari",
        "b) Berfokus pada aktivitas fisik agar memiliki badan yang sehat tanpa memedulikan asupan nutrisi",
        "c) Tidur lebih untuk mencapai produktivitas yang lebih tinggi",
        "d) Melakukan diet untuk mengontrol berat badan",
      ],
      jawabanBenar:
        "a) Mengintegrasikan beragam sumber nutrisi dalam pola makan sehari-hari",
    },
    // 28
    {
      soal: "Apakah stunting dapat dicegah atau dikoreksi?",
      jawaban: [
        "a) Dapat dicegah sampai usia 12 tahun",
        "b) Koreksi hanya efektif pada tahap awal usia balita",
        "c) Selama periode emas atau pada 1000 Hari Pertama Kehidupan s/d usia 2 tahun",
        "d) Pencegahan hanya berlaku selama masa kehamilan, tidak ada yang bisa dilakukan setelah kelahiran",
      ],
      jawabanBenar:
        "c) Selama periode emas atau pada 1000 Hari Pertama Kehidupan s/d usia 2 tahun",
    },
    // 29
    {
      soal: "Untuk mencegah stunting, tidak butuh biaya yang besar, salah satu contoh nya adalah?",
      jawaban: [
        "a) Konsumsi makanan murah yang bermanfaat seperti tempe, tahu, dan sayur kangkung",
        "b) Konsumsi makanan murah yang bermanfaat seperti tempe, steak, sayur kangkung",
        "c) Konsumsi daging, sayur-sayuran, nasi goreng, setiap hari",
        "d) Makan makanan yang murah bermanfaat seperti sosis, dan nugget",
      ],
      jawabanBenar:
        "a) Konsumsi makanan murah yang bermanfaat seperti tempe, tahu, dan sayur kangkung",
    },
    // 30
    {
      soal: "Stunting adalah gagal tumbuh akibat kurangnya asupan gizi, berikut makanan apa saja yang dapat menambah gizi?",
      jawaban: [
        "a) Ikan bakar, telur rebus, buah pepaya, dan sayur bayam",
        "b) Ikan gabus, telur rebus, buah pepaya, dan sayur bayam",
        "c) ikan gabus, telur mentah, buah alpukat, dan sayur bayam",
        "d) ikan salmon, telur asin, buah kematengan, dan sayur asam",
      ],
      jawabanBenar: "b) Ikan gabus, telur rebus, buah pepaya, dan sayur bayam",
    },
  ];

  document.querySelector(".video-explain iframe").src =
    "https://www.youtube.com/embed/HwEka4xz_sc?si=zcAc21B8uHrF4PQC";
  localStorage.setItem("videoExplain", "videoMateri");

  editQuestion.style.display = "none";
  createButton.style.display = "none";

  document.querySelector(".video-explain iframe").style.display = "flex";
  videoMateri.style.display = "none";

  localStorage.setItem("directEditQuestion", "none");
  localStorage.setItem("createButton", "none");
  localStorage.setItem("pertanyaan", JSON.stringify(pertanyaan));
}

function edit() {
  // Array pertanyaan dan jawaban
  pertanyaan = [
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
    {
      soal: "",
      jawaban: ["", "", "", ""],
      jawabanBenar: "",
    },
  ];

  videoMateri.src = "no video.mp4";
  localStorage.setItem("videoExplain", "videoMateri");
  document.querySelector(".pakEdi-prolog").style.display = "none";
  disableFunctions();
  editQuestion.style.display = "block";
  createButton.style.display = "block";

  document.querySelector(".video-explain iframe").style.display = "none";
  videoMateri.style.display = "flex";

  localStorage.setItem("directEditQuestion", "block");
  localStorage.setItem("createButton", "block");
  localStorage.setItem("pertanyaan", JSON.stringify(pertanyaan));
}

// Load stored values
if (localStorage.getItem("directEditQuestion") === "none") {
  editQuestion.style.display = "none";
  createButton.style.display = "none";
  document.querySelector(".video-explain iframe").style.display = "flex";
  videoMateri.style.display = "none";

  videoMateri.src =
    "https://www.youtube.com/embed/HwEka4xz_sc?si=zcAc21B8uHrF4PQC";
} else {
  editQuestion.style.display = "block";
  createButton.style.display = "block";
  document.querySelector(".video-explain iframe").style.display = "none";
  videoMateri.style.display = "flex";

  videoMateri.src = "no video.mp4";
}

const storedPertanyaan = localStorage.getItem("pertanyaan");
if (storedPertanyaan) {
  pertanyaan = JSON.parse(storedPertanyaan);
}

const boxQuestion = document.querySelector(".questionShadow");
const questionBox = document.querySelector(".questionBox");
let question = document.getElementById("pertanyaan");

function hideQuestionBox() {
  questionBox.style.display = "none";
  boxQuestion.style.display = "none";
  question.style.display = "none";
  stopCountDownTimeSfx();
  nomorSoal = Math.floor(Math.random() * 29) + 0;
  console.log(nomorSoal);
}

let timerId; // buat variabel untuk menyimpan id penundaan

function showQuestion() {
  // Menampilkan kotak pertanyaan dan pertanyaan
  questionBox.style.display = "block";
  boxQuestion.style.display = "block";
  question.style.display = "block";
  boxQuestion.style.animation = "questionAnimation 0.3s";

  // Hapus penundaan sebelumnya jika ada
  if (timerId) {
    clearTimeout(timerId);
  }

  setTimeout(() => {
    playCountDownTimeSfx();
  }, 1000);

  // Menunggu 21 detik sebelum menyembunyikan kotak pertanyaan
  timerId = setTimeout(() => {
    result.classList.add("on");
    result.innerHTML = "Maaf kamu terlambat";
    document.querySelector(".showQuestion").disabled = true;
    clearTimeout(timerId);
    lambat();
    // Menyembunyikan kotak pertanyaan
    hideQuestionBox();
    setTimeout(() => {
      result.classList.remove("on");
    }, 2000);
  }, 40000);
}

// Function untuk menghentikan timer
function stopTimer() {
  clearTimeout(timerId);
}

// Menampilkan pertanyaan dan opsi jawaban
let nomorSoal = Math.floor(Math.random() * 29) + 0;
console.log(nomorSoal);
function tampilPertanyaan() {
  pop();
  showQuestion();

  question.innerHTML = pertanyaan[nomorSoal].soal;

  let opsiJawaban = "";
  for (let i = 0; i < pertanyaan[nomorSoal].jawaban.length; i++) {
    opsiJawaban +=
      "<input type='radio' name='jawaban' value='" +
      pertanyaan[nomorSoal].jawaban[i] +
      "'> " +
      pertanyaan[nomorSoal].jawaban[i] +
      "<br>";
  }
  document.getElementById("opsiJawaban").innerHTML = opsiJawaban;

  // Mendapatkan referensi elemen radio button dan tombol submit
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  const submitButton = document.getElementById("jawab");

  // Tambahkan event listener untuk setiap radio button
  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", () => {
      if (radioButton.checked) {
        submitButton.disabled = false;
      } else {
        submitButton.disabled = true;
      }
    });
  });
}

const result = document.getElementById("result");
document.querySelector("#shakeCard").disabled = true;

let countQuizTrue = 0;
let countQuizFalse = 0;

// Cek jawaban
function cekJawaban() {
  result.style.padding = "25px";

  document.querySelector(".showQuestion").disabled = true;

  stopTimer(); // Menghentikan timer sebelum memeriksa jawaban

  let jawabanUser = document.querySelector(
    'input[name="jawaban"]:checked'
  ).value;

  result.classList.add("on");

  setTimeout(() => {
    result.classList.remove("on");
  }, 1800);
  if (jawabanUser == pertanyaan[nomorSoal].jawabanBenar) {
    result.innerHTML = '<i class="fa fa-check check-icon"></i> Benar!';
    countQuizTrue++;
    console.log(`nilai benar${countQuizTrue}`);
    setTimeout(() => {
      function quizTrue() {
        result.classList.add("on");
        result.innerHTML = `<img src="img/pakEdi-tutor.png">
                            <p>Hebat! kalian menjawab <mark>${countQuizTrue}</mark> jawaban benar. Lanjutkan! <button>Lanjut</button></p>`;
        result.style.padding = "5px 20px";
        document.querySelector("#result p button").onclick = () => {
          result.classList.remove("on");
        };
      }
      if (
        countQuizTrue === 5 ||
        countQuizTrue === 10 ||
        countQuizTrue === 20 ||
        countQuizTrue === 40
      ) {
        quizTrue();
      }
    }, 2000);
    isTrue();
  } else {
    result.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i> Salah!';
    countQuizFalse++;
    console.log(`nilai salah${countQuizFalse}`);
    setTimeout(() => {
      function quizFalse() {
        result.classList.add("on");
        result.innerHTML = `<img src="img/pakEdi-alert.png">
                            <p>Hmmm! kalian menjawab <mark>${countQuizFalse}</mark> jawaban salah. Evaluasi! <button>Lanjut</button></p>`;
        result.style.padding = "5px 20px";
        document.querySelector("#result p button").onclick = () => {
          result.classList.remove("on");
        };
      }
      if (
        countQuizFalse === 5 ||
        countQuizFalse === 10 ||
        countQuizFalse === 20 ||
        countQuizFalse === 40
      ) {
        quizFalse();
      }
    }, 1900);
    isFalse();
  }

  // Reset opsi jawaban
  document.getElementById("opsiJawaban").innerHTML = "";

  document.querySelector("#shakeCard").disabled = false;

  hideQuestionBox();
}

const trueResult = document.querySelector(".result_true");
const falseResult = document.querySelector(".result_false");
const valueGame = document.querySelector(".valueGame");

// Fungsi untuk menghasilkan teks acak
function generateRandomText(characters, length) {
  let randomText = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomText += characters.charAt(randomIndex);
  }
  return randomText;
}

// Fungsi untuk menampilkan teks acak di dalam elemen
function displayRandomText(element, content) {
  element.innerHTML = content;
}

const resultWrapper = document.querySelector(".result_wrapper");

// Fungsi untuk menampilkan hasil permainan
function displayGameResult() {
  resultWrapper.style.display = "flex";

  // Fungsi yang dipanggil setiap 3 detik
  const intervalRandomText1 = setInterval(() => {
    displayRandomText(
      trueResult,
      `<i class="fa-solid fa-square-check"></i> ${generateRandomText(
        "0123456789",
        2
      )}`
    );
  }, 50);

  const intervalRandomText2 = setInterval(() => {
    displayRandomText(
      falseResult,
      `<i class="fa-solid fa-square-xmark"></i> ${generateRandomText(
        "0123456789",
        2
      )}`
    );
  }, 50);

  const intervalRandomText3 = setInterval(() => {
    displayRandomText(valueGame, generateRandomText("ABCDEF", 1));
  }, 50);

  setTimeout(() => {
    trueResult.style.animation = "true 0.5s";
    trueResult.innerHTML = `<i class="fa-solid fa-square-check"></i> ${countQuizTrue}`;
    clearInterval(intervalRandomText1);
    waterDrop();
  }, 2000);

  setTimeout(() => {
    falseResult.style.animation = "true 0.5s";
    falseResult.innerHTML = `<i class="fa-solid fa-square-xmark"></i> ${countQuizFalse}`;
    clearInterval(intervalRandomText2);
    waterDrop();
  }, 4000);

  setTimeout(() => {
    valueGame.style.animation = "true 0.5s";
    if (countQuizTrue > 2 * countQuizFalse) {
      valueGame.innerHTML = `A+`;
    } else if (countQuizTrue > countQuizFalse) {
      valueGame.innerHTML = `A`;
    } else if (countQuizTrue === countQuizFalse) {
      valueGame.innerHTML = `B`;
    } else if (countQuizTrue < countQuizFalse) {
      valueGame.innerHTML = `C`;
    }
    clearInterval(intervalRandomText3);
    waterDrop();
  }, 6000);
  setTimeout(() => {
    document.querySelector(".img_winner img").style.animation =
      "imgWinner 0.3s forwards";
    waterDrop();
  }, 7000);
}

// Saat klik pada gameResult, panggil fungsi untuk menampilkan hasil permainan
const gameResult = document.querySelector(".game-result");
gameResult.onclick = displayGameResult;
document.querySelector("#back").onclick = () => {
  resultWrapper.style.display = "none";
};

// set semua radio button menjadi unchecked
var jawaban = document.querySelectorAll("input[type='radio']:checked");
for (var i = 0; i < jawaban.length; i++) {
  jawaban[i].checked = false;
}

let succesInput = document.querySelector(".succesInput");

const inputVideo = document.getElementById("input-file-video");

const removeVideo = document.querySelector(".removeVideo");
removeVideo.onclick = () => {
  document.querySelector(".editVideo").remove();
  document.querySelector(".video-explain").remove();
  localStorage.removeItem("remove1");
  localStorage.setItem("remove1", "removed");
  localStorage.removeItem("remove2");
  localStorage.setItem("remove2", "removed");
  document.querySelector("#alert-mulai").remove();
  localStorage.setItem("remove-buttonMulai", "removed");
};

inputVideo.addEventListener("change", () => {
  const file = inputVideo.files[0];
  const videoURL = URL.createObjectURL(file);

  videoMateri.src = videoURL;
});

function editContent(event) {
  event.preventDefault(); // Mencegah halaman untuk refresh
  const inputQuestion = document.querySelectorAll(
    'textarea[name="pertanyaan"]'
  );
  const inputOption = document.querySelectorAll('input[name="option"]');
  const inputTrueoption = document.querySelectorAll('input[name="trueOption"]');

  inputQuestion.forEach((inputQuestion) => {
    const indexQuestion = inputQuestion.getAttribute("data-question");
    const replacementQuestion = inputQuestion.value;
    pertanyaan[indexQuestion].soal = replacementQuestion;
    localStorage.setItem(
      `replacementQuestion${indexQuestion}`,
      replacementQuestion
    );
  });
  inputTrueoption.forEach((inputTrueoption) => {
    const indexTrueoption = inputTrueoption.getAttribute("data-trueOption");
    const replacementTrueoption = inputTrueoption.value;
    pertanyaan[indexTrueoption].jawabanBenar = replacementTrueoption;
    localStorage.setItem(
      `replacementTrueoption${indexTrueoption}`,
      replacementTrueoption
    );
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option");
    const replacementOption = inputOption.value;
    pertanyaan[0].jawaban[indexOption] = replacementOption;
    localStorage.setItem(`replacementOption${indexOption}`, replacementOption);
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option2");
    const replacementOption = inputOption.value;
    pertanyaan[1].jawaban[indexOption] = replacementOption;
    localStorage.setItem(`replacementOption2${indexOption}`, replacementOption);
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option3");
    const replacementOption = inputOption.value;
    pertanyaan[2].jawaban[indexOption] = replacementOption;
    localStorage.setItem(`replacementOption3${indexOption}`, replacementOption);
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option4");
    const replacementOption = inputOption.value;
    pertanyaan[3].jawaban[indexOption] = replacementOption;
    localStorage.setItem(`replacementOption4${indexOption}`, replacementOption);
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option5");
    const replacementOption = inputOption.value;
    pertanyaan[4].jawaban[indexOption] = replacementOption;
    localStorage.setItem(`replacementOption5${indexOption}`, replacementOption);
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option6");
    const replacementOption = inputOption.value;
    pertanyaan[5].jawaban[indexOption] = replacementOption;
    localStorage.setItem(`replacementOption6${indexOption}`, replacementOption);
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option7");
    const replacementOption = inputOption.value;
    pertanyaan[6].jawaban[indexOption] = replacementOption;
    localStorage.setItem(`replacementOption7${indexOption}`, replacementOption);
  });
  7;
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option8");
    const replacementOption = inputOption.value;
    pertanyaan[7].jawaban[indexOption] = replacementOption;
    localStorage.setItem(`replacementOption8${indexOption}`, replacementOption);
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option9");
    const replacementOption = inputOption.value;
    pertanyaan[8].jawaban[indexOption] = replacementOption;
    localStorage.setItem(`replacementOption9${indexOption}`, replacementOption);
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option10");
    const replacementOption = inputOption.value;
    pertanyaan[9].jawaban[indexOption] = replacementOption;
    localStorage.setItem(
      `replacementOption10${indexOption}`,
      replacementOption
    );
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option11");
    const replacementOption = inputOption.value;
    pertanyaan[10].jawaban[indexOption] = replacementOption;
    localStorage.setItem(
      `replacementOption11${indexOption}`,
      replacementOption
    );
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option12");
    const replacementOption = inputOption.value;
    pertanyaan[11].jawaban[indexOption] = replacementOption;
    localStorage.setItem(
      `replacementOption12${indexOption}`,
      replacementOption
    );
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option13");
    const replacementOption = inputOption.value;
    pertanyaan[12].jawaban[indexOption] = replacementOption;
    localStorage.setItem(
      `replacementOption13${indexOption}`,
      replacementOption
    );
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option14");
    const replacementOption = inputOption.value;
    pertanyaan[13].jawaban[indexOption] = replacementOption;
    localStorage.setItem(
      `replacementOption14${indexOption}`,
      replacementOption
    );
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option15");
    const replacementOption = inputOption.value;
    pertanyaan[14].jawaban[indexOption] = replacementOption;
    localStorage.setItem(
      `replacementOption15${indexOption}`,
      replacementOption
    );
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option16");
    const replacementOption = inputOption.value;
    pertanyaan[15].jawaban[indexOption] = replacementOption;
    localStorage.setItem(
      `replacementOption16${indexOption}`,
      replacementOption
    );
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option17");
    const replacementOption = inputOption.value;
    pertanyaan[16].jawaban[indexOption] = replacementOption;
    localStorage.setItem(
      `replacementOption17${indexOption}`,
      replacementOption
    );
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option18");
    const replacementOption = inputOption.value;
    pertanyaan[17].jawaban[indexOption] = replacementOption;
    localStorage.setItem(
      `replacementOption18${indexOption}`,
      replacementOption
    );
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option19");
    const replacementOption = inputOption.value;
    pertanyaan[18].jawaban[indexOption] = replacementOption;
    localStorage.setItem(
      `replacementOption19${indexOption}`,
      replacementOption
    );
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option20");
    const replacementOption = inputOption.value;
    pertanyaan[19].jawaban[indexOption] = replacementOption;
    localStorage.setItem(
      `replacementOption20${indexOption}`,
      replacementOption
    );
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option21");
    const replacementOption = inputOption.value;
    pertanyaan[20].jawaban[indexOption] = replacementOption;
    localStorage.setItem(
      `replacementOption21${indexOption}`,
      replacementOption
    );
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option22");
    const replacementOption = inputOption.value;
    pertanyaan[21].jawaban[indexOption] = replacementOption;
    localStorage.setItem(
      `replacementOption22${indexOption}`,
      replacementOption
    );
  });
  7;
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option23");
    const replacementOption = inputOption.value;
    pertanyaan[22].jawaban[indexOption] = replacementOption;
    localStorage.setItem(
      `replacementOption23${indexOption}`,
      replacementOption
    );
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option24");
    const replacementOption = inputOption.value;
    pertanyaan[23].jawaban[indexOption] = replacementOption;
    localStorage.setItem(
      `replacementOption24${indexOption}`,
      replacementOption
    );
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option25");
    const replacementOption = inputOption.value;
    pertanyaan[24].jawaban[indexOption] = replacementOption;
    localStorage.setItem(
      `replacementOption25${indexOption}`,
      replacementOption
    );
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option26");
    const replacementOption = inputOption.value;
    pertanyaan[25].jawaban[indexOption] = replacementOption;
    localStorage.setItem(
      `replacementOption26${indexOption}`,
      replacementOption
    );
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option27");
    const replacementOption = inputOption.value;
    pertanyaan[26].jawaban[indexOption] = replacementOption;
    localStorage.setItem(
      `replacementOption27${indexOption}`,
      replacementOption
    );
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option28");
    const replacementOption = inputOption.value;
    pertanyaan[27].jawaban[indexOption] = replacementOption;
    localStorage.setItem(
      `replacementOption28${indexOption}`,
      replacementOption
    );
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option29");
    const replacementOption = inputOption.value;
    pertanyaan[28].jawaban[indexOption] = replacementOption;
    localStorage.setItem(
      `replacementOption29${indexOption}`,
      replacementOption
    );
  });
  inputOption.forEach((inputOption) => {
    const indexOption = inputOption.getAttribute("data-option30");
    const replacementOption = inputOption.value;
    pertanyaan[29].jawaban[indexOption] = replacementOption;
    localStorage.setItem(
      `replacementOption30${indexOption}`,
      replacementOption
    );
  });

  const alertBerhasilSave = document.querySelector(".alertBerhasilSave");
  userEdit.classList.remove("fa-times");
  document.querySelector(".user-experience").classList.remove("showEdit");
  document.querySelector("html").classList.remove("showEdit");
  document.querySelector(".edit-content").classList.remove("showEdit");
  alertBerhasilSave.classList.add("active");
  document.querySelector(".alertBerhasilSave p").textContent =
    "Soal berhasil disimpan ke dalam penyimpanan";
  setTimeout(() => {
    alertBerhasilSave.classList.remove("active");
  }, 3000);

  let succesInputText = (succesInput.textContent = "Game Storage Terisi 🔒");
  let succesInputColor = (succesInput.style.background = "#f31414");
  localStorage.setItem(`succesInputText`, succesInputText);
  localStorage.setItem(`succesInputColor`, succesInputColor);
}

window.addEventListener("DOMContentLoaded", () => {
  const savedRemoveInput = localStorage.getItem("remove1");
  const savedRemoveVideo = localStorage.getItem("remove2");
  if (savedRemoveInput === "removed") {
    document.querySelector(".editVideo").remove();
  }
  if (savedRemoveVideo === "removed") {
    document.querySelector(".video-explain").remove();
    document.querySelector("#alert-mulai").remove();
  }
  const savesuccesInputText = localStorage.getItem(`succesInputText`);
  if (savesuccesInputText) {
    succesInput.textContent = savesuccesInputText;
  }
  const savesuccesInputColor = localStorage.getItem(`succesInputColor`);
  if (savesuccesInputColor) {
    succesInput.style.background = savesuccesInputColor;
  }

  for (let q = 0; q < pertanyaan.length; q++) {
    const storedQuestion = localStorage.getItem(`replacementQuestion${q}`);
    if (storedQuestion) {
      pertanyaan[q].soal = storedQuestion;
    }
  }
  for (let t = 0; t < pertanyaan.length; t++) {
    const storedTrueoption = localStorage.getItem(`replacementTrueoption${t}`);
    if (storedTrueoption) {
      pertanyaan[t].jawabanBenar = storedTrueoption;
    }
  }
  for (let o = 0; o < pertanyaan.length; o++) {
    const storedOption = localStorage.getItem(`replacementOption${o}`);
    if (storedOption) {
      pertanyaan[0].jawaban[o] = storedOption;
    }
    const storedOption2 = localStorage.getItem(`replacementOption2${o}`);
    if (storedOption2) {
      pertanyaan[1].jawaban[o] = storedOption2;
    }
    const storedOption3 = localStorage.getItem(`replacementOption3${o}`);
    if (storedOption3) {
      pertanyaan[2].jawaban[o] = storedOption3;
    }
    const storedOption4 = localStorage.getItem(`replacementOption4${o}`);
    if (storedOption4) {
      pertanyaan[3].jawaban[o] = storedOption4;
    }
    const storedOption5 = localStorage.getItem(`replacementOption5${o}`);
    if (storedOption5) {
      pertanyaan[4].jawaban[o] = storedOption5;
    }
    const storedOption6 = localStorage.getItem(`replacementOption6${o}`);
    if (storedOption6) {
      pertanyaan[5].jawaban[o] = storedOption6;
    }
    const storedOption7 = localStorage.getItem(`replacementOption7${o}`);
    if (storedOption7) {
      pertanyaan[6].jawaban[o] = storedOption7;
    }
    const storedOption8 = localStorage.getItem(`replacementOption8${o}`);
    if (storedOption8) {
      pertanyaan[7].jawaban[o] = storedOption8;
    }
    const storedOption9 = localStorage.getItem(`replacementOption9${o}`);
    if (storedOption9) {
      pertanyaan[8].jawaban[o] = storedOption9;
    }
    const storedOption10 = localStorage.getItem(`replacementOption10${o}`);
    if (storedOption10) {
      pertanyaan[9].jawaban[o] = storedOption10;
    }
    const storedOption11 = localStorage.getItem(`replacementOption11${o}`);
    if (storedOption11) {
      pertanyaan[10].jawaban[o] = storedOption11;
    }
    const storedOption12 = localStorage.getItem(`replacementOption12${o}`);
    if (storedOption12) {
      pertanyaan[11].jawaban[o] = storedOption12;
    }
    const storedOption13 = localStorage.getItem(`replacementOption13${o}`);
    if (storedOption13) {
      pertanyaan[12].jawaban[o] = storedOption13;
    }
    const storedOption14 = localStorage.getItem(`replacementOption14${o}`);
    if (storedOption14) {
      pertanyaan[13].jawaban[o] = storedOption14;
    }
    const storedOption15 = localStorage.getItem(`replacementOption15${o}`);
    if (storedOption15) {
      pertanyaan[14].jawaban[o] = storedOption15;
    }
    const storedOption16 = localStorage.getItem(`replacementOption16${o}`);
    if (storedOption16) {
      pertanyaan[15].jawaban[o] = storedOption16;
    }
    const storedOption17 = localStorage.getItem(`replacementOption17${o}`);
    if (storedOption17) {
      pertanyaan[16].jawaban[o] = storedOption17;
    }
    const storedOption18 = localStorage.getItem(`replacementOption18${o}`);
    if (storedOption18) {
      pertanyaan[17].jawaban[o] = storedOption18;
    }
    const storedOption19 = localStorage.getItem(`replacementOption19${o}`);
    if (storedOption19) {
      pertanyaan[18].jawaban[o] = storedOption19;
    }
    const storedOption20 = localStorage.getItem(`replacementOption20${o}`);
    if (storedOption20) {
      pertanyaan[19].jawaban[o] = storedOption20;
    }
    const storedOption21 = localStorage.getItem(`replacementOption21${o}`);
    if (storedOption21) {
      pertanyaan[20].jawaban[o] = storedOption21;
    }
    const storedOption22 = localStorage.getItem(`replacementOption22${o}`);
    if (storedOption22) {
      pertanyaan[21].jawaban[o] = storedOption22;
    }
    const storedOption23 = localStorage.getItem(`replacementOption23${o}`);
    if (storedOption23) {
      pertanyaan[22].jawaban[o] = storedOption23;
    }
    const storedOption24 = localStorage.getItem(`replacementOption24${o}`);
    if (storedOption24) {
      pertanyaan[23].jawaban[o] = storedOption24;
    }
    const storedOption25 = localStorage.getItem(`replacementOption25${o}`);
    if (storedOption25) {
      pertanyaan[24].jawaban[o] = storedOption25;
    }
    const storedOption26 = localStorage.getItem(`replacementOption26${o}`);
    if (storedOption26) {
      pertanyaan[25].jawaban[o] = storedOption26;
    }
    const storedOption27 = localStorage.getItem(`replacementOption27${o}`);
    if (storedOption27) {
      pertanyaan[26].jawaban[o] = storedOption27;
    }
    const storedOption28 = localStorage.getItem(`replacementOption28${o}`);
    if (storedOption28) {
      pertanyaan[27].jawaban[o] = storedOption28;
    }
    const storedOption29 = localStorage.getItem(`replacementOption29${o}`);
    if (storedOption29) {
      pertanyaan[28].jawaban[o] = storedOption29;
    }
    const storedOption30 = localStorage.getItem(`replacementOption30${o}`);
    if (storedOption30) {
      pertanyaan[29].jawaban[o] = storedOption30;
    }
  }
});
