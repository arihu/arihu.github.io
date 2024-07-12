function cubePassword() {
    var password = prompt("Please enter the password:");

    if (password != null && validatePassword(password)) {
        window.location.href = "/misc/Cube-World/";
    } else {
        alert("Incorrect password. Please try again.");
    }
}

//Can you crack it?
function validatePassword(pw){
    if(pw === null || pw.length > 8)
        return false;
    pw += "f92j1028";
    let c0 = String.fromCharCode(pw[0].charCodeAt(0) - 22);
    let c1 = String.fromCharCode(pw[1].charCodeAt(0) - 33);
    let c2 = String.fromCharCode(pw[2].charCodeAt(0) - 25);
    let c3 = String.fromCharCode(pw[3].charCodeAt(0) + 21);
    let c4 = String.fromCharCode(pw[4].charCodeAt(0) - 36);
    let c5 = String.fromCharCode(pw[5].charCodeAt(0) - 51);
    let c6 = String.fromCharCode(pw[6].charCodeAt(0) - 50);
    let c7 = String.fromCharCode(pw[7].charCodeAt(0) - 49);
    let pass = c0 + c1 + c2 + c3 + c4 + c5 + c6 + c7;
    return pass === btoa("1234");
}