/* =========================================================
   DETEKTIF DUNIA MAYA — Logika Game
   LKPD Informatika Kelas 8 · SMP Negeri 19 Kota Bekasi
   ========================================================= */

// === KONFIGURASI — UBAH DI SINI ===
const CONFIG = {
  SCHOOL_NAME: "SMP Negeri 19 Kota Bekasi",
  MODUL_CODE: "MATERI_K8P14_GANJIL",
  YEAR: "2026 / 2027",

  DEFAULT_LANG: "id",
  SHOW_BILINGUAL: true,

  ENABLE_TIMER: false,
  TIME_PER_LEVEL_SEC: 180,
  ALLOW_RETRY: true,
  MIN_SCORE_TO_PASS: 60,

  SCORE_L1: 100,
  SCORE_L2: 120,
  SCORE_L3: 100,
  SCORE_L4: 100,
  SCORE_L5: 100,

  BADGE_MASTER: 90,
  BADGE_EXPERT: 75,
  BADGE_JUNIOR: 60,

  THEME: "dark",
  ENABLE_SOUND: true,
  ENABLE_CONFETTI: true,
  ENABLE_LEADERBOARD: true,
  LEADERBOARD_MAX: 10,
  ENABLE_CERTIFICATE: true,
  ENABLE_REFLECTION: true,
};

// === DATA SOAL — UBAH DI SINI (dwibahasa) ===
const GAME_DATA = {
  level1: [
    { id: "Mengunggah foto liburan ke Instagram", en: "Uploading vacation photos to Instagram", type: "aktif" },
    { id: "Riwayat pencarian Google", en: "Google search history", type: "pasif" },
    { id: "Menulis komentar di video YouTube", en: "Writing a comment on a YouTube video", type: "aktif" },
    { id: "Lokasi GPS yang terekam otomatis", en: "GPS location recorded automatically", type: "pasif" },
    { id: "Cookies situs web", en: "Website cookies", type: "pasif" },
    { id: "Status WhatsApp \"Lagi di Bandung\"", en: "WhatsApp status \"In Bandung right now\"", type: "aktif" },
    { id: "Membagikan ulang (share) postingan", en: "Sharing/reposting a post", type: "aktif" },
    { id: "Log kunjungan situs web", en: "Website visit logs", type: "pasif" },
    { id: "Mengirim pesan di grup kelas", en: "Sending a message in the class group", type: "aktif" },
    { id: "Iklan yang muncul mengikuti minat", en: "Ads that appear based on your interests (tracking result)", type: "pasif" },
  ],
  level2: [
    {
      id: "\"Lagi sendirian di rumah nih, orang tua pulang jam 9 malam\" + lokasi",
      en: "\"Home alone, parents come back at 9 PM\" + location tag",
      type: "berisiko",
      reason: "Memberi tahu rumah kosong kepada orang tak dikenal / Telling strangers the house is empty",
      reasons: [
        { id: "Memberi tahu rumah kosong kepada orang tak dikenal", en: "Telling strangers the house is empty", correct: true },
        { id: "Tidak apa-apa, kan cuma status", en: "It's fine, it's just a status", correct: false },
        { id: "Menambah teman baru", en: "Making new friends", correct: false }
      ]
    },
    {
      id: "Foto kartu pelajar lengkap dengan NISN/NIS",
      en: "Photo of a full student ID card with NISN/NIS",
      type: "berisiko",
      reason: "Data bisa disalahgunakan untuk pemalsuan identitas / Data can be misused for identity fraud",
      reasons: [
        { id: "Menunjukkan prestasi di sekolah", en: "Showing off school achievement", correct: false },
        { id: "Data bisa disalahgunakan untuk pemalsuan identitas", en: "Data can be misused for identity fraud", correct: true },
        { id: "Agar teman tahu kelas kita", en: "So friends know our class", correct: false }
      ]
    },
    {
      id: "Cerita jadwal les/ekskul setiap hari secara rinci",
      en: "Detailed daily schedule of tutoring/extracurricular activities",
      type: "berisiko",
      reason: "Memudahkan orang asing menebak keberadaan kita / Helps strangers guess our whereabouts",
      reasons: [
        { id: "Memudahkan orang asing menebak keberadaan kita", en: "Helps strangers guess our whereabouts", correct: true },
        { id: "Membantu teman mengingat jadwal", en: "Helping friends remember schedules", correct: false },
        { id: "Biar terlihat rajin", en: "So we look diligent", correct: false }
      ]
    },
    {
      id: "\"Liburan ke Bandung sampai Minggu depan!\" tanpa lokasi rumah",
      en: "\"Vacation to Bandung until next week!\" without home location",
      type: "aman",
      reason: "Tidak membocorkan lokasi real-time / Doesn't leak real-time location",
      reasons: [
        { id: "Tidak membocorkan lokasi real-time", en: "Doesn't leak real-time location", correct: true },
        { id: "Berisiko karena memberi tahu kita pergi", en: "Risky because it tells people we're away", correct: false },
        { id: "Melanggar aturan sekolah", en: "Violates school rules", correct: false }
      ]
    },
    {
      id: "Foto makanan di meja makan (tanpa wajah, tanpa lokasi)",
      en: "Photo of food on the table (no face, no location)",
      type: "aman",
      reason: "Tidak ada data pribadi yang bocor / No personal data leaked",
      reasons: [
        { id: "Tidak ada data pribadi yang bocor", en: "No personal data leaked", correct: true },
        { id: "Berisiko karena bisa dicuri resepnya", en: "Risky because the recipe might be stolen", correct: false },
        { id: "Membuat orang lapar", en: "Making people hungry", correct: false }
      ]
    },
    {
      id: "Membagikan curahan masalah pribadi ke publik",
      en: "Sharing personal problems publicly",
      type: "berisiko",
      reason: "Bisa dimanfaatkan orang jahat & merusak reputasi / Can be exploited by bad actors & harms reputation",
      reasons: [
        { id: "Bisa dimanfaatkan orang jahat & merusak reputasi", en: "Can be exploited by bad actors & harms reputation", correct: true },
        { id: "Tidak masalah, semua orang juga begitu", en: "No problem, everyone does it", correct: false },
        { id: "Membuat kita terkenal", en: "Makes us famous", correct: false }
      ]
    },
    {
      id: "Posting foto sunset tanpa GPS aktif",
      en: "Posting a sunset photo without GPS enabled",
      type: "aman",
      reason: "Tidak ada informasi lokasi / No location information",
      reasons: [
        { id: "Tidak ada informasi lokasi", en: "No location information", correct: true },
        { id: "Berisiko karena langit indah", en: "Risky because the sky is beautiful", correct: false },
        { id: "Melanggar hak cipta", en: "Copyright violation", correct: false }
      ]
    },
    {
      id: "Menyebut nama lengkap anggota keluarga di caption",
      en: "Mentioning full names of family members in caption",
      type: "berisiko",
      reason: "Data keluarga bisa dipakai untuk menebak password atau menipu / Family data can be used to guess passwords or scam",
      reasons: [
        { id: "Data keluarga bisa dipakai untuk menebak password atau menipu", en: "Family data can be used to guess passwords or scam", correct: true },
        { id: "Biasa saja, kan keluarga kita", en: "It's normal, it's our family", correct: false },
        { id: "Membanggakan keluarga", en: "Showing off family", correct: false }
      ]
    },
  ],
  level3: {
    passwordTargets: {
      minLengthStrong: 12,
      minTypesStrong: 3,
    },
    otpCode: "842197",
  },
  level4: [
    { id: "DM: \"Selamat akunmu menang HP terbaru, klik link & login ulang\"", en: "DM: \"Congrats! You won a new phone, click the link & log in again\"", type: "phishing", reason: "Hadiah terlalu bagus + minta login ulang / Too-good-to-be-true prize + asks to re-login" },
    { id: "Story: foto rapor lengkap dengan nilai dan NISN", en: "Story: photo of a report card with grades and NISN", type: "berisiko", reason: "Oversharing data identitas / Oversharing identity data" },
    { id: "Postingan: \"Liburan ke Bandung sampai Minggu depan!\" tanpa lokasi rumah", en: "Post: \"Vacation to Bandung until next week!\" without home location", type: "aman", reason: "Tidak bocorkan lokasi real-time / Doesn't leak real-time location" },
    { id: "WA dari nomor tak dikenal: \"Paket gagal dikirim, cek di sini\" (file .apk)", en: "WA from unknown number: \"Package failed to deliver, check here\" (.apk file)", type: "phishing", reason: "File .apk berbahaya + menciptakan urgensi / Dangerous .apk file + creating urgency" },
    { id: "Chat teman sekelas minta nomor HP untuk tugas kelompok", en: "Chat from a classmate asking for phone number for a group assignment", type: "aman", reason: "Konteks wajar, minta konfirmasi langsung / Normal context, confirm directly" },
  ],
  level5: [
    { id: "Jangan klik/buka tautan atau file mencurigakan.", en: "Don't click/open suspicious links or files." },
    { id: "Segera ganti password akun yang terancam, dan akun lain yang memakai password sama.", en: "Immediately change the password of the affected account, and any other account using the same password." },
    { id: "Aktifkan verifikasi dua langkah bila tersedia.", en: "Enable two-factor authentication if available." },
    { id: "Laporkan pesan tersebut ke platform (fitur \"laporkan\"/report) dan beri tahu kontak agar tidak ikut tertipu.", en: "Report the message to the platform (report feature) and warn contacts so they don't fall for it too." },
    { id: "Beri tahu orang tua/guru, terutama bila ada indikasi kerugian lebih lanjut.", en: "Inform parents/teachers, especially if there are signs of further loss." },
  ],
};

// === STATE ===
const state = {
  nama: "",
  kelompok: "",
  currentLevel: 0,
  scores: { l1: 0, l2: 0, l3: 0, l4: 0, l5: 0 },
  completed: [],
  lang: CONFIG.DEFAULT_LANG,
  sound: CONFIG.ENABLE_SOUND,
  theme: CONFIG.THEME,
  reflections: { r1: "", r2: "", r3: "" },
  checklist: {},
};

// === STATE INTERNAL LEVEL ===
const levelState = {
  l1: { idx: 0, answers: [] },
  l2: { idx: 0, answers: [] },
  l3: { password: "", types: { lower:false, upper:false, digit:false, symbol:false }, locked: false, twofa: false },
  l4: { idx: 0, answers: [] },
  l5: { order: [], pool: [] },
};

// === UTILS ===
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function todayStr() {
  const d = new Date();
  const bulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
  return `${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
}

// === AUDIO BEEP (Web Audio API) ===
let audioCtx = null;
function beep(freq = 440, duration = 0.12, type = "sine") {
  if (!state.sound) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) { /* audio tidak didukung */ }
}
function soundCorrect() { beep(880, 0.12, "triangle"); setTimeout(() => beep(1320, 0.15, "triangle"), 100); }
function soundWrong() { beep(180, 0.25, "sawtooth"); }
function soundClick() { beep(600, 0.05, "square"); }
function soundWin() { [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => beep(f, 0.15, "triangle"), i * 120)); }

// === CONFETTI (CSS murni) ===
function fireConfetti(count = 60) {
  if (!CONFIG.ENABLE_CONFETTI) return;
  const layer = $("#confetti-layer");
  const colors = ["#00E5A0", "#FFB020", "#FF4D6D", "#6EF0C1", "#8AB4F8", "#F0E68C"];
  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    p.className = "confetti-piece";
    p.style.left = Math.random() * 100 + "vw";
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.animationDelay = (Math.random() * 0.6) + "s";
    p.style.animationDuration = (2 + Math.random() * 1.5) + "s";
    p.style.transform = `rotate(${Math.random() * 360}deg)`;
    layer.appendChild(p);
    setTimeout(() => p.remove(), 4200);
  }
}

// === NAVIGASI SCREEN ===
function showScreen(id) {
  $$(".screen").forEach((s) => s.classList.remove("active"));
  const el = document.getElementById("screen-" + id);
  if (el) el.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Progress bar visibility
  const pw = $("#progress-wrap");
  if (["0","1"].includes(String(id))) pw.classList.remove("visible");
  else pw.classList.add("visible");

  // Update progress label
  const done = state.completed.length;
  $("#progress-label").textContent = `Level ${done} / 5`;
  $("#progress-player").textContent = state.nama ? `${state.nama} · ${state.kelompok}` : "—";
  $("#progress-fill").style.width = (done / 5 * 100) + "%";
}

// === SCORE ===
function updateScoreChip() {
  const total = Object.values(state.scores).reduce((a, b) => a + b, 0);
  $("#score-chip").textContent = "⭐ " + total;
}
function totalScore() { return Object.values(state.scores).reduce((a, b) => a + b, 0); }
function maxScore() { return CONFIG.SCORE_L1 + CONFIG.SCORE_L2 + CONFIG.SCORE_L3 + CONFIG.SCORE_L4 + CONFIG.SCORE_L5; }

// === SAVE / LOAD ===
const LS_KEY = "detektif_dunia_maya_v1";
function saveProgress() {
  try {
    const data = {
      nama: state.nama, kelompok: state.kelompok,
      scores: state.scores, completed: state.completed,
      lang: state.lang, sound: state.sound, theme: state.theme,
      reflections: state.reflections, checklist: state.checklist,
    };
    localStorage.setItem(LS_KEY, JSON.stringify(data));
  } catch (e) { /* localStorage mungkin penuh */ }
}
function loadProgress() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return;
    const d = JSON.parse(raw);
    Object.assign(state, d);
    if (state.scores) Object.assign(state.scores, d.scores);
  } catch (e) { /* abaikan */ }
}

// === LEADERBOARD ===
const LB_KEY = "detektif_leaderboard_v1";
function saveLeaderboard() {
  if (!CONFIG.ENABLE_LEADERBOARD) return;
  try {
    const total = totalScore();
    const entry = { nama: state.nama, kelompok: state.kelompok, score: total, date: Date.now() };
    const list = JSON.parse(localStorage.getItem(LB_KEY) || "[]");
    list.push(entry);
    list.sort((a, b) => b.score - a.score);
    const trimmed = list.slice(0, CONFIG.LEADERBOARD_MAX);
    localStorage.setItem(LB_KEY, JSON.stringify(trimmed));
  } catch (e) { /* abaikan */ }
}
function renderLeaderboard() {
  if (!CONFIG.ENABLE_LEADERBOARD) return;
  const box = $("#leaderboard");
  box.innerHTML = "";
  let list = [];
  try { list = JSON.parse(localStorage.getItem(LB_KEY) || "[]"); } catch (e) {}
  if (!list.length) { box.innerHTML = "<div class='lb-row'><div class='lb-rank'>—</div><div>Belum ada skor / No scores yet</div><div></div></div>"; return; }
  list.forEach((e, i) => {
    const rank = ["🥇","🥈","🥉"][i] || `#${i+1}`;
    const row = document.createElement("div");
    row.className = "lb-row";
    row.innerHTML = `<div class="lb-rank">${rank}</div><div>${escapeHTML(e.nama || "-")} · ${escapeHTML(e.kelompok || "-")}</div><div class="lb-score">${e.score}</div>`;
    box.appendChild(row);
  });
}
function escapeHTML(s) { return String(s).replace(/[&<>"']/g, m => ({ "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;" }[m])); }

// === MODAL ===
function openModal(title, bodyHTML) {
  $("#modal-title").textContent = title;
  $("#modal-body").innerHTML = bodyHTML;
  $("#modal").classList.add("active");
  $("#modal").setAttribute("aria-hidden", "false");
}
function closeModal() {
  $("#modal").classList.remove("active");
  $("#modal").setAttribute("aria-hidden", "true");
}

// === MATERI MODAL ===
function openMaterial(key) {
  const M = {
    l1: `<h4>🔍 Jejak Digital / Digital Footprint</h4>
      <p><b>Jejak aktif (active footprint):</b> jejak yang sengaja kita bagikan — unggahan, komentar, status, pesan di grup.</p>
      <p><b>Jejak pasif (passive footprint):</b> jejak yang terekam otomatis tanpa kita sadari — riwayat pencarian, lokasi GPS, cookies situs web.</p>
      <p><em>Both types of footprints can be collected and used by others — for good (content recommendation) or bad (phishing, hacking).</em></p>`,
    l2: `<h4>🚨 Oversharing (Berbagi Berlebihan)</h4>
      <p>Kebiasaan membagikan data pribadi lebih dari yang diperlukan. Contoh berisiko:</p>
      <ul>
        <li>Lokasi real-time (rumah kosong)</li>
        <li>Foto kartu pelajar/KTP</li>
        <li>Jadwal harian rinci</li>
        <li>Nama lengkap anggota keluarga</li>
        <li>Curahan masalah pribadi ke publik</li>
      </ul>`,
    l3: `<h4>🔐 Password (Kata Sandi) & 2FA</h4>
      <p><b>Password lemah:</b> 123456, qwerty, nama sendiri + tanggal lahir, sama untuk semua akun.</p>
      <p><b>Password kuat:</b> kombinasi huruf besar-kecil, angka, dan simbol; frasa unik; ≥ 12 karakter.</p>
      <p><b>2FA (Verifikasi Dua Langkah):</b> lapisan keamanan tambahan — setelah password, akun minta kode kedua (OTP via SMS atau aplikasi autentikator).</p>`,
    l4: `<h4>🎣 Phishing (Pengelabuan)</h4>
      <p>Upaya menipu agar kita memberikan data pribadi (password, kode OTP, data kartu) lewat pesan, tautan, atau situs palsu.</p>
      <h4>5 Ciri Umum / 5 Common Traits:</h4>
      <ul>
        <li>⏰ Menciptakan rasa mendesak (creating urgency)</li>
        <li>🎁 Menjanjikan hadiah terlalu bagus (too-good-to-be-true)</li>
        <li>🔗 Alamat pengirim/tautan aneh (suspicious sender/link)</li>
        <li>✏️ Banyak salah ketik/tata bahasa (typos)</li>
        <li>🔑 Meminta data rahasia lewat pesan (passwords/OTP)</li>
      </ul>
      <p><b>Contoh:</b> DM "menang giveaway" minta login ulang; file .apk dari nomor tak dikenal; chat teman yang akunnya diretas.</p>`,
    l5: `<h4>🆘 Jika Akun Diduga Diretas / If Your Account Is Hacked</h4>
      <ol>
        <li>Jangan klik/buka tautan atau file mencurigakan.</li>
        <li>Segera ganti password akun yang terancam & akun lain yang memakai password sama.</li>
        <li>Aktifkan verifikasi dua langkah bila tersedia.</li>
        <li>Laporkan pesan ke platform & beri tahu kontak.</li>
        <li>Beri tahu orang tua/guru bila ada indikasi kerugian lebih lanjut.</li>
      </ol>`,
  };
  openModal("📚 Materi Singkat / Quick Material", M[key] || "<p>—</p>");
}

// === RENDER MISSION MAP ===
function renderMissionMap() {
  const grid = $("#mission-grid");
  grid.innerHTML = "";
  const levels = [
    { key: "l1", num: "LEVEL 1", title: "🔍 Jejak Digital", desc: "Digital Footprint", score: CONFIG.SCORE_L1, screen: 3 },
    { key: "l2", num: "LEVEL 2", title: "🚨 Oversharing Alert", desc: "Berbagi Berlebihan", score: CONFIG.SCORE_L2, screen: 4 },
    { key: "l3", num: "LEVEL 3", title: "🔐 Password Builder", desc: "Pembuat Kata Sandi", score: CONFIG.SCORE_L3, screen: 5 },
    { key: "l4", num: "LEVEL 4", title: "🎣 Phishing Detector", desc: "Detektor Pengelabuan", score: CONFIG.SCORE_L4, screen: 6 },
    { key: "l5", num: "LEVEL 5", title: "🆘 Darurat Akun", desc: "Account Emergency", score: CONFIG.SCORE_L5, screen: 7 },
  ];
  levels.forEach((lv) => {
    const el = document.createElement("div");
    el.className = "mission-card";
    if (state.completed.includes(lv.key)) el.classList.add("done");
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.innerHTML = `
      <div class="mission-num">${lv.num}</div>
      <div class="mission-title">${lv.title}</div>
      <div class="mission-desc">${lv.desc} · <em>${lv.key === "l1" ? "Digital Footprint" : lv.key === "l2" ? "Oversharing" : lv.key === "l3" ? "Password & 2FA" : lv.key === "l4" ? "Phishing" : "Emergency"}</em></div>
      <div class="mission-score">${state.completed.includes(lv.key) ? "✅ Selesai / Done · " : "⭐ "}Skor: ${state.scores[lv.key]} / ${lv.score}</div>
    `;
    el.addEventListener("click", () => { soundClick(); openLevel(lv.key); });
    el.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLevel(lv.key); } });
    grid.appendChild(el);
  });
  $("#btn-see-result").disabled = state.completed.length < 5;
}

function openLevel(key) {
  if (key === "l1") { resetLevel1(); showScreen(3); }
  if (key === "l2") { resetLevel2(); showScreen(4); }
  if (key === "l3") { resetLevel3(); showScreen(5); }
  if (key === "l4") { resetLevel4(); showScreen(6); }
  if (key === "l5") { resetLevel5(); showScreen(7); }
}

function completeLevel(key, score) {
  state.scores[key] = Math.max(state.scores[key], score);
  if (!state.completed.includes(key)) state.completed.push(key);
  saveProgress();
  updateScoreChip();
  renderMissionMap();
  if (state.completed.length === 5) fireConfetti(80);
}

/* =========================================================
   LEVEL 1 — Jejak Digital
   ========================================================= */
function resetLevel1() {
  levelState.l1 = { idx: 0, answers: [] };
  renderLevel1();
}
function renderLevel1() {
  const data = GAME_DATA.level1;
  const i = levelState.l1.idx;
  if (i >= data.length) {
    const score = levelState.l1.answers.filter(Boolean).length * 10;
    completeLevel("l1", score);
    openModal("✅ Level 1 Selesai / Level 1 Complete", `<p class="fb-correct">Skor Level 1: ${score} / 100</p><p>Kamu telah mempelajari perbedaan <b>jejak aktif</b> dan <b>jejak pasif</b>.</p><p><em>You learned the difference between active and passive footprints.</em></p>`);
    showScreen(2);
    return;
  }
  $("#l1-counter").textContent = `Kartu ${i + 1} / ${data.length}`;
  $("#l1-question").innerHTML = `${escapeHTML(data[i].id)}<br/><small style="color:var(--text-dim);font-weight:400">${escapeHTML(data[i].en)}</small>`;
  $("#l1-next").style.display = "none";
  $$("#l1-answers .btn-answer").forEach((btn) => {
    btn.disabled = false;
    btn.classList.remove("correct", "wrong");
  });
}
function answerLevel1(type) {
  const data = GAME_DATA.level1;
  const i = levelState.l1.idx;
  const correct = data[i].type;
  const isCorrect = type === correct;
  levelState.l1.answers.push(isCorrect);
  $$("#l1-answers .btn-answer").forEach((btn) => {
    btn.disabled = true;
    if (btn.dataset.ans === correct) btn.classList.add("correct");
    else if (btn.dataset.ans === type) btn.classList.add("wrong");
  });
  if (isCorrect) soundCorrect(); else { soundWrong(); $("#l1-question").classList.add("shake"); setTimeout(()=>$("#l1-question").classList.remove("shake"),500); }
  const label = correct === "aktif" ? "Jejak Aktif (Active Footprint)" : "Jejak Pasif (Passive Footprint)";
  openModal(
    isCorrect ? "✅ Benar! / Correct!" : "❌ Belum Tepat / Not Quite",
    `<p class="${isCorrect ? "fb-correct" : "fb-wrong"}">${isCorrect ? "Benar! ✅ / Correct!" : "Belum tepat. / Not quite."}</p>
     <p><b>Jawaban benar:</b> ${label}</p>
     <p>${correct === "aktif"
        ? "Jejak <b>aktif</b> adalah jejak yang <b>sengaja</b> kita bagikan. <em>Active footprint: what we <b>intentionally</b> share.</em>"
        : "Jejak <b>pasif</b> adalah jejak yang <b>terekam otomatis</b> tanpa kita sadari. <em>Passive footprint: what is <b>recorded automatically</b>.</em>"
     }</p>`
  );
  $("#l1-next").style.display = "inline-flex";
}
function nextLevel1() {
  levelState.l1.idx++;
  renderLevel1();
}

/* =========================================================
   LEVEL 2 — Oversharing
   ========================================================= */
function resetLevel2() {
  levelState.l2 = { idx: 0, answers: [] };
  renderLevel2();
}
function renderLevel2() {
  const data = GAME_DATA.level2;
  const i = levelState.l2.idx;
  if (i >= data.length) {
    const score = levelState.l2.answers.filter(Boolean).length * 15;
    completeLevel("l2", score);
    openModal("✅ Level 2 Selesai / Level 2 Complete", `<p class="fb-correct">Skor Level 2: ${score} / 120</p><p>Kamu sudah bisa membedakan postingan <b>aman</b> dan <b>berisiko</b>. <em>You can now distinguish safe and risky posts.</em></p>`);
    showScreen(2);
    return;
  }
  $("#l2-counter").textContent = `Post ${i + 1} / ${data.length}`;
  $("#l2-post").innerHTML = `
    <div class="post-header"><div class="avatar">${escapeHTML((state.nama || "K")[0].toUpperCase())}</div><div>@${escapeHTML(state.nama || "kamu")}_story</div></div>
    <div class="post-body">${escapeHTML(data[i].id)}<br/><small style="color:var(--text-dim)">${escapeHTML(data[i].en)}</small></div>
  `;
  $("#l2-reasons").style.display = "none";
  $("#l2-next").style.display = "none";
  $$("#l2-answers .btn-answer").forEach((btn) => {
    btn.disabled = false;
    btn.classList.remove("correct", "wrong");
  });
}
function answerLevel2(type) {
  const data = GAME_DATA.level2;
  const i = levelState.l2.idx;
  const correct = data[i].type;
  if (type === "berisiko" && correct === "berisiko") {
    // Tampilkan pilihan alasan
    const sel = $("#l2-reason-select");
    sel.innerHTML = "";
    data[i].reasons.forEach((r, idx) => {
      const opt = document.createElement("option");
      opt.value = idx;
      opt.textContent = `${r.id} / ${r.en}`;
      sel.appendChild(opt);
    });
    $("#l2-reasons").style.display = "block";
    $$("#l2-answers .btn-answer").forEach((b) => b.disabled = true);
    return;
  }
  // Aman atau salah pilih berisiko
  const isCorrect = type === correct;
  levelState.l2.answers.push(isCorrect);
  $$("#l2-answers .btn-answer").forEach((btn) => {
    btn.disabled = true;
    if (btn.dataset.ans === correct) btn.classList.add("correct");
    else if (btn.dataset.ans === type) btn.classList.add("wrong");
  });
  if (isCorrect) soundCorrect(); else soundWrong();
  openModal(
    isCorrect ? "✅ Benar! / Correct!" : "❌ Belum Tepat / Not Quite",
    `<p class="${isCorrect ? "fb-correct" : "fb-wrong"}">${isCorrect ? "Benar! ✅" : "Belum tepat."}</p>
     <p><b>Klasifikasi benar:</b> ${correct === "aman" ? "Aman / Safe" : "Berisiko / Risky"}</p>
     <p>${escapeHTML(data[i].reason || "")}</p>`
  );
  $("#l2-next").style.display = "inline-flex";
}
function confirmLevel2Reason() {
  const data = GAME_DATA.level2;
  const i = levelState.l2.idx;
  const sel = $("#l2-reason-select");
  const idx = parseInt(sel.value, 10);
  const chosen = data[i].reasons[idx];
  const correctIdx = data[i].reasons.findIndex((r) => r.correct);
  const isCorrect = idx === correctIdx;
  levelState.l2.answers.push(isCorrect);
  if (isCorrect) soundCorrect(); else soundWrong();
  $("#l2-reasons").style.display = "none";
  $$("#l2-answers .btn-answer").forEach((btn) => {
    btn.disabled = true;
    if (btn.dataset.ans === "berisiko") btn.classList.add("correct");
  });
  openModal(
    isCorrect ? "✅ Benar! / Correct!" : "❌ Belum Tepat / Not Quite",
    `<p class="${isCorrect ? "fb-correct" : "fb-wrong"}">${isCorrect ? "Benar! ✅" : "Belum tepat."}</p>
     <p><b>Alasan paling tepat:</b> ${escapeHTML(data[i].reasons[correctIdx].id)}</p>
     <p><em>${escapeHTML(data[i].reasons[correctIdx].en)}</em></p>`
  );
  $("#l2-next").style.display = "inline-flex";
}
function nextLevel2() { levelState.l2.idx++; renderLevel2(); }

/* =========================================================
   LEVEL 3 — Password Builder
   ========================================================= */
function resetLevel3() {
  levelState.l3 = { password: "", types: { lower:false, upper:false, digit:false, symbol:false }, locked: false, twofa: false };
  renderPalette();
  renderPassword();
  $("#twofa-box").style.display = "none";
  $("#otp-sim").style.display = "none";
  $("#pw-lock").disabled = false;
}
function renderPalette() {
  const groups = {
    "pal-lower": "abcdefghijklmnopqrstuvwxyz".split(""),
    "pal-upper": "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    "pal-digit": "0123456789".split(""),
    "pal-symbol": ["!","@","#","$","%","&","*","?","-","_","."],
  };
  Object.entries(groups).forEach(([id, chars]) => {
    const box = document.getElementById(id);
    box.innerHTML = "";
    chars.slice(0, 18).forEach((c) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = c;
      b.setAttribute("aria-label", `Tambah karakter ${c}`);
      b.addEventListener("click", () => addCharToPassword(c));
      box.appendChild(b);
    });
  });
}
function addCharToPassword(c) {
  if (levelState.l3.locked) return;
  if (levelState.l3.password.length >= 24) return;
  levelState.l3.password += c;
  const t = levelState.l3.types;
  if (/[a-z]/.test(c)) t.lower = true;
  if (/[A-Z]/.test(c)) t.upper = true;
  if (/[0-9]/.test(c)) t.digit = true;
  if (/[^a-zA-Z0-9]/.test(c)) t.symbol = true;
  soundClick();
  renderPassword();
}
function renderPassword() {
  const p = levelState.l3.password;
  $("#pw-display").textContent = p || "_";
  $("#pw-len").textContent = p.length;
  const t = levelState.l3.types;
  const typesCount = [t.lower, t.upper, t.digit, t.symbol].filter(Boolean).length;
  const targets = GAME_DATA.level3.passwordTargets;
  let strength = "Lemah / Weak";
  let color = "var(--danger)";
  let pct = Math.min(30, p.length * 3);
  if (p.length >= targets.minLengthStrong && typesCount >= targets.minTypesStrong) {
    strength = "Kuat / Strong"; color = "var(--accent)"; pct = 100;
  } else if (p.length >= 8 && typesCount >= 2) {
    strength = "Sedang / Medium"; color = "var(--warning)"; pct = 60;
  }
  $("#pw-strength").textContent = strength;
  $("#pw-strength-fill").style.width = pct + "%";
  $("#pw-strength-fill").style.background = color;
}
function backspacePassword() {
  if (levelState.l3.locked) return;
  levelState.l3.password = levelState.l3.password.slice(0, -1);
  recomputeTypes();
  soundClick();
  renderPassword();
}
function clearPassword() {
  if (levelState.l3.locked) return;
  levelState.l3.password = "";
  levelState.l3.types = { lower:false, upper:false, digit:false, symbol:false };
  soundClick();
  renderPassword();
}
function recomputeTypes() {
  const p = levelState.l3.password;
  levelState.l3.types = {
    lower: /[a-z]/.test(p),
    upper: /[A-Z]/.test(p),
    digit: /[0-9]/.test(p),
    symbol: /[^a-zA-Z0-9]/.test(p),
  };
}
function lockPassword() {
  const p = levelState.l3.password;
  const t = levelState.l3.types;
  const typesCount = [t.lower, t.upper, t.digit, t.symbol].filter(Boolean).length;
  const targets = GAME_DATA.level3.passwordTargets;
  if (p.length >= targets.minLengthStrong && typesCount >= targets.minTypesStrong) {
    levelState.l3.locked = true;
    $("#pw-lock").disabled = true;
    soundCorrect();
    openModal("🔒 Password Kuat Terkunci! / Strong Password Locked!", `<p class="fb-correct">Mantap! Password-mu kuat (${p.length} karakter, ${typesCount} jenis karakter).</p><p><em>Great! Your password is strong (${p.length} chars, ${typesCount} char types).</em></p><p>Sekarang aktifkan <b>2FA</b> untuk lapisan keamanan tambahan.</p>`);
    $("#twofa-box").style.display = "block";
  } else {
    soundWrong();
    openModal("⚠️ Belum Kuat / Not Strong Yet", `<p class="fb-wrong">Password belum memenuhi syarat kuat.</p><p><b>Syarat:</b> minimal ${targets.minLengthStrong} karakter & minimal ${targets.minTypesStrong} jenis karakter (huruf kecil, huruf besar, angka, simbol).</p><p><em>Requirement: min ${targets.minLengthStrong} chars & min ${targets.minTypesStrong} char types.</em></p>`);
  }
}
function sendOTP() {
  $("#otp-sim").style.display = "block";
  $("#otp-code").textContent = GAME_DATA.level3.otpCode;
  $("#otp-input").value = "";
  $("#otp-input").focus();
  beep(1200, 0.1, "sine");
}
function verifyOTP() {
  const val = $("#otp-input").value.trim();
  if (val === GAME_DATA.level3.otpCode) {
    levelState.l3.twofa = true;
    soundCorrect();
    const score = 100; // 60 pw kuat + 40 2FA
    completeLevel("l3", score);
    openModal("✅ Level 3 Selesai! / Level 3 Complete!", `<p class="fb-correct">Skor Level 3: ${score} / 100</p><p>Password kuat + 2FA aktif = akunmu jauh lebih aman.</p><p><em>Strong password + 2FA = your account is much safer.</em></p>`);
    showScreen(2);
  } else {
    soundWrong();
    openModal("❌ Kode OTP Salah / Wrong OTP Code", `<p class="fb-wrong">Kode OTP tidak cocok. Coba lagi.</p><p>Petunjuk: kode demo yang muncul di SMS simulasi di atas.</p>`);
  }
}

/* =========================================================
   LEVEL 4 — Phishing Detector
   ========================================================= */
function resetLevel4() {
  levelState.l4 = { idx: 0, answers: [] };
  $("#l4-traits").style.display = "none";
  renderLevel4();
}
function renderLevel4() {
  const data = GAME_DATA.level4;
  const i = levelState.l4.idx;
  if (i >= data.length) {
    const score = levelState.l4.answers.filter(Boolean).length * 20;
    completeLevel("l4", score);
    $("#l4-traits").style.display = "block";
    openModal("✅ Level 4 Selesai! / Level 4 Complete!", `<p class="fb-correct">Skor Level 4: ${score} / 100</p><p>Ingat 5 ciri umum phishing di bawah!</p>`);
    return;
  }
  $("#l4-counter").textContent = `Skenario ${i + 1} / ${data.length}`;
  $("#l4-scenario").innerHTML = `<div class="post-body">${escapeHTML(data[i].id)}<br/><small style="color:var(--text-dim)">${escapeHTML(data[i].en)}</small></div>`;
  $("#l4-next").style.display = "none";
  $$("#l4-answers .btn-answer").forEach((btn) => {
    btn.disabled = false;
    btn.classList.remove("correct", "wrong");
  });
}
function answerLevel4(type) {
  const data = GAME_DATA.level4;
  const i = levelState.l4.idx;
  const correct = data[i].type;
  const isCorrect = type === correct;
  levelState.l4.answers.push(isCorrect);
  $$("#l4-answers .btn-answer").forEach((btn) => {
    btn.disabled = true;
    if (btn.dataset.ans === correct) btn.classList.add("correct");
    else if (btn.dataset.ans === type) btn.classList.add("wrong");
  });
  if (isCorrect) soundCorrect(); else soundWrong();
  const labelMap = { aman: "Aman / Safe", berisiko: "Berisiko / Risky", phishing: "Phishing / Pengelabuan" };
  openModal(
    isCorrect ? "✅ Benar! / Correct!" : "❌ Belum Tepat / Not Quite",
    `<p class="${isCorrect ? "fb-correct" : "fb-wrong"}">${isCorrect ? "Benar! ✅" : "Belum tepat."}</p>
     <p><b>Klasifikasi benar:</b> ${labelMap[correct]}</p>
     <p>${escapeHTML(data[i].reason)}</p>`
  );
  $("#l4-next").style.display = "inline-flex";
}
function nextLevel4() {
  levelState.l4.idx++;
  renderLevel4();
  if (levelState.l4.idx >= GAME_DATA.level4.length) {
    $("#l4-traits").style.display = "block";
  }
}

/* =========================================================
   LEVEL 5 — Darurat Akun Diretas
   ========================================================= */
function resetLevel5() {
  levelState.l5 = { order: [], pool: shuffle([...Array(GAME_DATA.level5.length).keys()]) };
  renderLevel5();
}
function renderLevel5() {
  const box = $("#l5-steps");
  box.innerHTML = "";
  levelState.l5.pool.forEach((idx) => {
    const step = GAME_DATA.level5[idx];
    const pos = levelState.l5.order.indexOf(idx);
    const el = document.createElement("div");
    el.className = "step-item" + (pos >= 0 ? " selected" : "");
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.innerHTML = `<div class="step-num">${pos >= 0 ? pos + 1 : "?"}</div><div>${escapeHTML(step.id)}<br/><small style="color:var(--text-dim)">${escapeHTML(step.en)}</small></div>`;
    el.addEventListener("click", () => toggleStep(idx));
    el.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleStep(idx); } });
    box.appendChild(el);
  });
  $("#l5-counter").textContent = `Dipilih: ${levelState.l5.order.length} / 5`;
}
function toggleStep(idx) {
  if (levelState.l5.order.includes(idx)) {
    // hapus dari urutan
    levelState.l5.order = levelState.l5.order.filter((x) => x !== idx);
  } else {
    if (levelState.l5.order.length >= 5) return;
    levelState.l5.order.push(idx);
  }
  soundClick();
  renderLevel5();
}
function checkLevel5() {
  if (levelState.l5.order.length < 5) {
    soundWrong();
    openModal("⚠️ Belum Lengkap / Not Complete", `<p class="fb-wrong">Pilih dulu semua 5 langkah (klik untuk mengurutkan).</p><p><em>Select all 5 steps first (click to order).</em></p>`);
    return;
  }
  // Benar jika urutan sesuai GAME_DATA (0,1,2,3,4)
  let correctCount = 0;
  levelState.l5.order.forEach((idx, pos) => { if (idx === pos) correctCount++; });
  const score = correctCount * 20;
  // Warnai
  const items = $$("#l5-steps .step-item");
  levelState.l5.pool.forEach((idx, i) => {
    const el = items[i];
    const pos = levelState.l5.order.indexOf(idx);
    if (pos === idx) el.classList.add("correct");
    else el.classList.add("wrong");
  });
  if (score >= 60) { soundWin(); fireConfetti(60); }
  else soundWrong();
  completeLevel("l5", score);
  openModal(
    score === 100 ? "🏆 Sempurna! / Perfect!" : "📊 Level 5 Selesai / Level 5 Complete",
    `<p class="${score >= 60 ? "fb-correct" : "fb-wrong"}">Skor Level 5: ${score} / 100 (${correctCount}/5 benar)</p>
     <p>Urutan yang benar:</p>
     <ol>${GAME_DATA.level5.map((s) => `<li>${escapeHTML(s.id)} <em>(${escapeHTML(s.en)})</em></li>`).join("")}</ol>`
  );
  setTimeout(() => { showScreen(2); }, 100);
}

/* =========================================================
   HASIL AKHIR & BADGE
   ========================================================= */
function renderResult() {
  const total = totalScore();
  const max = maxScore();
  const pct = Math.round(total / max * 100);
  $("#score-final").textContent = total;
  $("#score-max").textContent = max;
  $("#score-pct").textContent = pct + "%";

  let badgeIcon = "🎯", badgeTitle = "Calon Detektif", badgeSub = "Detective Trainee";
  if (pct >= CONFIG.BADGE_MASTER) { badgeIcon = "🏆"; badgeTitle = "Detektif Utama"; badgeSub = "Master Detective"; }
  else if (pct >= CONFIG.BADGE_EXPERT) { badgeIcon = "🥇"; badgeTitle = "Detektif Ahli"; badgeSub = "Expert Detective"; }
  else if (pct >= CONFIG.BADGE_JUNIOR) { badgeIcon = "🥈"; badgeTitle = "Detektif Muda"; badgeSub = "Junior Detective"; }
  $("#badge-icon").textContent = badgeIcon;
  $("#badge-title").textContent = badgeTitle;
  $("#badge-sub").textContent = badgeSub;

  // Score table
  const tbl = $("#score-table");
  tbl.innerHTML = "";
  const rows = [
    { k: "l1", label: "Level 1 · Jejak Digital", max: CONFIG.SCORE_L1 },
    { k: "l2", label: "Level 2 · Oversharing Alert", max: CONFIG.SCORE_L2 },
    { k: "l3", label: "Level 3 · Password Builder", max: CONFIG.SCORE_L3 },
    { k: "l4", label: "Level 4 · Phishing Detector", max: CONFIG.SCORE_L4 },
    { k: "l5", label: "Level 5 · Darurat Akun", max: CONFIG.SCORE_L5 },
  ];
  rows.forEach((r) => {
    const row = document.createElement("div");
    row.className = "score-row";
    row.innerHTML = `<span>${r.label}</span><b>${state.scores[r.k]} / ${r.max}</b>`;
    tbl.appendChild(row);
  });

  // Checklist restore
  $$("#final-checklist input[type=checkbox]").forEach((ck) => {
    ck.checked = !!state.checklist[ck.dataset.ck];
  });

  renderLeaderboard();
  if (pct >= CONFIG.BADGE_MASTER) { soundWin(); fireConfetti(120); }
}

/* =========================================================
   REFLEKSI
   ========================================================= */
function saveReflection() {
  state.reflections.r1 = $("#ref-1").value;
  state.reflections.r2 = $("#ref-2").value;
  state.reflections.r3 = $("#ref-3").value;
  saveProgress();
  $("#reflect-msg").style.display = "block";
  setTimeout(() => { $("#reflect-msg").style.display = "none"; }, 2500);
  soundCorrect();
}
function downloadReflection() {
  const t = `REFLEKSI — DETEKTIF DUNIA MAYA
Nama: ${state.nama}
Kelompok: ${state.kelompok}
Tanggal: ${todayStr()}
Skor Akhir: ${totalScore()} / ${maxScore()}

1. Apa hal baru yang aku pahami tentang menjaga keamanan di dunia digital?
${state.reflections.r1 || "-"}

2. Bagian mana yang paling membuka mataku?
${state.reflections.r2 || "-"}

3. Kebiasaan apa yang akan aku ubah mulai hari ini?
${state.reflections.r3 || "-"}

LKPD Informatika Kelas 8 · Jejak Digital, Privasi, Keamanan, dan Anti-Phishing
© 2026 SMP Negeri 19 Kota Bekasi
`;
  const blob = new Blob([t], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Refleksi_${(state.nama || "murid").replace(/\s+/g, "_")}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

/* =========================================================
   SERTIFIKAT
   ========================================================= */
function renderCertificate() {
  $("#cert-name").textContent = state.nama || "—";
  $("#cert-group").textContent = state.kelompok || "—";
  const total = totalScore();
  const pct = Math.round(total / maxScore() * 100);
  let badge = "🎯 Calon Detektif / Detective Trainee";
  if (pct >= CONFIG.BADGE_MASTER) badge = "🏆 Detektif Utama / Master Detective";
  else if (pct >= CONFIG.BADGE_EXPERT) badge = "🥇 Detektif Ahli / Expert Detective";
  else if (pct >= CONFIG.BADGE_JUNIOR) badge = "🥈 Detektif Muda / Junior Detective";
  $("#cert-badge").textContent = badge;
  $("#cert-score").textContent = `Skor: ${total} / ${maxScore()} (${pct}%)`;
  $("#cert-date").textContent = todayStr();
}
function printCertificate() { window.print(); }

/* =========================================================
   UTILS
   ========================================================= */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* =========================================================
   EVENT BINDINGS
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  loadProgress();

  // Restore UI state
  if (state.theme === "light") document.body.classList.add("light");
  $("#btn-theme").textContent = state.theme === "light" ? "☀️" : "🌙";
  $("#btn-sound").textContent = state.sound ? "🔊" : "🔇";
  $("#btn-lang").textContent = state.lang === "id" ? "🇮🇩 ID" : "🇬🇧 EN";
  updateScoreChip();

  // Splash → Identity
  $("#btn-start").addEventListener("click", () => { soundClick(); showScreen(1); });

  // Identity form
  $("#btn-identity").addEventListener("click", () => {
    const nama = $("#input-nama").value.trim();
    const kel = $("#input-kelompok").value.trim();
    if (!nama || !kel) {
      $("#identity-error").textContent = "Nama dan kelompok wajib diisi! / Name and group are required!";
      return;
    }
    state.nama = nama;
    state.kelompok = kel;
    saveProgress();
    soundClick();
    $("#identity-error").textContent = "";
    renderMissionMap();
    showScreen(2);
  });

  // See result button
  $("#btn-see-result").addEventListener("click", () => {
    renderResult();
    saveLeaderboard();
    soundWin();
    fireConfetti(100);
    showScreen(8);
  });

  // Level 1
  $$("#l1-answers .btn-answer").forEach((b) => b.addEventListener("click", () => answerLevel1(b.dataset.ans)));
  $("#l1-next").addEventListener("click", nextLevel1);

  // Level 2
  $$("#l2-answers .btn-answer").forEach((b) => b.addEventListener("click", () => answerLevel2(b.dataset.ans)));
  $("#l2-confirm").addEventListener("click", confirmLevel2Reason);
  $("#l2-next").addEventListener("click", nextLevel2);

  // Level 3
  $("#pw-backspace").addEventListener("click", backspacePassword);
  $("#pw-clear").addEventListener("click", clearPassword);
  $("#pw-lock").addEventListener("click", lockPassword);
  $("#btn-send-otp").addEventListener("click", sendOTP);
  $("#btn-verify-otp").addEventListener("click", verifyOTP);

  // Level 4
  $$("#l4-answers .btn-answer").forEach((b) => b.addEventListener("click", () => answerLevel4(b.dataset.ans)));
  $("#l4-next").addEventListener("click", nextLevel4);

  // Level 5
  $("#l5-reset").addEventListener("click", resetLevel5);
  $("#l5-check").addEventListener("click", checkLevel5);

  // Result actions
  $("#btn-to-reflect").addEventListener("click", () => {
    $("#ref-1").value = state.reflections.r1 || "";
    $("#ref-2").value = state.reflections.r2 || "";
    $("#ref-3").value = state.reflections.r3 || "";
    showScreen(9);
  });
  $("#btn-restart").addEventListener("click", () => {
    if (confirm("Yakin mau main ulang? Skor akan direset. / Restart the game? Scores will be reset.")) {
      state.scores = { l1: 0, l2: 0, l3: 0, l4: 0, l5: 0 };
      state.completed = [];
      state.checklist = {};
      saveProgress();
      updateScoreChip();
      renderMissionMap();
      showScreen(2);
    }
  });
  $$("#final-checklist input[type=checkbox]").forEach((ck) => {
    ck.addEventListener("change", () => {
      state.checklist[ck.dataset.ck] = ck.checked;
      saveProgress();
    });
  });

  // Refleksi
  $("#btn-save-reflect").addEventListener("click", saveReflection);
  $("#btn-download-reflect").addEventListener("click", downloadReflection);
  $("#btn-to-cert").addEventListener("click", () => {
    saveReflection();
    renderCertificate();
    soundWin();
    fireConfetti(80);
    showScreen(10);
  });

  // Sertifikat
  $("#btn-print-cert").addEventListener("click", printCertificate);
  $("#btn-back-home").addEventListener("click", () => showScreen(0));

  // Modal
  $("#modal-close").addEventListener("click", closeModal);
  $("#modal-ok").addEventListener("click", closeModal);
  $("#modal").addEventListener("click", (e) => { if (e.target.id === "modal") closeModal(); });

  // Material buttons
  $$("[data-open-material]").forEach((b) => {
    b.addEventListener("click", () => openMaterial(b.dataset.openMaterial));
  });

  // Control buttons
  $("#btn-lang").addEventListener("click", () => {
    state.lang = state.lang === "id" ? "en" : "id";
    $("#btn-lang").textContent = state.lang === "id" ? "🇮🇩 ID" : "🇬🇧 EN";
    saveProgress();
    soundClick();
  });
  $("#btn-sound").addEventListener("click", () => {
    state.sound = !state.sound;
    $("#btn-sound").textContent = state.sound ? "🔊" : "🔇";
    saveProgress();
    if (state.sound) soundClick();
  });
  $("#btn-theme").addEventListener("click", () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    document.body.classList.toggle("light");
    $("#btn-theme").textContent = state.theme === "light" ? "☀️" : "🌙";
    saveProgress();
    soundClick();
  });

  // Keyboard shortcut ESC untuk tutup modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});