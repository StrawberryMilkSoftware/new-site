function getOS() {
    return navigator.oscpu;
}

function checkOS(osName) {
    if (getOS() === osName) {
        return true;
    }
    return false;
}

let a = document.getElementById("downloadlink")
let button = document.getElementById('osbtn');
console.log(getOS());

if (checkOS("Linux x86_64")) {
    downloadlink.href = "http://github.com/StrawberryMilkSoftware/compix"
    osbtn.innerHTML = "Download for Linux 64-bit";
} else {
    osbtn.innerHTML = "Available on Linux 64-bit";
}