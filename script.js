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
    // var bal = Math.floor(Math.random()*100000) + 1000 + (Math.random()).toFixed(2);
    var testrand = new Math.seedrandom(document.cookie);
    var bal = (testrand()*100000).toFixed(0) + (testrand()).toFixed(2);
    var parts = bal.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    var fixedBal = parts.join(".");
    document.getElementById("balstr").innerHTML = fixedBal + "$";
    return 0;
}

function randGenPurchases() {
    var companies = ["Wendys", "MacDonalds", "Starbucks", "Walmart", "Google Play", "Lee Valley", "Costco", "Harveys", "GMC"];
    var TrnsList = document.getElementById("TransactionList");
    var TrnsDate = 27;
    var testrand = new Math.seedrandom(document.cookie);
    for(x=0;x<=25;x++){
        var testrand = new Math.seedrandom(document.cookie + x);
        var company = companies[Math.floor(testrand() * 9).toFixed(0)];
        var price = Math.floor(testrand() * 200) + 0.99;
        var col = document.createElement("TR");
        if(testrand() * 3 > 1){
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