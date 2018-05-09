function send(){
    const users = JSON.parse(sessionStorage.getItem("users"));
    users.push(document.getElementById("name").value);
    sessionStorage.setItem("users", JSON.stringify(users));
    window.location.replace("list.html");
};