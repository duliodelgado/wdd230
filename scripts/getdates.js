  // Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date of the HTML document
const lastModified = document.lastModified;

// Update the elements with IDs 'currentYear' and 'lastModified' with the retrieved values
document.getElementById('currentYear').textContent = currentYear;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

