const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const searchTerm = searchInput.value;
  search(searchTerm);
});

function search(term) {
  // Placeholder function for searching, you can replace it with your own logic
  const results = [
    { title: "Result 1", url: "https://example.com/result1" },
    { title: "Result 2", url: "https://example.com/result2" },
    { title: "Result 3", url: "https://example.com/result3" },
  ];

  displayResults(results);
}

function displayResults(results) {
  searchResults.innerHTML = "";

  if (results.length === 0) {
    searchResults.innerHTML = "No results found.";
    return;
  }

  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    const link = document.createElement("a");
    link.href = result.url;
    link.textContent = result.title;
    searchResults.appendChild(link);
  }
}
