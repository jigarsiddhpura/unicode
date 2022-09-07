function check() {
    let x = document.getElementById("phone").value;
    let checknum;

    if (x < 10000000 || (x>'A' && x<'Z') || (x>'a' && x<'z')){
        checknum = "Contact is invalid";
        // event.preventDefault();
    }
    else{
        return none;
    }
    
    document.getElementById("incorrnum").innerHTML = checknum;

    let y = document.getElementById("mail").value;
    let checkmail;
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (y.match(mailformat)){
        return none;
    }
    else{
        checkmail = "Email Id is invalid";
    }
    document.getElementById("incorrmail").innerHTML = checkmail;

    
}