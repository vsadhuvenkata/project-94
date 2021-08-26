
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD7PvDC7Np6K-5sGFXJBnn6pWHK9ATue98",
      authDomain: "project-kwitter-65c33.firebaseapp.com",
      databaseURL: "https://project-kwitter-65c33-default-rtdb.firebaseio.com",
      projectId: "project-kwitter-65c33",
      storageBucket: "project-kwitter-65c33.appspot.com",
      messagingSenderId: "979102999782",
      appId: "1:979102999782:web:d7bd2a4fb71f3148b34727"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "welcome "+ user_name+"!";

function add_room(){
      room_name = document.getElementById("room_name").value;

      localStorage.setItem("roomname", room_name);

      window.location = "kwitter_page.html";

      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Room Name"
      });
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
