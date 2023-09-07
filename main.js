function adduser(){
    username=document.getElementById("input1").value;
    localStorage.setItem("Name of the user",username);
    push=document.getElementById("input2").value;
    localStorage.setItem("Password", push);
    window.location="index2.html";
    
    

}
