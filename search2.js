// search.js
const sampleBooks = [
  "Yulduzli tunlar",
  "Kimyo asoslari",
  "Matematika 1-qism",
  "Fizika darsligi",
  "Tarix - O'zbekiston",
  "Adabiyot 9-sinf",
  "Shaxsiy rivojlanish yo‘llari",
  "Til va tafakkur",
  "Ona tili va adabiyot",
  "Axborot texnologiyalari asoslari"
];

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  searchResults.innerHTML = "";

  if (query.trim() === "") return;

  const matchedBooks = sampleBooks.filter(book =>
    book.toLowerCase().includes(query)
  );

  if (matchedBooks.length === 0) {
    searchResults.innerHTML = "<p>Hech narsa topilmadi.</p>";
  } else {
    matchedBooks.forEach(book => {
      const div = document.createElement("div");
      div.className = "result-item";
      div.textContent = book;
      searchResults.appendChild(div);
    });
  }
});
