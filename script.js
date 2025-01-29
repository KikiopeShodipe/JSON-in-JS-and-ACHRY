document.getElementById("fetchDatabth").addEventListener("click",fetchData);
document.getElementById("loadDatabth").addEventListener("click",fetchData);
const output = document.getElementById("output");
//create a async function fetchData from a dummy website
async function fetchData(){
    const reponse = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();//wait until the data has been generated
    localStorage.setItem("users",JSON.stringify(data));//converts the data into JSON format
    alert("Data has been fetched");
}
function loadData(){
    const storedData=localStorage.getItem("users");
    if(!storedData) return (output.innerHTML="<p>No data found</p>");
    const users = JSON.parse(storedData);//converts the JSON data into object
    output.innerHTML = users.map(user=>`<p>${user.name}<p>`).join("");
}