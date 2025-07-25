// js/search.js
// OnKit qidiruv bo‘limi – archive.org bilan bog‘langan

document.getElementById("searchBtn").addEventListener("click", async () => {
  const query = document.getElementById("searchInput").value.trim();
  if (!query) return alert("Iltimos, kitob nomini kiriting");

  const searchUrl = `https://archive.org/advancedsearch.php?q=${encodeURIComponent(query)}&fl[]=identifier&fl[]=title&fl[]=creator&output=json`;

  try {
    const res = await fetch(searchUrl);
    const data = await res.json();
    const results = data.response.docs;

    if (!results.length) {
      document.getElementById("searchResults").innerHTML = "<p>Hech narsa topilmadi 😕</p>";
      return;
    }

    const first = results[0];
    const identifier = first.identifier;
    const title = first.title || "Noma'lum nom";
    const creator = first.creator || "Noma'lum muallif";
    const downloadUrl = `https://archive.org/download/${identifier}/${identifier}.pdf`;

    document.getElementById("searchResults").innerHTML = `
      <div class="result">
        <h3>${title} - ${creator}</h3>
        <a href="${downloadUrl}" download target="_blank">📥 Yuklab olish</a>
        <br><br>
        <iframe src="${downloadUrl}" frameborder="0"></iframe>
      </div>
    `;
  } catch (e) {
    console.error(e);
    document.getElementById("searchResults").innerHTML = "<p>Xatolik yuz berdi. Qaytadan urinib ko‘ring.</p>";
  }
});
