function safe(n, v, e) { //name, value, expiration
    let date = new Date();
    date.setTime (date.getTime() + (e * 1000 * 60 * 60 * 24));
    const expires = "expires=" + date.toUTCString();
    document.cookie = n + "=" + v + "; " + expires + "; path=/";
  }

function exists(n) {
    cName = new Array();
    cValue = new Array();

    const array = document.cookie.split(";");

    for (let i = 0; i < array.length; i++) {
        if(array[i].charAt(0) == " ") array[i] = array[i].substring(1);
        const current = array[i].split("=");
        cName.push(current[0]);
        cValue.push(current[1]);
    }

    return cName.includes(n);
}

function getCookie (n){
    cName = new Array();
    cValue = new Array();

    const array = document.cookie.split(";");

    for (let i = 0; i < array.length; i++) {
        if(array[i].charAt(0) == " ") array[i] = array[i].substring(1);
        const current = array[i].split("=");
        cName.push(current[0]);
        cValue.push(current[1]);
    }

    return cValue(cName.indexOf(n));
}
  
function deleteAll (){
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function cookieMessage (){
    if(exists("erlaubt")){
        document.getElementById("cookieMessage").style.display = "none";
    }
    else{
        document.getElementById("cookieMessage").style.display = "block";
    }
}

function cookieButton (b){
    document.getElementById("cookieMessage").style.display = "none";
    safe("erlaubt", b, 30);
}