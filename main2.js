
  const firebaseConfig = {
    apiKey: "AIzaSyCiLUl2_RdOLVEjUFG0tloLOPsPV8nMc-4",
    authDomain: "kwitterhomework-71580.firebaseapp.com",
    projectId: "kwitterhomework-71580",
    storageBucket: "kwitterhomework-71580.appspot.com",
    messagingSenderId: "1016698860476",
    appId: "1:1016698860476:web:4ffd6d45b719fcb78231b9"
  };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey; 
    //Start code

    //End code
    });});}
getData();
