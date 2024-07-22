const apiUrl = "/api/data";
const dataDiv = document.getElementById("data");

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    dataDiv.innerHTML = `
      <h2>Data from Backend:</h2>
      <pre>${JSON.stringify(data, null, 2)}</pre>
    `;
  })
  .catch((error) => {
    dataDiv.innerHTML = `
      <h2>Error fetching data:</h2>
      <p>${error.message}</p>
    `;
  });
