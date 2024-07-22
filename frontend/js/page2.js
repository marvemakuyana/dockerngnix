const apiUrl = "/api/data2";
const dataDiv = document.getElementById("data2");

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
