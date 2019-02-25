function passCheck() {
    if(document.getElementById('password').value == document.getElementById('confirm').value){
        if(document.getElementById('password').value.length < 8) {
            alert("Password is invalid, must be eight characters long.");
        }
        else {
            alert("Password is valid!");
        }
    }
    else {
        alert("Passwords do not match!");
    }
    
}