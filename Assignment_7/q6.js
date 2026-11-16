// Q6: Real-time, case-insensitive student table filter.

const studentSearch = document.getElementById("studentSearch");
const studentRows = Array.from(document.querySelectorAll("#studentRows tr"));
const noResults = document.getElementById("noResults");

studentSearch.addEventListener("input", function () {
  const searchText = studentSearch.value.trim().toLowerCase();
  let visibleRows = 0;

  studentRows.forEach(row => {
    const rowText = row.textContent.toLowerCase();
    const matches = rowText.includes(searchText);
    row.hidden = !matches;

    if (matches) visibleRows++;
  });

  noResults.hidden = visibleRows !== 0;
});
