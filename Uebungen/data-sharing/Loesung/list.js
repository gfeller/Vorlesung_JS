var users = sessionStorage.getItem("users");
if( !users )
{
    sessionStorage.setItem("users", JSON.stringify([]));
    users = sessionStorage.getItem("users");
}
users = JSON.parse(users);
document.getElementById("numberOfElements").innerText = users.length;


document.getElementById("elements").innerHTML = users.length == 0 ? "none" : users.join("<br>"); //very very simple solution!
