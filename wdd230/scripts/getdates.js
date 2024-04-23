document.addEventListener("DOMContentLoaded", function() {
  // Get the current year
  const currentYear = new Date().getFullYear();
  // Update the copyright year in the footer's first paragraph
  document.getElementById("currentYear").textContent = currentYear;

  // Get the date the document was last modified
  const lastModifiedDate = document.lastModified;
  // Update the last modified date in the second paragraph
  document.getElementById("lastModified").textContent = "Last Modified: " + lastModifiedDate;
});
