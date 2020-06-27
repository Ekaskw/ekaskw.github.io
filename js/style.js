$(document).ready(function () {

    setTimeout(function () {
        $("#preloader").addClass('hilang');
        $("#konten").removeClass('konten');
    }, 2500)

});

const KI = document.getElementById('KI');
const KD = document.getElementById('KD');
const Indikator = document.getElementById('Indikator');

KI.addEventListener('click', function () {
    Swal.fire({
        type: 'info',
        title: 'Kompetensi Inti',
        html: '<br><br><p class="ml-4">1.  Menghayati dan mengamalkan ajaran agama Islam.</p>' +
            '<br> <p class="ml-4">2. Menghayati dan mengamalkan perilaku jujur dan disiplin, tanggungjawab, peduli (gotong royong, kerjasama, toleran, damai), santun, responsif dan pro -aktif dan menunjukkan sikap sebagai bagian dari solusi atas berbagai permasalahan dalam berinteraksi secara efektif dengan lingkungan sosial dan alam serta dalam menempatkan diri sebagai cerminan bangsa dalam pergaulan.</p>' +
            '<br> <p class="ml-4">3. Memahami, menerapkan, menganalisis pengetahuan faktual, konseptual, prosedural  berdasarkan  rasa  ingintahunya  tentang  ilmu  pengetahuan,  teknologi,  seni,  budaya,  dan  humaniora  dengan  wawasan  kemanusiaan,  kebangsaan, kenegaraan, dan peradaban terkait penyebab fenomena dan kejadian.' +
            '<br><br> <p class="ml-4">4.   Mengolah, menalar, dan menyaji dalam ranah konkret dan ranah konkret dan ranah abstrak terkait dengan pengembangan dari yang dipelajarinya di sekolah secara mandiri, dan mampu menggunakan metode sesuai kaidah keilmuan.</p>'
    });
});

KD.addEventListener('click', function () {
    Swal.fire({
        type: 'info',
        title: 'Kompetensi Dasar',
        html: '<br><br><p class="ml-4">1.  Mensyukuri kesempatan dapat mempelajari bahasa Arab sebagai bahasa pengantar  komunikasi  internasional  yang  diwujudkan  dalam  semangat  belajar.</p>' +
            '<br> <p class="ml-4">2.  Menunjukkan perilaku santun dan peduli dalam melaksanakan komunikasi antar pribadi dengan guru dan teman.</p>' +
            '<br> <p class="ml-4">3.  Mensimulasikan  dialog  sederhana  tentang  cara    merespon  ungkapan,  Mendemonstrasikan ungkapan sederhana tentang cara memberitahu dan menanyakan  fakta,  perasaan  dan  sikap,  menyusun  teks  lisan  dan  tulis  sederhana.'
    });
});

Indikator.addEventListener('click', function () {
    Swal.fire({
        type: 'info',
        title: 'Indikator dan Tujuan Pembelajaran',
        html: '<br><br><p class="ml-3"><b>Indikator Pembelajaran</b></p>' +
            '<br> <p class="ml-4">1. Menjelaskan isi teks yang didengar yang berkaitan: اَلْعَدَدُ ۱۰-۱</p>' +
            '<br> <p class="ml-4">2. Menerapkan percakapan terkait topik : اَلْعَدَدُ ۱۰-۱' +
            '<br> <p class="ml-4">3. Menerangkan isi teks bacaan yang terkait topik اَلْعَدَدُ ۱۰-۱' +
            '<br> <p class="ml-4">4. Menyusun teks tulis yang terkait topik : اَلْعَدَدُ ۱۰-۱' +
            '<br><br> <p class="ml-3"><b>Tujuan Pembelajaran</b></p>' +
            '<br><p class="ml-4">Setelah mengamati, menanya, mengeksplorasi, mengasosiasi dan mengko-muni kasikan peserta didik mampu mendengar, bercakap, membaca dan menulis dengan Bahasa Arab yang berkaitan dengan topik: اَلْعَدَدُ ۱۰-۱</p>'
    });
});

function playno1() {
    $("audio#1")[0].play();
}

function playno2() {
    $("audio#2")[0].play();
}

function playno3() {
    $("audio#3")[0].play();
}

function playno4() {
    $("audio#4")[0].play();
}

function playno5() {
    $("audio#5")[0].play();
}

function playno6() {
    $("audio#6")[0].play();
}

function playno7() {
    $("audio#7")[0].play();
}

function playno8() {
    $("audio#8")[0].play();
}

function playno9() {
    $("audio#9")[0].play();
}

function playno10() {
    $("audio#10")[0].play();
}

function H1() {
    $("audio#H1")[0].play();
}

function H2() {
    $("audio#H2")[0].play();
}

function H3() {
    $("audio#H3")[0].play();
}

function H4() {
    $("audio#H4")[0].play();
}

function H5() {
    $("audio#H5")[0].play();
}

function Qiroah() {
    $("audio#Qiroah")[0].play();
}
