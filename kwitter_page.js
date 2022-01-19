//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyA9CsaAAF5iRP3FDRHV8pDUwfdsoeO-QXc",
      authDomain: "kwitter-5385d.firebaseapp.com",
      databaseURL: "https://kwitter-5385d-default-rtdb.firebaseio.com",
      projectId: "kwitter-5385d",
      storageBucket: "kwitter-5385d.appspot.com",
      messagingSenderId: "495517623972",
      appId: "1:495517623972:web:262db1f863431c7622a831"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name"); function send() { msg = document.getElementById("msg").value; firebase.database().ref(room_name).push({ name:user_name, message:msg, likes:0 }); document.getElementById("msg").value = ""; }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
