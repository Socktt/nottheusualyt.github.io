function Login(){
    document.cookie = "aaa=aaa; expires=01 Jan 1970 00:00:00 UTC; path=/;";
    var user = document.getElementById("usernameField").value;
    document.cookie = user;
    window.location.replace("account.html");
    return 0;
}

function WriteNameOfAccount(){
    var user = document.cookie;
    document.getElementById("AccountLoggedInText").innerHTML = "Account Name: " + user;
    return 0;
}
