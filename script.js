function Login(){
    document.cookie = "aaa=aaa; expires=01 Jan 1970 00:00:00 UTC; path=/;";
    var user = document.getElementById("usernameField").value;
    document.cookie = user;
    window.location.replace("account.html");
    return 0;
}

function initBank(){
    var user = document.cookie;
    document.getElementById("AccountLoggedInText").innerHTML = "Account Name: " + user;
    randGenBal();
    randGenPurchases();
    return 0;
}

function randGenBal() {
    var bal = Math.floor(Math.random()*1000000) + 1000 + (Math.random()).toFixed(2);
    document.getElementById("balstr").innerHTML = bal + "$";
    return 0;
}

function randGenPurchases() {
    var companies = ["Wendys", "MacDonalds", "Starbucks", "Walmart", "Google Play", "Lee Valley", "Costco", "Harveys", "GMC"];
    var TrnsList = document.getElementById("TransactionList");
    var TrnsDate = 27;
    for(x=0;x<=25;x++){
        var company = companies[Math.floor(Math.random() * 9).toFixed(0)];
        var price = Math.floor(Math.random() * 1000) + 0.99;
        var col = document.createElement("TR");
        if(Math.random() * 3 > 1){
            TrnsDate--;
        }
        TrnsList.appendChild(col);
        var companyElement = document.createElement("TD");
        col.appendChild(companyElement);
        companyElement.innerHTML = company;
        var TrnsType = document.createElement("TD");
        col.appendChild(TrnsType);
        TrnsType.innerHTML = "Debit";
        var PriceElement = document.createElement("TD");
        col.appendChild(PriceElement);
        PriceElement.innerHTML = price + "$";
        var DateElement = document.createElement("TD");
        col.appendChild(DateElement);
        DateElement.innerHTML = TrnsDate + "/5/2021";
    }
    Math.random()
}