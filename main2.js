//// Your web app's Firebase configuration
//// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//const firebaseConfig = {
//  apiKey: "AIzaSyCjpSDpADTfG2Q4eyurX7ZuT9d6zjf7PqM",
//  authDomain: "multiplepage-a355f.firebaseapp.com",
//  databaseURL: "https://multiplepage-a355f-default-rtdb.firebaseio.com",
//  projectId: "multiplepage-a355f",
//  storageBucket: "multiplepage-a355f.appspot.com",
//  messagingSenderId: "945549416496",
//  appId: "1:945549416496:web:33d9c0b8f7cfae3b5e35f5",
//  measurementId: "G-9L8SEG5R5T"
//};
//
//firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("Name of the user");
document.getElementById("username").innerHTML= "Welcome" +username+ "!";

  
        function logout(){
            document.getElementById("input1").value;
            window.location="index.html";
        }
        

    

//function showme(){
//    king = document.getElementById("water1").value;
//    
//    firebase.database().ref("/").child(king).update({
//        purpose:"adding water rides"
//    });
//    
//    localStorage.setItem("Water rides", king);
//    
//    window.location="index2.html";
//    
//      
//    
//}



