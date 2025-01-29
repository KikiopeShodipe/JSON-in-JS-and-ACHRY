// Get buttons and add event listeners

document.getElementById("fetchDataBtn").addEventListener("click", fetchData);

document.getElementById("loadDataBtn").addEventListener("click", loadData);

const output = document.getElementById("output"); // Get output div

/**

* Fetches user data from an API and stores it as a JSON string in localStorage.

*/

async function fetchData() {

const response = await fetch("https://jsonplaceholder.typicode.com/users");

const data = await response.json(); // Convert response to JavaScript object

localStorage.setItem("users", JSON.stringify(data)); // Store as JSON string

alert("Data has been fetched");

}

/**

* Loads data from localStorage, parses it, and displays it.

*/

function loadData() {

const storedData = localStorage.getItem("users"); // Get stored JSON string

if (!storedData) return (output.innerHTML = "<p>No data found</p>");

const users = JSON.parse(storedData); // Convert JSON string back to JavaScript object

output.innerHTML = users.map(user => `<p>${user.name}</p>`).join("");

}